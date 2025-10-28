
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChatButton from '@/components/chat/FloatingChatButton';
import SkipLink from '@/components/SkipLink';
import CookieConsent from '@/components/consent/CookieConsent';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import LesBases from '@/pages/LesBases';
import TypesIA from '@/pages/TypesIA';
import MachineLearning from '@/pages/MachineLearning';
import DeepLearning from '@/pages/DeepLearning';
import CasUsage from '@/pages/CasUsage';
import Ethique from '@/pages/Ethique';
import Ressources from '@/pages/Ressources';
import Actualites from '@/pages/Actualites';
import Histoire from '@/pages/Histoire';
import Glossaire from '@/pages/Glossaire';
import NotFound from '@/pages/NotFound';
import NiveauxIA from '@/pages/NiveauxIA';
import IAMultimodale from '@/pages/IAMultimodale';
import Confidentialite from '@/pages/Confidentialite';
import CGU from '@/pages/CGU';
import GestionDonneesRGPD from '@/pages/GestionDonneesRGPD';
import RegistreTraitements from '@/pages/RegistreTraitements';
import MentionsLegales from '@/pages/MentionsLegales';

// Cours
import ApprentissageSupervise from '@/pages/cours/ApprentissageSupervise';
import ApprentissageNonSupervise from '@/pages/cours/ApprentissageNonSupervise';
import BasesMathematiquesIA from '@/pages/cours/BasesMathematiquesIA';
import PromptEngineering from '@/pages/cours/PromptEngineering';
import ChainOfPrompts from '@/pages/cours/ChainOfPrompts';
import ParametresLLM from '@/pages/cours/ParametresLLM';
import IACreativite from '@/pages/cours/IACreativite';
import DeepLearningPratique from '@/pages/cours/DeepLearningPratique';
import IAEthique from '@/pages/cours/IAEthique';
import IAEntreprise from '@/pages/cours/IAEntreprise';
import NLPComprehension from '@/pages/cours/NLPComprehension';
import IAEnvironnement from '@/pages/cours/IAEnvironnement';

// Outils existants
import TestAPIIA from '@/pages/TestAPIIA';

// Nouveaux outils IA
import CalculateurCoutsIA from '@/pages/CalculateurCoutsIA';
import GenerateurPrompts from '@/pages/GenerateurPrompts';
import SimulateurIA from '@/pages/SimulateurIA';
import DetecteurContenuIA from '@/pages/DetecteurContenuIA';
import OptimiseurWorkflowIA from '@/pages/OptimiseurWorkflowIA';
import ComparateurModelesIA from '@/pages/ComparateurModelesIA';
import LLMDetails from '@/pages/LLMDetails';
import EthiqueGouvernance from '@/pages/EthiqueGouvernance';

const queryClient = new QueryClient();

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <SkipLink />
      <Header />
      <main 
        id="main-content"
        className="flex-grow focus:outline-none" 
        tabIndex={-1}
        role="main"
      >
        <div className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer author="Geoffroy Streit" email="geoffroy.streit@gmail.com" />
      <FloatingChatButton />
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="les-bases" element={<LesBases />} />
              <Route path="types-ia" element={<TypesIA />} />
              <Route path="niveaux-ia" element={<NiveauxIA />} />
              <Route path="machine-learning" element={<MachineLearning />} />
              <Route path="ia-multimodale" element={<IAMultimodale />} />
              <Route path="deep-learning" element={<DeepLearning />} />
              <Route path="cas-usage" element={<CasUsage />} />
              <Route path="ethique" element={<Ethique />} />
              <Route path="ressources" element={<Ressources />} />
              <Route path="actualites" element={<Actualites />} />
              <Route path="histoire" element={<Histoire />} />
              <Route path="glossaire" element={<Glossaire />} />
              
              {/* Routes des cours */}
              <Route path="cours/apprentissage-supervise" element={<ApprentissageSupervise />} />
              <Route path="cours/apprentissage-non-supervise" element={<ApprentissageNonSupervise />} />
              <Route path="cours/bases-mathematiques-ia" element={<BasesMathematiquesIA />} />
              <Route path="cours/prompt-engineering" element={<PromptEngineering />} />
              <Route path="cours/chain-of-prompts" element={<ChainOfPrompts />} />
              <Route path="cours/parametres-llm" element={<ParametresLLM />} />
              <Route path="cours/ia-creativite" element={<IACreativite />} />
              <Route path="cours/deep-learning-pratique" element={<DeepLearningPratique />} />
              <Route path="cours/ia-ethique" element={<IAEthique />} />
              <Route path="cours/ia-entreprise" element={<IAEntreprise />} />
              <Route path="cours/nlp-comprehension" element={<NLPComprehension />} />
              <Route path="cours/ia-environnement" element={<IAEnvironnement />} />
              
              {/* Pages spécialisées */}
              <Route path="types-ia/llm" element={<LLMDetails />} />
              <Route path="ethique-gouvernance" element={<EthiqueGouvernance />} />
              
              {/* Outils existants */}
              <Route path="test-api-ia" element={<TestAPIIA />} />
              
              {/* Nouveaux outils IA */}
              <Route path="calculateur-couts-ia" element={<CalculateurCoutsIA />} />
              <Route path="generateur-prompts" element={<GenerateurPrompts />} />
              <Route path="simulateur-ia" element={<SimulateurIA />} />
              <Route path="detecteur-contenu-ia" element={<DetecteurContenuIA />} />
              <Route path="optimiseur-workflow-ia" element={<OptimiseurWorkflowIA />} />
              <Route path="comparateur-modeles-ia" element={<ComparateurModelesIA />} />
              
              {/* Pages RGPD */}
              <Route path="confidentialite" element={<Confidentialite />} />
              <Route path="cgu" element={<CGU />} />
              <Route path="gestion-donnees-rgpd" element={<GestionDonneesRGPD />} />
              <Route path="registre-traitements" element={<RegistreTraitements />} />
              <Route path="mentions-legales" element={<MentionsLegales />} />
              
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <CookieConsent />
        </Router>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
