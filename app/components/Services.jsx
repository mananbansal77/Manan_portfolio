import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 textlg font-Ovo'
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My Services
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-center'
      >
        <ul className='list-disc text-left pl-5 space-y-3'>
          <li><strong>Data Structures & Algorithms (DSA):</strong> Efficient problem-solving and coding solutions.</li>
          <li><strong>Frontend Web Development:</strong> Responsive, user-friendly websites using modern frameworks.</li>
          <li><strong>Machine Learning:</strong> Basic ML models and data analysis solutions.</li>
          <li><strong>AWS Cloud Services:</strong> Certified AWS Cloud Practitioner with hands-on experience.</li>
        
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
          >
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>
              {title}
            </h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
              {description}
            </p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more <Image alt='' src={assets.right_arrow} className='w-4' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
