import React from 'react'
import ServiceCard from '../../Components/ServicesCard/ServiceCard'
import hero from "../../assets/hero.jpg"
import "../../Components/styles.css"

const Home = () => {
  return (
    <div className='flex flex-col'>

<div class="flex flex-col md:flex-row lg:flex-row items-center justify-between p-10 bg-[#ffffff]">
    <div class="w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/2 pr-10">
        <h1 class="text-2xl md:text-4xl lg:text-4xl font-bold mb-4">Digitalize the World</h1>
        <p class="text-sm md:text-lg lg:text-lg text-gray-700">
        Our mission at <b>E Services</b> is to empower individuals
         and organizations to navigate and excel in the digital world.
          We strive to be a catalyst for positive change, leveraging
         technology to drive innovation, enhance efficiency,
          and foster meaningful connections.
        </p>
    </div>
    <div class="w-1/2 text-right">
        <img src={hero} alt="Graphic Illustration" class="max-w-full h-auto" />
    </div>
</div>

      <div className='flex flex-col align-center justify-center p-8'>



      <h2 className="text-3xl font-bold mb-4 m-auto pt-6">Our Services</h2>
      <ServiceCard />
      </div>
   
     
    </div>
  )
}

export default Home
