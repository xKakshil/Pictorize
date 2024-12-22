import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <p>Pictorize</p>
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @kakshil.dev | All right reserved.</p>
        <div className='flex gap-2.5'>
            <img width={35} src={assets.facebook_icon} alt="" />
            <img width={35} src={assets.twitter_icon} alt="https://www.instagram.com/xkakshil/"/>
            <img width={35} src={assets.instagram_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer