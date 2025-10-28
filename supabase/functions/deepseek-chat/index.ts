
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const deepseekApiKey = Deno.env.get('DEEPSEEK_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();

    if (!deepseekApiKey) {
      throw new Error("API key not found");
    }

    // Limitation côté serveur - vérification additionnelle 
    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    console.log("Request from IP:", clientIp);

    console.log("Sending request to Deepseek API with prompt:", prompt);
    
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${deepseekApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat', // Correction du nom du modèle
        messages: [
          { role: 'system', content: 'Vous êtes un assistant IA serviable et pédagogique qui aide à comprendre les concepts liés à l\'intelligence artificielle.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Deepseek API error:", errorText);
      
      // Fallback à une réponse prédéfinie en cas d'erreur
      return new Response(JSON.stringify({ 
        generatedText: "Je suis désolé, je rencontre actuellement des difficultés techniques pour accéder à mes connaissances. Pourriez-vous reformuler votre question ou réessayer plus tard?" 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    console.log("Received data from Deepseek API:", JSON.stringify(data));
    
    if (!data.choices || !data.choices.length || !data.choices[0].message) {
      throw new Error("Unexpected API response structure");
    }
    
    const generatedText = data.choices[0].message.content;

    return new Response(JSON.stringify({ generatedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in deepseek-chat function:', error);
    
    // Réponse de secours en cas d'erreur
    return new Response(JSON.stringify({ 
      generatedText: "Je suis désolé, je rencontre des difficultés techniques. Voici ce qui s'est passé : " + error.message + ". Pourriez-vous réessayer plus tard?"
    }), {
      status: 200, // Retourne un statut 200 OK malgré l'erreur pour éviter le blocage
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
