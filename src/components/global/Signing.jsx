import React from 'react'

const Signing = () => {
  return (
    <div className='grid gap-4 bg-black md:flex justify-around p-4 bg-opacity-40 backdrop-blur-sm text-white'>
        <p className='text-xs text-center md:text-md'>Copyright © {new Date().getFullYear()} Suave Music PR. All rights reserved.</p>
        <div className='grid justify-center items-center'>
            <div className='flex items-center md:text-white gap-3'>
              <a href='https://www.x.com/sauvemusicpr' className='text-xs md:text-lg pi pi-twitter'/>
              <a href='https://www.instagram.com/sauve_musicpr' className='text-xs md:text-lg pi pi-instagram'/>
              <a href='https://linkedIn.com/company/suavemusicpr' className='text-xs md:text-lg pi pi-linkedin'/>
              <a href='https://wa.me/+256761334247' className='text-xs md:text-lg pi pi-whatsapp'/>
            </div>
        </div>
    </div>
  )
}

export default Signing
