import React from 'react'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center">
           
            <h1 className="text-2xl font-bold text-center sm:text-left">Emmanuel Agina</h1>

            <div className='flex space-x-6 mt-4 sm:mt-0'>
                <a href="https://www.linkedin.com/in/chidozie-agina-2a50742a8/" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
                    <FaLinkedin size={24}/>
                </a>
                <a href="https://x.com/Emmilex1996" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
                    <FaTwitter size={24}/>
                </a>
                <a href="https://web.facebook.com/profile.php?id=100082759790899" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
                    <FaFacebook size={24}/>
                </a>
            </div>

        </div>
    )
}

export default Footer;
