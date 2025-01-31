import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import MusicRequestForm from '../forms/MusicRequestForm';

const Header = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between md:justify-around md:items-center p-4 bg-opacity-10 backdrop-blur-xs sticky w-full top-0 z-10">
      {/* This p tag enagles center alignment of the pr logo on mobile screens */}
      <p className='md:hidden'/> 
      <button 
        onClick={() => setToggleMusicForm(true)}
        title={'Submit your music to us and we shall settle a quick call for review'}
        className='hidden md:block px-6 py-2 bg-white bg-opacity-80 rounded-[5px] transparent font-[600] text-md hover:bg-opacity-90'
      >
        Get started with us
      </button>

      <div className='grid gap-4 text-white text-center select-none'>
        <Link to={'/'} className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Cinzel', serif" }}>Suave</Link>
        <Link to={'/'} className='font-[300] text-xs md:text-sm uppercase'>Music PR</Link>
        <nav className="hidden md:flex gap-4 text-sm text-white font-medium uppercase">
          <NavLink to="/" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>About Us</NavLink>
          <NavLink to="/services" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Services</NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
        </nav>
      </div>
      
      <div className='md:flex items-center text-white gap-3 hidden'>
        <a href='https://www.x.com/suavemusicpr' className='textxs md:text-lg pi pi-twitter'/>
        <a href='https://www.instagram.com/suave_musicpr' className='text-xs md:text-lg pi pi-instagram'/>
        <a href='https://linkedIn.com/company/suavemusicpr' className='text-xs md:text-lg pi pi-linkedin'/>
        <a href='https://wa.me/+256761334247' className='text-xs md:text-lg pi pi-whatsapp'/>
        {/* <a href='https://www.x.com/sauve-music-pr' className='pi pi-spotify'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M12 0C5.383 0 0 5.383 0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12zm5.318 17.35c-.209.343-.651.45-1.004.241-2.755-1.684-6.224-2.064-10.338-1.129-.399.097-.801-.143-.9-.533-.096-.391.144-.801.533-.897 4.476-1.009 8.347-.583 11.395 1.23.343.208.45.652.241 1.005zm1.194-3.003c-.263.429-.829.569-1.257.306-3.157-1.939-7.969-2.508-11.682-1.371-.497.161-1.036-.112-1.199-.604-.161-.496.113-1.036.604-1.199 4.117-1.345 9.405-.701 12.938 1.553.429.262.569.829.306 1.259zm.048-3.048c-3.591-2.222-9.597-2.43-13.097-1.327-.602.194-1.257-.142-1.45-.742-.194-.602.142-1.257.742-1.45 4.012-1.213 10.434-.969 14.48 1.469.544.337.719 1.061.382 1.605-.336.545-1.06.72-1.605.382z" />
        </svg>
        </a> */}
      </div>

      <button className='md:hidden' onClick={() => setToggleMenu(true)}>
        <i className='pi pi-bars text-2xl text-white'></i>
      </button>

      <Sidebar
        visible={toggleMenu}
        position="top"
        onHide={() => setToggleMenu(false)}
        className=' h-[25vh]'
        content={({ closeIconRef, hide }) => (
          <nav className="flex gap-3 flex-col text-sm font-medium uppercase p-4">
            <button onClick={() => hide()} className='pi pi-times text-right'></button>
            <NavLink to="/" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
            <NavLink to="/about-us" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>About Us</NavLink>
            <NavLink to="/services" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Services</NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
          </nav>
        )}
      >
      </Sidebar>


      <MusicRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default Header;