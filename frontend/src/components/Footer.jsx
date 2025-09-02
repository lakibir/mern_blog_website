import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='py-10 text-gray-200 bg-gray-800'>
      <div className='px-4 mx-auto max-w-7xl md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/' className='flex items-center gap-3'>
              {/* <img src={Logo} alt="" className='w-32'/> */}
              <img src={Logo} alt="" className='w-12 h-12 invert'/>
              <h1 className='text-3xl font-bold '>Logo</h1>
            </Link>
            <p className='mt-2'>Sharing insights, tutorials, and ideas on web development and tech.</p>
           
            <p className='text-sm'>Email: lakbrmulatu.com</p>
            <p className='text-sm'>Phone: +251964324525</p>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Quick Links</h3>
            <ul className='mt-2 space-y-2 text-sm'>
                <li>Home</li>
                <li>Blogs</li>
                <li>About Us</li>
                {/* <li>Contact Us</li> */}
                <li>FAQs</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex mt-2 space-x-4'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitterSquare/>
                <FaPinterest/>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
            <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
            <form action="" className='flex mt-4'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 text-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='px-4 text-white bg-red-600 rounded-r-md hover:bg-red-700'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='pt-6 mt-8 text-sm text-center border-t border-gray-700'>
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>Blog</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer