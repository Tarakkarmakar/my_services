import React from 'react'
import "../../Components/styles.css"
import { MdWeb, MdPhoneAndroid, MdEqualizer, MdVisibility, MdInfoOutline } from 'react-icons/md';
import ServiceCard from '../../Components/ServicesCard/ServiceCard';
function About() {

 
  return (
    <div className="container mx-auto mt-8">
    <h1 className="text-4xl font-bold mb-6">About Us</h1>

    <div className="mb-8 p-6 bg-white shadow-lg rounded-md">
      <p className="text-lg">
        Welcome to <span className="text-blue-500 font-bold">E Services</span>, where innovation meets excellence. We are dedicated to providing cutting-edge digital services that empower businesses and drive growth.
      </p>
    </div>

    <h2 className="text-3xl font-bold mb-4">Our Digital Services</h2>

   
   <ServiceCard />
    <h2 className="text-3xl font-bold mb-4 mt-8">Total Growth</h2>

    <div className="mb-8 p-6 bg-white shadow-lg rounded-md">
      <p className="text-lg">
        At <span className="text-blue-500 font-bold">E Services</span>, we measure our success by the growth of our clients. Through innovative solutions and strategic partnerships, we have witnessed remarkable transformations and achievements.
      </p>
    </div>

    <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>

    <ul className="list-disc pl-6 mb-8">
      <li className="mb-2 flex items-center">
        <MdInfoOutline className="text-blue-500 mr-2" />
        Experienced and skilled team of professionals
      </li>
      <li className="mb-2 flex items-center">
        <MdInfoOutline className="text-blue-500 mr-2" />
        Commitment to quality and innovation
      </li>
      <li className="mb-2 flex items-center">
        <MdInfoOutline className="text-blue-500 mr-2" />
        Customized solutions tailored to your business needs
      </li>
      <li className="mb-2 flex items-center">
        <MdInfoOutline className="text-blue-500 mr-2" />
        Transparent communication and project management
      </li>
      <li className="mb-2 flex items-center">
        <MdInfoOutline className="text-blue-500 mr-2" />
        Proven track record of delivering successful projects
      </li>
    </ul>

    <div className="p-6 bg-white shadow-lg rounded-md text-center">
      <p className="text-lg">
        Thank you for considering <span className="text-blue-500 font-bold">E Services</span> for your digital needs. We look forward to the opportunity to work with you and contribute to your business's success.
      </p>
    </div>
  </div>
  )
}

export default About
