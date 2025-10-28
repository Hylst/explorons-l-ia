
import React from 'react';
import { motion } from 'framer-motion';
import { AIApplication } from './ApplicationsData';
import { Card } from '@/components/ui/card';

interface ApplicationDetailProps {
  application: AIApplication;
}

const ApplicationDetail: React.FC<ApplicationDetailProps> = ({ application }) => {
  const IconComponent = application.iconComponent;

  return (
    <div className="mt-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-full bg-primary/10">
          <IconComponent size={28} className="text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{application.name}</h3>
      </div>
      
      <p className="text-muted-foreground mb-8">{application.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {application.examples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-5 h-full flex flex-col shadow hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-3">{example.title}</h4>
              <p className="text-muted-foreground text-sm mb-4">{example.description}</p>
              
              <div className="mt-auto space-y-4">
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Technologies</h5>
                  <div className="flex flex-wrap gap-1">
                    {example.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-secondary/40 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-1">Bénéfices</h5>
                  <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                    {example.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-1">Défis</h5>
                  <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                    {example.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationDetail;
