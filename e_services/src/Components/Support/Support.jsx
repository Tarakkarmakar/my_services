// Support.jsx

import React from 'react';
import { Link } from 'react-router-dom'; 
import "../../Components/styles.css"
const Support = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Support and Help</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Frequently Asked Questions (FAQs)</h2>
        <p>
          Check out our FAQs to find answers to common questions.
          <Link to="/faqs" className="text-blue-500 ml-1">
            FAQs
          </Link>
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Support Ticket System</h2>
        <p>
          Need further assistance? Submit a support ticket, and our team will get back to you.
          <Link to="/support-ticket" className="text-blue-500 ml-1">
            Submit a Ticket
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Support;
