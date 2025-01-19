import React from 'react'

const Signing = () => {
  return (
    <div className='grid gap-4 bg-black md:flex justify-around p-4 bg-opacity-10 backdrop-blur-sm text-white'>
        <p className='text-xs text-center md:text-md'>Copyright © {new Date().getFullYear()} Suave Music PR. All rights reserved.</p>
        <div className='grid justify-center items-center'>
            <div className='flex gap-3'>
                <a href='https://www.x.com/sauve-music-pr' className='text-xs md:text-lg pi pi-twitter'/>
                <a href='https://www.x.com/sauve-music-pr' className='text-xs md:text-lg pi pi-facebook'/>
                <a href='https://www.x.com/sauve-music-pr' className='text-xs md:text-lg pi pi-instagram'/>
                <a href='https://www.x.com/sauve-music-pr' className='text-xs md:text-lg pi pi-linkedin'/>
                <a href='https://www.x.com/sauve-music-pr' className='text-xs md:text-lg pi pi-tiktok'/>
                <a href='https://www.x.com/sauve-music-pr' className='pi pi-spotify'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    >
                    <path d="M12 0C5.383 0 0 5.383 0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12zm5.318 17.35c-.209.343-.651.45-1.004.241-2.755-1.684-6.224-2.064-10.338-1.129-.399.097-.801-.143-.9-.533-.096-.391.144-.801.533-.897 4.476-1.009 8.347-.583 11.395 1.23.343.208.45.652.241 1.005zm1.194-3.003c-.263.429-.829.569-1.257.306-3.157-1.939-7.969-2.508-11.682-1.371-.497.161-1.036-.112-1.199-.604-.161-.496.113-1.036.604-1.199 4.117-1.345 9.405-.701 12.938 1.553.429.262.569.829.306 1.259zm.048-3.048c-3.591-2.222-9.597-2.43-13.097-1.327-.602.194-1.257-.142-1.45-.742-.194-.602.142-1.257.742-1.45 4.012-1.213 10.434-.969 14.48 1.469.544.337.719 1.061.382 1.605-.336.545-1.06.72-1.605.382z" />
                    </svg>
                    </a>
                <a href='https://www.x.com/sauve-music-pr' className='text-xs md:text-lg pi pi-instagram'/>
                <a href='https://www.x.com/sauve-music-pr' className='text-xs md:text-lg pi pi-whatsapp'/>
            </div>
        </div>
    </div>
  )
}

export default Signing
