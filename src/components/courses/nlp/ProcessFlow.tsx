
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProcessStep {
  title: string;
  description: string;
  input: string;
  output: string;
  transformation: string;
  icon: React.ReactNode;
}

interface ProcessFlowProps {
  title: string;
  description: string;
  steps: ProcessStep[];
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ title, description, steps }) => {
  const [activeStep, setActiveStep] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);

  const runAnimation = async () => {
    setIsAnimating(true);
    setActiveStep(-1);
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setActiveStep(i);
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const resetAnimation = () => {
    setActiveStep(-1);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex gap-2 justify-center">
          <Button onClick={runAnimation} disabled={isAnimating}>
            <Play className="h-4 w-4 mr-2" />
            {isAnimating ? 'Animation en cours...' : 'Démarrer l\'animation'}
          </Button>
          <Button variant="outline" onClick={resetAnimation}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      <div className="relative">
        {/* Ligne de connexion */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
        
        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0.3, scale: 0.9 }}
                animate={{
                  opacity: activeStep >= index ? 1 : 0.3,
                  scale: activeStep === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`relative ${
                  activeStep === index 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : activeStep > index 
                      ? 'border-green-300 bg-green-50' 
                      : ''
                }`}>
                  <CardContent className="p-4">
                    <div className="text-center mb-3">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-2 ${
                        activeStep >= index ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {step.icon}
                      </div>
                      <h4 className="font-semibold text-sm">{step.title}</h4>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-medium text-gray-600">Entrée: </span>
                        <code className="bg-gray-100 px-1 rounded">{step.input}</code>
                      </div>
                      
                      <AnimatePresence>
                        {activeStep === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2"
                          >
                            <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-400">
                              <span className="font-medium text-blue-800">Transformation: </span>
                              <p className="text-blue-700">{step.transformation}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <div>
                        <span className="font-medium text-gray-600">Sortie: </span>
                        <code className="bg-gray-100 px-1 rounded">{step.output}</code>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Flèche de connexion */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: activeStep > index ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className={`h-5 w-5 ${
                      activeStep > index ? 'text-primary' : 'text-gray-400'
                    }`} />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Description détaillée de l'étape active */}
      <AnimatePresence mode="wait">
        {activeStep >= 0 && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">
                  Étape {activeStep + 1}: {steps[activeStep].title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {steps[activeStep].description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProcessFlow;
