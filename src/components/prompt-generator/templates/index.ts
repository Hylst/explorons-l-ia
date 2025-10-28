
import { llmTemplates, llmCategories } from './llmTemplates';
import { imageTemplates, imageCategories } from './imageTemplates';
import { videoTemplates, videoCategories } from './videoTemplates';
import { audioTemplates, audioCategories } from './audioTemplates';
import { visionTemplates, visionCategories } from './visionTemplates';
import { ragTemplates, ragCategories } from './ragTemplates';
import { mediaGenerationTemplates, mediaGenerationCategories } from './mediaGenerationTemplates';
import { audioAnalysisTemplates, audioAnalysisCategories } from './audioAnalysisTemplates';
import { businessTemplates, businessCategories } from './businessTemplates';
import { educationTemplates, educationCategories } from './educationTemplates';
import { researchTemplates, researchCategories } from './researchTemplates';
import { automationTemplates, automationCategories } from './automationTemplates';
import { creativeWritingTemplates, creativeWritingCategories } from './creativeWritingTemplates';
import { socialMediaTemplates, socialMediaCategories } from './socialMediaTemplates';
import { healthWellnessTemplates, healthWellnessCategories } from './healthWellnessTemplates';
import { technicalTemplates, technicalCategories } from './technicalTemplates';
import { gamingTemplates, gamingCategories } from './gamingTemplates';
import { extraTemplates, extraCategories } from './extraTemplates';

// Combinaison de tous les templates spécialisés (150+ templates)
export const allSpecializedTemplates = [
  ...llmTemplates,
  ...imageTemplates,
  ...videoTemplates,
  ...audioTemplates,
  ...visionTemplates,
  ...ragTemplates,
  ...mediaGenerationTemplates,
  ...audioAnalysisTemplates,
  ...businessTemplates,
  ...educationTemplates,
  ...researchTemplates,
  ...automationTemplates,
  ...creativeWritingTemplates,
  ...socialMediaTemplates,
  ...healthWellnessTemplates,
  ...technicalTemplates,
  ...gamingTemplates,
  ...extraTemplates
];

// Combinaison de toutes les catégories spécialisées (17 catégories)
export const allSpecializedCategories = [
  ...llmCategories,
  ...imageCategories,
  ...videoCategories,
  ...audioCategories,
  ...visionCategories,
  ...ragCategories,
  ...mediaGenerationCategories,
  ...audioAnalysisCategories,
  ...businessCategories,
  ...educationCategories,
  ...researchCategories,
  ...automationCategories,
  ...creativeWritingCategories,
  ...socialMediaCategories,
  ...healthWellnessCategories,
  ...technicalCategories,
  ...gamingCategories,
  ...extraCategories
];

// Exports pour compatibilité avec l'interface
export const allPromptTemplates = allSpecializedTemplates;
export const allPromptCategories = allSpecializedCategories;

// Export des statistiques mises à jour
export const templateStats = {
  totalTemplates: allSpecializedTemplates.length,
  totalCategories: allSpecializedCategories.length,
  categoriesBreakdown: allSpecializedCategories.map(cat => ({
    name: cat.name,
    id: cat.id,
    count: allSpecializedTemplates.filter(t => t.category === cat.id).length
  }))
};

// Validation des templates pour s'assurer qu'ils respectent l'interface PromptTemplate
export const validateTemplates = () => {
  const issues = [];
  
  allSpecializedTemplates.forEach((template, index) => {
    // Vérification des propriétés requises
    const requiredProps = ['id', 'name', 'category', 'domain', 'description', 'template', 'variables', 'tags', 'quality', 'usageCount'];
    const missingProps = requiredProps.filter(prop => !(prop in template));
    
    if (missingProps.length > 0) {
      issues.push(`Template ${index} (${template.id || 'unknown'}): Missing properties: ${missingProps.join(', ')}`);
    }
    
    // Vérification des types
    if (template.variables && !Array.isArray(template.variables)) {
      issues.push(`Template ${index} (${template.id}): Variables should be an array`);
    }
    
    if (template.tags && !Array.isArray(template.tags)) {
      issues.push(`Template ${index} (${template.id}): Tags should be an array`);
    }
    
    if (template.quality && typeof template.quality !== 'number') {
      issues.push(`Template ${index} (${template.id}): Quality should be a number`);
    }
    
    if (template.usageCount && typeof template.usageCount !== 'number') {
      issues.push(`Template ${index} (${template.id}): UsageCount should be a number`);
    }
  });
  
  return issues;
};

console.log('📊 Templates Spécialisés chargés:', {
  totalTemplates: allSpecializedTemplates.length,
  totalCategories: allSpecializedCategories.length,
  validationIssues: validateTemplates()
});
