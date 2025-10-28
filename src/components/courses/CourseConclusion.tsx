
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

interface CourseConclusionProps {
  title: string;
  summary?: string;
  description?: string;
  nextSteps: string[];
  learningPoints?: string[];
}

const CourseConclusion: React.FC<CourseConclusionProps> = ({
  title,
  summary,
  description,
  nextSteps,
  learningPoints
}) => {
  const displayDescription = description || summary;

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <SectionHeading
        title={title}
        description={displayDescription}
      />
      
      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="space-y-6">
            {learningPoints && learningPoints.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-medium flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-4 w-4" />
                  Ce que vous avez appris
                </h4>
                <ul className="space-y-2 text-sm">
                  {learningPoints.map((point, index) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <h4 className="font-medium flex items-center gap-2 mb-3">
                <ArrowRight className="h-4 w-4" />
                Pour aller plus loin
              </h4>
              <ul className="space-y-2 text-sm">
                {nextSteps.map((step, index) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <Button asChild>
                <a href="/ressources">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explorer d'autres ressources
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseConclusion;
