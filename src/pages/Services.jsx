import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/global/Signing';
import MusicRequestForm from '../components/forms/MusicRequestForm';
import { categories } from '../utils/dummy_data';
import { FaBullhorn, FaNewspaper, FaShareAlt } from 'react-icons/fa';

const Services = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);

  const packages = [
    {
      name: 'Project Rollout',
      description:
        'Our project rollout package includes everything you need to launch your music effectively. From creating a strategic PR plan to executing promotional campaigns, we ensure maximum visibility for your music. Collaborate with top influencers, distribute press releases, and get featured on major music platforms.',
      color: 'bg-gradient-to-r from-blue-500 to-blue-300',
      icon: <FaBullhorn size={40} className="text-blue-700" />,
    },
    {
      name: 'Single Release Cycle',
      description:
        'This package is designed to amplify your social media presence. With targeted campaigns across platforms like Instagram, Twitter, and TikTok, we help you reach your audience. Get tailored posts, viral strategies, and analytics to track your growth.',
      color: 'bg-gradient-to-r from-green-500 to-green-300',
      icon: <FaShareAlt size={40} className="text-green-700" />, 
    },
    {
      name: 'Post Release Campain',
      description:
        'Get the attention your music deserves with our media coverage package. We connect you with popular blogs, magazines, and radio stations to showcase your work. Boost your credibility and gain exposure in the competitive music industry.',
      color: 'bg-gradient-to-r from-purple-500 to-purple-300',
      icon: <FaNewspaper size={40} className="text-purple-700" />, 
    },
  ];

  return (
    <div className="relative h-screen overflow-auto">
      <GlobalHeader />

      <section className="pt-8 mb-8">
        <h1 className="text-center text-3xl font-bold mb-8">Service Categories</h1>
        <div className="flex flex-wrap justify-center items-start gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[300px] h-[180px] border border-gray-300 rounded-lg shadow-xl p-4 flex flex-col gap-3 justify-center items-center text-center hover:shadow-2xl hover:text-white hover:bg-black hover:bg-opacity-70 transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-8">
        <h1 className="text-center text-3xl font-bold mb-8">Music PR Packages</h1>
        <div className="flex flex-wrap justify-center items-start gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="flex flex-col items-center max-w-sm">
              <div
                className={`relative group ${pkg.color} text-white w-[300px] h-[220px] rounded-lg shadow-lg cursor-pointer overflow-hidden`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-bold">
                  {pkg.icon}
                  <h2 className="text-xl mt-2">{pkg.name}</h2>
                </div>
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => setToggleMusicForm(true)} className="px-8 py-3 bg-white text-black font-bold rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                    Order Package
                  </button>
                </div>
              </div>

              <p className="mt-4 w-[280px] text-center text-sm text-gray-700 leading-relaxed">
                {pkg.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full">
        <Signing />
      </div>

      <MusicRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default Services;