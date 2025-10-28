
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface ModuleItem {
  icon?: React.ReactNode;
  title: string;
  items: string[];
}

interface CourseModuleProps {
  title: string;
  description: string;
  modules?: ModuleItem[];
  children?: React.ReactNode;
}

const CourseModule: React.FC<CourseModuleProps> = ({
  title,
  description,
  modules,
  children
}) => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <SectionHeading
        title={title}
        description={description}
      />
      
      {modules && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {modules.map((module, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  {module.icon}
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default CourseModule;
