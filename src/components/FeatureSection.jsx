import React from 'react';
import './FeatureSection.css';

import { Box, Typography } from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "AI-Driven Weather Forecasting",
      description: "Get precise and real-time weather predictions powered by advanced AI models.",
      icon: <CloudQueueIcon fontSize="large" color="primary" />,
    },
    {
      id: 2,
      title: "Disaster Probability Predictions",
      description: "Stay informed about potential disasters with high-accuracy probability assessments.",
      icon: <WarningAmberIcon fontSize="large" color="error" />,
    },
    {
      id: 3,
      title: "Tailored Alerts for Safety Measures",
      description: "Receive customized alerts and recommendations to ensure timely action during emergencies.",
      icon: <NotificationsActiveIcon fontSize="large" color="success" />,
    },
  ];

  return (
    <Box className="features-section" id="features">
      <Typography variant="h4" className="features-title">
        Key Features
      </Typography>
      <Box className="features-container">
        {features.map((feature) => (
          <Box key={feature.id} className="feature-card">
            <Box className="feature-icon">{feature.icon}</Box>
            <Typography variant="h6" className="feature-title">
              {feature.title}
            </Typography>
            <Typography variant="body2" className="feature-description">
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureSection;
