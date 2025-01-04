import React, { useState } from 'react';
import './FAQ.css';

const FAQsSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What is the Disaster Prediction System?",
      answer:
        "The Disaster Prediction System leverages AI-driven models to predict and provide recommendations for natural disasters such as floods, landslides, and Glacial Lake Outburst Floods (GLOFs) in Nepal.",
    },
    {
      id: 2,
      question: "How does the disaster prediction work?",
      answer:
        "The system collects weather and geographical data for specific locations in Nepal and uses AI models to forecast potential disasters, including weather conditions and disaster probabilities.",
    },
    {
      id: 3,
      question: "What technologies are used in this project?",
      answer:
        "The system uses Python (Flask/Django) for the backend, AI models in PyTorch/TensorFlow for disaster prediction, and React.js for the frontend. We also provide APIs for third-party integration.",
    },
    {
      id: 4,
      question: "Can I integrate the disaster prediction API into my platform?",
      answer:
        "Yes! Our disaster prediction system provides an API that can be integrated into other platforms for real-time disaster predictions and alerts.",
    },
    {
      id: 5,
      question: "What are the pricing plans for the API?",
      answer:
        "We offer a range of pricing plans based on usage. Contact us for more details on the pricing structure and to choose the best plan that fits your needs.",
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <section className="faqs" id="faq">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <div className="faqs-container">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div
              className={`faq-question ${activeFAQ === faq.id ? "active" : ""}`}
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
            </div>
            {activeFAQ === faq.id && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;
