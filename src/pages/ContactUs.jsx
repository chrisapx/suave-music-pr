import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/global/Signing';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const ContactUs = () => {

  const [request, setRequest] = useState({
      name: "",
      email: "",
      artist: "",
      position: "",
      message: "",
    });
  
    const handleInputChange = (field, value) => {
      setRequest((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted:", request);
      setRequest({
        name: "",
        email: "",
        artist: "",
        position: "",
        message: "",
      });
    };

  return (
    <div className="relative h-screen overflow-auto">
      <GlobalHeader />

      <section className="pt-8">
        <div className="flex flex-wrap justify-center items-start gap-16 px-8">

          <div className="max-w-sm flex flex-col justify-center items-center gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Reach out to us</h2>
            <p className="text-gray-600 mb-8 mt-2 text-center">
              Have questions, feedback, or want to discuss your project in detail? 
              Feel free to reach out to us anytime! Whether you're looking for personalized 
              assistance, need help choosing the perfect package for your needs, or just want 
              to learn more about how we can elevate your music career, we're here to help. 
              Our team of dedicated professionals is ready to answer all your inquiries and 
              guide you through the process with care and expertise. Don’t hesitate—let’s make 
              something extraordinary together!
            </p>


            <div className="max-w-sm flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <FaPhone size={14} className="text-blue-600" />
                <a href='tel:+256761334247' className="text-gray-700">+256 (761) 334-247</a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope size={14} className="text-green-600" />
                <a href='mailto:info@suavemusicpr.com' className="text-gray-700">info@suavemusicpr.com</a>
              </div>
              <div className="flex items-center gap-4">
                <BsWhatsapp size={14} className="text-green-600" />
                <a href='https://wa.me/+256761334247' className="text-gray-700">+256 (761) 334-247</a>
              </div>
              <div className="flex items-center gap-4">
                <i size={14} className="text-black pi pi-twitter" />
                <a href='https://www.x.com/suavemusicpr/' className="text-gray-700">@suavemusicpr</a>
              </div>
              <div className="flex items-center gap-4">
                <i size={14} className="text-orange-600 pi pi-instagram" />
                <a href='https://www.instagram.com/suavemusicpr/' className="text-gray-700">@suavemusicpr</a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="max-w-md w-full bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Send Us a Message</h2>
            <form className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  value={request.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label htmlFor="artist" className="block text-gray-700 mb-2 font-medium">
                  Artist Name
                </label>
                <input
                  value={request.artist}
                  onChange={(e) => handleInputChange("artist", e.target.value)}
                  type="text"
                  id="artist"
                  placeholder="Enter artist name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Personal or work Email
                </label>
                <input
                  value={request.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <select
                  className="px-2 py-3 border rounded-md w-full"
                  value={request.position}
                  onChange={(e) => handleInputChange("position", e.target.value)}
                >
                  <option label='' value="" disabled>In capacity of?</option>
                  <option label='Artist' value="Artist">Promotion</option>
                  <option label='Member of artists team' value="Member of artists team">Distribution</option>
                  <option label='Label representative' value="Label representative">Management</option>
                </select>
              </div>


              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Enter Message
                </label>
                <textarea
                  value={request.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  id="message"
                  placeholder="Briefly descibe your service request in a few words"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full px-6 py-3 bg-black bg-opacity-60 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-70 transition-transform transform hover:scale-105"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="w-full mt-16 md: ">
        <Signing />
      </div>
    </div>
  );
};

export default ContactUs;