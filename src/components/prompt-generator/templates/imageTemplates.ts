
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const imageCategories: PromptCategory[] = [
  {
    id: 'image-artistic',
    name: 'Création Artistique',
    description: 'Templates pour la génération d\'images artistiques',
    icon: 'Palette'
  },
  {
    id: 'image-commercial',
    name: 'Images Commerciales',
    description: 'Templates pour les besoins marketing et business',
    icon: 'Camera'
  },
  {
    id: 'image-technical',
    name: 'Images Techniques',
    description: 'Templates pour les illustrations techniques et schémas',
    icon: 'Settings'
  }
];

export const imageTemplates: PromptTemplate[] = [
  {
    id: 'image-portrait-professional',
    name: 'Portrait Professionnel IA',
    category: 'image-commercial',
    domain: 'Photography',
    description: 'Génère des portraits professionnels de haute qualité',
    template: `Create a professional portrait with these specifications:

**SUBJECT & STYLE:**
- Subject: {subject_description}
- Photography style: {photography_style}
- Mood: {portrait_mood}
- Age range: {age_range}

**TECHNICAL SETTINGS:**
- Camera angle: {camera_angle}
- Lighting: {lighting_setup}
- Background: {background_type}
- Depth of field: {depth_of_field}

**COMPOSITION:**
- Framing: {framing_type}
- Pose: {pose_style}
- Expression: {facial_expression}
- Eye contact: {eye_contact}

**QUALITY SPECS:**
- Resolution: {image_resolution}
- Style: {artistic_style}
- Color palette: {color_palette}
- Professional grade, commercial quality

**CLOTHING & APPEARANCE:**
- Attire: {clothing_style}
- Accessories: {accessories}
- Grooming: {grooming_level}

Negative prompts: blurry, low quality, amateur, distorted features, bad lighting`,
    variables: [
      { name: 'subject_description', type: 'text', label: 'Description du sujet', placeholder: 'Businessman, entrepreneur, doctor...', required: true },
      { name: 'photography_style', type: 'select', label: 'Style photo', options: ['Corporate', 'Creative', 'Lifestyle', 'Headshot', 'Environmental'], required: true },
      { name: 'portrait_mood', type: 'select', label: 'Ambiance', options: ['Confident', 'Approachable', 'Authoritative', 'Friendly', 'Serious'], required: true },
      { name: 'age_range', type: 'select', label: 'Tranche d\'âge', options: ['20-30 years', '30-40 years', '40-50 years', '50+ years'], required: true },
      { name: 'camera_angle', type: 'select', label: 'Angle caméra', options: ['Eye level', 'Slightly above', 'Slightly below', '3/4 angle'], required: true },
      { name: 'lighting_setup', type: 'select', label: 'Éclairage', options: ['Soft studio lighting', 'Natural window light', 'Dramatic lighting', 'Ring light', 'Three-point lighting'], required: true },
      { name: 'background_type', type: 'select', label: 'Arrière-plan', options: ['Plain white', 'Plain gray', 'Office environment', 'Blurred cityscape', 'Gradient'], required: true },
      { name: 'depth_of_field', type: 'select', label: 'Profondeur de champ', options: ['Shallow (f/1.4)', 'Medium (f/2.8)', 'Deep (f/5.6)'], required: true },
      { name: 'framing_type', type: 'select', label: 'Cadrage', options: ['Headshot', 'Head and shoulders', 'Half body', 'Three-quarter'], required: true },
      { name: 'pose_style', type: 'select', label: 'Style de pose', options: ['Straight on', 'Slight turn', 'Arms crossed', 'Hands visible', 'Leaning'], required: true },
      { name: 'facial_expression', type: 'select', label: 'Expression', options: ['Genuine smile', 'Confident smirk', 'Serious', 'Thoughtful'], required: true },
      { name: 'eye_contact', type: 'select', label: 'Contact visuel', options: ['Direct camera', 'Slightly away', 'Looking up', 'Looking down'], required: true },
      { name: 'image_resolution', type: 'select', label: 'Résolution', options: ['HD (1920x1080)', '4K (3840x2160)', 'Portrait (1080x1350)', 'Square (1080x1080)'], required: true },
      { name: 'artistic_style', type: 'select', label: 'Style artistique', options: ['Photorealistic', 'Cinematic', 'Commercial', 'Editorial'], required: true },
      { name: 'color_palette', type: 'select', label: 'Palette couleurs', options: ['Natural colors', 'Warm tones', 'Cool tones', 'Monochrome', 'Corporate blues'], required: true },
      { name: 'clothing_style', type: 'select', label: 'Style vestimentaire', options: ['Business suit', 'Smart casual', 'Medical scrubs', 'Professional attire'], required: true },
      { name: 'accessories', type: 'select', label: 'Accessoires', options: ['None', 'Glasses', 'Watch', 'Jewelry', 'Professional props'], required: false },
      { name: 'grooming_level', type: 'select', label: 'Niveau de présentation', options: ['Impeccable', 'Well-groomed', 'Natural'], required: true }
    ],
    tags: ['Image IA', 'Portrait', 'Professionnel', 'Business'],
    quality: 4.8,
    usageCount: 2340
  },
  {
    id: 'image-product-showcase',
    name: 'Showcase Produit Premium',
    category: 'image-commercial',
    domain: 'E-commerce',
    description: 'Images produit optimisées pour le e-commerce',
    template: `Generate a premium product showcase image:

**PRODUCT DETAILS:**
- Product: {product_name}
- Category: {product_category}
- Style: {product_style}
- Key features: {key_features}

**PHOTOGRAPHY SETUP:**
- Shot type: {shot_type}
- Angle: {camera_angle}
- Lighting: {lighting_style}
- Background: {background_style}

**COMPOSITION:**
- Arrangement: {composition_style}
- Props: {props_included}
- Context: {usage_context}
- Brand mood: {brand_personality}

**TECHNICAL SPECS:**
- Resolution: {image_resolution}
- Format: {image_format}
- Color mode: {color_mode}
- Quality: Commercial grade

**STYLING:**
- Color palette: {color_scheme}
- Visual style: {visual_treatment}
- Mood: {overall_mood}

Perfect for e-commerce, marketing materials, professional presentation`,
    variables: [
      { name: 'product_name', type: 'text', label: 'Nom du produit', placeholder: 'iPhone, sneakers, laptop...', required: true },
      { name: 'product_category', type: 'select', label: 'Catégorie', options: ['Electronics', 'Fashion', 'Beauty', 'Food', 'Home & Garden', 'Sports', 'Automotive'], required: true },
      { name: 'product_style', type: 'select', label: 'Style produit', options: ['Modern', 'Classic', 'Luxury', 'Minimalist', 'Vintage', 'Tech'], required: true },
      { name: 'key_features', type: 'text', label: 'Caractéristiques clés', placeholder: 'Wireless, waterproof, premium materials...', required: true },
      { name: 'shot_type', type: 'select', label: 'Type de prise', options: ['Hero shot', 'Detail macro', 'Lifestyle context', '360 view', 'Comparison'], required: true },
      { name: 'camera_angle', type: 'select', label: 'Angle caméra', options: ['Front view', '3/4 angle', 'Top down', 'Side profile', 'Low angle'], required: true },
      { name: 'lighting_style', type: 'select', label: 'Style éclairage', options: ['Soft studio', 'Dramatic shadows', 'Natural daylight', 'Neon accent', 'Gradient'], required: true },
      { name: 'background_style', type: 'select', label: 'Style arrière-plan', options: ['Pure white', 'Gradient', 'Textured', 'Environmental', 'Transparent'], required: true },
      { name: 'composition_style', type: 'select', label: 'Style composition', options: ['Centered', 'Rule of thirds', 'Dynamic diagonal', 'Floating', 'Grid layout'], required: true },
      { name: 'props_included', type: 'select', label: 'Accessoires inclus', options: ['None', 'Minimal props', 'Lifestyle props', 'Brand elements', 'Complementary products'], required: false },
      { name: 'usage_context', type: 'select', label: 'Contexte d\'usage', options: ['Studio clean', 'Lifestyle scene', 'Professional environment', 'Home setting', 'Outdoor'], required: true },
      { name: 'brand_personality', type: 'select', label: 'Personnalité marque', options: ['Premium luxury', 'Innovative tech', 'Friendly accessible', 'Professional reliable', 'Creative bold'], required: true },
      { name: 'image_resolution', type: 'select', label: 'Résolution', options: ['Square (1:1)', 'Landscape (16:9)', 'Portrait (4:5)', '4K Ultra HD'], required: true },
      { name: 'image_format', type: 'select', label: 'Format image', options: ['E-commerce standard', 'Social media', 'Print quality', 'Web optimized'], required: true },
      { name: 'color_mode', type: 'select', label: 'Mode couleur', options: ['Full color', 'Monochrome', 'Duotone', 'Brand colors'], required: true },
      { name: 'color_scheme', type: 'select', label: 'Palette couleurs', options: ['Brand consistent', 'Neutral tones', 'Vibrant colors', 'Monochromatic', 'Complementary'], required: true },
      { name: 'visual_treatment', type: 'select', label: 'Traitement visuel', options: ['Photorealistic', 'Stylized', 'Cinematic', 'Clean minimal', 'Artistic'], required: true },
      { name: 'overall_mood', type: 'select', label: 'Ambiance générale', options: ['Premium elegant', 'Fresh modern', 'Warm inviting', 'Bold dynamic', 'Calm peaceful'], required: true }
    ],
    tags: ['Image IA', 'Produit', 'E-commerce', 'Marketing'],
    quality: 4.9,
    usageCount: 1890
  },
  {
    id: 'image-logo-design',
    name: 'Générateur de Logo Créatif',
    category: 'image-artistic',
    domain: 'Design Graphique',
    description: 'Crée des concepts de logos originaux et professionnels',
    template: `Design a professional logo with these specifications:

**BRAND IDENTITY:**
- Company name: {company_name}
- Industry: {industry_sector}
- Brand personality: {brand_personality}
- Target audience: {target_demographic}

**DESIGN STYLE:**
- Logo type: {logo_type}
- Style: {design_style}
- Complexity: {complexity_level}
- Symbolism: {symbolic_elements}

**VISUAL ELEMENTS:**
- Color scheme: {color_palette}
- Typography: {font_style}
- Icon/Symbol: {icon_concept}
- Composition: {layout_composition}

**TECHNICAL REQUIREMENTS:**
- Format: Vector-style, scalable
- Versatility: Works in color and monochrome
- Applications: {usage_applications}
- Sizes: From business card to billboard

**BRAND VALUES:**
- Core message: {core_message}
- Emotion to convey: {emotional_tone}
- Differentiation: {unique_positioning}

Professional, memorable, timeless design that represents {company_name} in {industry_sector}`,
    variables: [
      { name: 'company_name', type: 'text', label: 'Nom de l\'entreprise', placeholder: 'TechCorp, Green Solutions...', required: true },
      { name: 'industry_sector', type: 'select', label: 'Secteur d\'activité', options: ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Food & Beverage', 'Consulting', 'Creative'], required: true },
      { name: 'brand_personality', type: 'select', label: 'Personnalité de marque', options: ['Professional', 'Innovative', 'Trustworthy', 'Creative', 'Friendly', 'Premium', 'Dynamic'], required: true },
      { name: 'target_demographic', type: 'select', label: 'Cible démographique', options: ['B2B executives', 'Young professionals', 'Families', 'Tech enthusiasts', 'Luxury consumers', 'Small businesses'], required: true },
      { name: 'logo_type', type: 'select', label: 'Type de logo', options: ['Wordmark', 'Lettermark', 'Symbol/Icon', 'Combination mark', 'Emblem'], required: true },
      { name: 'design_style', type: 'select', label: 'Style design', options: ['Minimalist', 'Modern', 'Classic', 'Geometric', 'Organic', 'Vintage', 'Futuristic'], required: true },
      { name: 'complexity_level', type: 'select', label: 'Niveau de complexité', options: ['Very simple', 'Simple', 'Moderate', 'Detailed'], required: true },
      { name: 'symbolic_elements', type: 'text', label: 'Éléments symboliques', placeholder: 'Growth, connection, innovation...', required: false },
      { name: 'color_palette', type: 'select', label: 'Palette de couleurs', options: ['Blue (trust)', 'Green (growth)', 'Red (energy)', 'Purple (luxury)', 'Orange (creativity)', 'Monochrome', 'Multi-color'], required: true },
      { name: 'font_style', type: 'select', label: 'Style typographique', options: ['Sans-serif modern', 'Serif traditional', 'Script elegant', 'Display bold', 'Custom lettering'], required: true },
      { name: 'icon_concept', type: 'text', label: 'Concept d\'icône', placeholder: 'Arrow, leaf, gear, abstract shape...', required: false },
      { name: 'layout_composition', type: 'select', label: 'Composition layout', options: ['Horizontal', 'Vertical', 'Circular', 'Badge style', 'Integrated text/icon'], required: true },
      { name: 'usage_applications', type: 'select', label: 'Applications d\'usage', options: ['Digital only', 'Print only', 'Digital + Print', 'Merchandise', 'Signage'], required: true },
      { name: 'core_message', type: 'text', label: 'Message principal', placeholder: 'Innovation, reliability, excellence...', required: true },
      { name: 'emotional_tone', type: 'select', label: 'Ton émotionnel', options: ['Confident', 'Approachable', 'Prestigious', 'Energetic', 'Calm', 'Exciting'], required: true },
      { name: 'unique_positioning', type: 'text', label: 'Positionnement unique', placeholder: 'What makes this brand different...', required: false }
    ],
    tags: ['Image IA', 'Logo', 'Design', 'Branding'],
    quality: 4.7,
    usageCount: 1650
  },
  {
    id: 'image-infographic-creator',
    name: 'Créateur d\'Infographies',
    category: 'image-technical',
    domain: 'Data Visualization',
    description: 'Génère des infographies informatives et attrayantes',
    template: `Create an informative infographic design:

**CONTENT STRUCTURE:**
- Topic: {infographic_topic}
- Data type: {data_type}
- Key message: {main_message}
- Target audience: {audience_level}

**DESIGN LAYOUT:**
- Format: {layout_format}
- Style: {visual_style}
- Color scheme: {color_scheme}
- Complexity: {information_density}

**DATA VISUALIZATION:**
- Chart types: {chart_types}
- Visual hierarchy: {hierarchy_approach}
- Flow: {information_flow}
- Call-outs: {highlight_elements}

**BRAND ELEMENTS:**
- Brand colors: {brand_colors}
- Typography: {text_style}
- Icons: {icon_style}
- Overall tone: {design_tone}

**TECHNICAL SPECS:**
- Dimensions: {output_dimensions}
- Resolution: High quality, print-ready
- Format: Professional infographic
- Readability: Optimized for {viewing_context}

Clear, engaging, data-driven visual communication about {infographic_topic}`,
    variables: [
      { name: 'infographic_topic', type: 'text', label: 'Sujet de l\'infographie', placeholder: 'Climate change, market analysis, process flow...', required: true },
      { name: 'data_type', type: 'select', label: 'Type de données', options: ['Statistics', 'Process steps', 'Comparison', 'Timeline', 'Survey results', 'Research findings'], required: true },
      { name: 'main_message', type: 'textarea', label: 'Message principal', placeholder: 'What key insight should viewers take away...', required: true },
      { name: 'audience_level', type: 'select', label: 'Niveau audience', options: ['General public', 'Business professionals', 'Technical experts', 'Students', 'Decision makers'], required: true },
      { name: 'layout_format', type: 'select', label: 'Format layout', options: ['Vertical flow', 'Horizontal timeline', 'Circular process', 'Grid layout', 'Mixed sections'], required: true },
      { name: 'visual_style', type: 'select', label: 'Style visuel', options: ['Modern minimalist', 'Corporate professional', 'Creative colorful', 'Scientific clean', 'Trendy illustration'], required: true },
      { name: 'color_scheme', type: 'select', label: 'Schéma couleurs', options: ['Corporate blues', 'Vibrant multi-color', 'Monochrome', 'Earth tones', 'Brand colors'], required: true },
      { name: 'information_density', type: 'select', label: 'Densité information', options: ['High detail', 'Moderate detail', 'Simple overview', 'Key points only'], required: true },
      { name: 'chart_types', type: 'select', label: 'Types de graphiques', options: ['Bar charts', 'Pie charts', 'Line graphs', 'Icons/Pictograms', 'Flow diagrams', 'Mixed charts'], required: true },
      { name: 'hierarchy_approach', type: 'select', label: 'Hiérarchie visuelle', options: ['Size-based', 'Color-based', 'Position-based', 'Typography-based', 'Combined approach'], required: true },
      { name: 'information_flow', type: 'select', label: 'Flux d\'information', options: ['Top to bottom', 'Left to right', 'Circular flow', 'Z-pattern', 'Modular sections'], required: true },
      { name: 'highlight_elements', type: 'select', label: 'Éléments de mise en relief', options: ['Key statistics', 'Important quotes', 'Action items', 'Conclusions', 'Surprising facts'], required: true },
      { name: 'brand_colors', type: 'text', label: 'Couleurs de marque', placeholder: 'Blue, orange, gray (or specify hex codes)', required: false },
      { name: 'text_style', type: 'select', label: 'Style de texte', options: ['Clean sans-serif', 'Modern typography', 'Bold headings', 'Minimal text', 'Data-focused'], required: true },
      { name: 'icon_style', type: 'select', label: 'Style d\'icônes', options: ['Line icons', 'Filled icons', 'Illustrated icons', 'Pictograms', 'Custom symbols'], required: true },
      { name: 'design_tone', type: 'select', label: 'Ton du design', options: ['Professional serious', 'Friendly approachable', 'Modern cutting-edge', 'Educational clear', 'Inspiring motivational'], required: true },
      { name: 'output_dimensions', type: 'select', label: 'Dimensions sortie', options: ['Social media (1080x1080)', 'Vertical poster (1080x1920)', 'Horizontal presentation (1920x1080)', 'Print ready (300 DPI)'], required: true },
      { name: 'viewing_context', type: 'select', label: 'Contexte de visualisation', options: ['Social media sharing', 'Presentation slides', 'Website embedding', 'Print materials', 'Mobile viewing'], required: true }
    ],
    tags: ['Image IA', 'Infographie', 'Data Viz', 'Communication'],
    quality: 4.6,
    usageCount: 1320
  },
  {
    id: 'image-architectural-render',
    name: 'Rendu Architectural Photoréaliste',
    category: 'image-technical',
    domain: 'Architecture',
    description: 'Génère des rendus architecturaux de qualité professionnelle',
    template: `Generate a photorealistic architectural rendering:

**PROJECT DETAILS:**
- Building type: {building_type}
- Architectural style: {architectural_style}
- Scale: {project_scale}
- Function: {building_function}

**DESIGN ELEMENTS:**
- Materials: {primary_materials}
- Color palette: {exterior_colors}
- Roof style: {roof_design}
- Windows: {window_style}

**ENVIRONMENT:**
- Setting: {site_context}
- Landscape: {landscaping_style}
- Time of day: {lighting_time}
- Weather: {weather_conditions}

**TECHNICAL SPECS:**
- View angle: {camera_angle}
- Perspective: {view_perspective}
- Lighting: {lighting_setup}
- Resolution: {render_quality}

**ATMOSPHERE:**
- Mood: {overall_mood}
- Season: {seasonal_context}
- Activity level: {human_activity}
- Surroundings: {neighborhood_context}

**RENDERING STYLE:**
Photorealistic architectural visualization, professional quality, detailed materials and textures, accurate lighting and shadows

Perfect for presentations, marketing, planning approvals`,
    variables: [
      { name: 'building_type', type: 'select', label: 'Type de bâtiment', options: ['Residential house', 'Apartment building', 'Office building', 'Retail space', 'Industrial facility', 'Mixed-use'], required: true },
      { name: 'architectural_style', type: 'select', label: 'Style architectural', options: ['Modern contemporary', 'Traditional', 'Minimalist', 'Industrial', 'Mediterranean', 'Scandinavian'], required: true },
      { name: 'project_scale', type: 'select', label: 'Échelle du projet', options: ['Single family home', 'Multi-unit building', 'Commercial complex', 'Urban development'], required: true },
      { name: 'building_function', type: 'select', label: 'Fonction du bâtiment', options: ['Residential', 'Commercial', 'Office', 'Mixed-use', 'Institutional', 'Industrial'], required: true },
      { name: 'primary_materials', type: 'select', label: 'Matériaux principaux', options: ['Concrete and glass', 'Brick and steel', 'Wood and stone', 'Modern composite', 'Traditional materials'], required: true },
      { name: 'exterior_colors', type: 'select', label: 'Couleurs extérieures', options: ['Neutral whites/grays', 'Warm earth tones', 'Bold accent colors', 'Natural material colors', 'Monochromatic'], required: true },
      { name: 'roof_design', type: 'select', label: 'Design de toiture', options: ['Flat modern', 'Gabled traditional', 'Hip roof', 'Shed style', 'Complex geometry'], required: true },
      { name: 'window_style', type: 'select', label: 'Style de fenêtres', options: ['Floor-to-ceiling glass', 'Traditional proportions', 'Ribbon windows', 'Punched openings', 'Mixed sizes'], required: true },
      { name: 'site_context', type: 'select', label: 'Contexte du site', options: ['Urban streetscape', 'Suburban neighborhood', 'Rural setting', 'Waterfront', 'Mountain location'], required: true },
      { name: 'landscaping_style', type: 'select', label: 'Style paysager', options: ['Minimal modern', 'Lush gardens', 'Native plants', 'Formal landscape', 'Natural setting'], required: true },
      { name: 'lighting_time', type: 'select', label: 'Moment de la journée', options: ['Golden hour sunset', 'Bright midday', 'Blue hour twilight', 'Dramatic sunrise', 'Overcast day'], required: true },
      { name: 'weather_conditions', type: 'select', label: 'Conditions météo', options: ['Clear sunny', 'Partly cloudy', 'Dramatic sky', 'Light rain', 'Perfect conditions'], required: true },
      { name: 'camera_angle', type: 'select', label: 'Angle de caméra', options: ['Eye level street view', 'Elevated perspective', 'Low dramatic angle', 'High overview', 'Corner perspective'], required: true },
      { name: 'view_perspective', type: 'select', label: 'Perspective de vue', options: ['Two-point perspective', 'Three-point perspective', 'Aerial view', 'Street level', 'Interior courtyard'], required: true },
      { name: 'lighting_setup', type: 'select', label: 'Configuration éclairage', options: ['Natural lighting only', 'Mixed natural/artificial', 'Dramatic architectural lighting', 'Warm interior glow'], required: true },
      { name: 'render_quality', type: 'select', label: 'Qualité du rendu', options: ['Ultra high resolution', 'High detail', 'Standard quality', 'Presentation ready'], required: true },
      { name: 'overall_mood', type: 'select', label: 'Ambiance générale', options: ['Welcoming and warm', 'Modern and sophisticated', 'Impressive and grand', 'Intimate and cozy'], required: true },
      { name: 'seasonal_context', type: 'select', label: 'Contexte saisonnier', options: ['Spring bloom', 'Summer lush', 'Autumn colors', 'Winter minimal', 'Year-round'], required: true },
      { name: 'human_activity', type: 'select', label: 'Activité humaine', options: ['People walking by', 'Quiet and serene', 'Bustling activity', 'Family-friendly scene'], required: true },
      { name: 'neighborhood_context', type: 'select', label: 'Contexte du quartier', options: ['Established neighborhood', 'New development', 'Historic district', 'Modern urban', 'Natural setting'], required: true }
    ],
    tags: ['Image IA', 'Architecture', 'Rendu 3D', 'Professionnel'],
    quality: 4.8,
    usageCount: 890
  }
];
