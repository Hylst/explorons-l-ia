
import React, { useState } from 'react';
import ApplicationSelector from './ApplicationSelector';
import ApplicationDetail from './ApplicationDetail';
import { applicationsData } from './ApplicationsData';

const MLApplications = () => {
  const [selectedTab, setSelectedTab] = useState("healthcare");
  
  const selectedApplication = applicationsData.find(app => app.id === selectedTab) || applicationsData[0];
  
  return (
    <div className="w-full mt-12 mb-20">
      <div className="mb-8">
        <h3 className="heading-sm mb-4">Applications de l'IA par secteur</h3>
        <p className="text-muted-foreground mb-8">
          L'intelligence artificielle transforme profondément de nombreux secteurs, apportant des innovations 
          significatives et de nouvelles opportunités. Explorez les applications principales par domaine.
        </p>
        
        <ApplicationSelector 
          applications={applicationsData}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
      </div>
      
      <ApplicationDetail application={selectedApplication} />
    </div>
  );
};

export default MLApplications;
