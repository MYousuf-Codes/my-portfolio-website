// components/Services.tsx
import React from 'react';

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Building responsive and modern web applications.',
    icon: '🌐',
  },
  {
    title: 'Mobile Application Development',
    description: 'Building responsive and high-performance mobile applications.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces and experiences.',
    icon: '🎨',
  },
  {
    title: 'Custom GPT Developer',
    description: 'Developing custom GPT models for tailored solutions.',
    icon: '🤖',
  },
  {
    title: 'Chatbots Developer',
    description: 'Creating intelligent chatbots for automated customer interactions.',
    icon: '💬',
  },
  {
    title: 'AI Agent Developer',
    description: 'Building AI agents for complex problem-solving tasks.',
    icon: '🧠',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 cursor-pointer transition transform hover:scale-105 duration-300 rounded-lg shadow-lg hover:shadow-xl ">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;