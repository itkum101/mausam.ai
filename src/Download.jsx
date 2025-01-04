import React from 'react';
import './Download.css';

const DownloadableResources = () => {
  const resources = [
    {
      id: 1,
      title: "Disaster Risk Management Localization Manual",
      description: "A manual focusing on enhancing local governments' roles in Disaster Risk Management (DRM).",
      file: "https://nepal.iom.int/sites/g/files/tmzbdl1116/files/documents/Disaster_Risk_Management_Localization_Manual.pdf",
    },
    {
      id: 2,
      title: "Emergency Preparedness and Response Planning",
      description: "Guidelines to help businesses and organizations mitigate and prevent disasters.",
      file: "https://dpnet.org.np/uploads/files/Emergency%20Preparedness%20and%20Response%20Planning_v1%202023-10-16%2010-36-05.pdf",
    },
    {
      id: 3,
      title: "National Policy for Disaster Risk Reduction",
      description: "A comprehensive policy for disaster risk reduction in Nepal.",
      file: "https://www.drrportal.gov.np/uploads/document/1476.pdf",
    },
    {
      id: 4,
      title: "Evacuation Plan (Nepali)",
      description: "Steps to take during evacuation in case of disasters, including recommended kits.",
      file: "https://www.publications.qld.gov.au/dataset/37304490-318d-4df7-9251-4d02dcdcef40/resource/d0a65a7b-97b9-4675-b5d6-537c8bae0194/download/3797cs-fs-2-np-prep-evacuation-nepali.pdf",
    },
    {
      id: 5,
      title: "Disaster Management: Policies and Practices in Nepal",
      description: "A report discussing Nepal's disaster management policies and practices.",
      file: "https://www.dpnet.org.np/uploads/files/Disaster%20management%20policies%20and%20practices%20in%20Nepal%202021-08-19%2008-42-50.pdf",
    },
  ];


  return (
    <section className="resources" id="resources">
      <h2 className="resources-title">Downloadable Resources</h2>
      <p className="resources-subtitle">
        Access key documents to learn more about De-LlMIT:
      </p>
      <div className="resources-container">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h3 className="resource-title">{resource.title}</h3>
            <p className="resource-description">{resource.description}</p>
            <a
              href={resource.file}
              download
              className="resource-download-button"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadableResources;
