import React from 'react'
import "../../Components/styles.css"
import { MdWeb, MdPhoneAndroid, MdEqualizer, MdVisibility, MdInfoOutline } from 'react-icons/md';
const ServiceCard = () => {
    const ServiceCard = ({ Icon, title, description }) => (
        <div className="bg-white p-6 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <Icon className="text-4xl text-blue-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ServiceCard
      Icon={MdWeb}
      title="Web Development"
      description="Crafting responsive and visually stunning websites that leave a lasting impression."
    />
    <ServiceCard
      Icon={MdPhoneAndroid}
      title="Mobile App Development"
      description="Building robust and feature-rich mobile applications for iOS and Android platforms."
    />
    <ServiceCard
      Icon={MdEqualizer}
      title="Digital Marketing"
      description="Strategizing and executing digital marketing campaigns to boost online visibility and engagement."
    />
  </div>
  )
}

export default ServiceCard
