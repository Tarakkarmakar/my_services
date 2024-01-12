import React from 'react';
import { FaDesktop, FaMobileAlt, FaSignal } from 'react-icons/fa';

const Pricing = () => {
  const pricingData = [
    {
      title: 'Web Development',
      icon: <FaDesktop />,
      price: '$999',
      features: ['Custom Website Design', 'Responsive Layout', 'Content Management System'],
    },
    {
      title: 'App Development',
      icon: <FaMobileAlt />,
      price: '$1499',
      features: ['iOS & Android Development', 'User Authentication', 'Push Notifications'],
    },
    {
      title: 'Digital Marketing',
      icon: <FaSignal />,
      price: '$799',
      features: ['SEO Optimization', 'Social Media Marketing', 'Email Campaigns'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services & Pricing</h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose the perfect plan for your needs. If you need a custom plan,{' '}
            <a href="/Contact" className="font-medium text-blue-600 hover:text-blue-500">
              contact us
            </a>
            .
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center">
            {pricingData.map((service, index) => (
              <div key={index} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
                <div className="px-4 py-2 bg-gray-900 text-white text-center">
                  <span className="text-lg font-bold">{service.title}</span>
                </div>
                <div className="py-4 text-center ">
                  <span className="text-5xl text-gray-900">{service.icon}</span>
                </div>
                <div className="px-4 pb-4">
                  <span className="text-2xl font-bold">{service.price}</span>
                  <span className="text-gray-600"> / month</span>
                </div>
                <div className="px-4 pb-4">
                  <ul className="text-sm text-gray-600">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-4 pb-4">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => alert(`You selected the ${service.title} plan!`)}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;