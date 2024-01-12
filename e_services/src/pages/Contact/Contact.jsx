import { useState } from 'react';

import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';
import { useFormValidation } from '../../Hooks/FormValidation';
function Contact() {
  const { values, errors, handleChange, handleSubmit } = useFormValidation();
  return (
    <div className="max-w-md mx-auto mt-10 p-6  rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <div className="relative flex ">
          
            <input
              type="email"
              id="email"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              className={`w-full border ml-6 rounded-md py-2 px-3 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your email"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <div className="relative">
         
            <input
              type="tel"
              id="phone"
              name="phone"
              value={values.phone || ''}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your phone number"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
          <div className="relative">
          
            <textarea
              id="message"
              name="message"
              value={values.message || ''}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your message (Should be greater than 50 Char..)"
              rows="4"
            />
          </div>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
}

export default Contact
