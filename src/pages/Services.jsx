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
        'Tailor-made packages suitable for harnessing buzz from a few weeks before a project`s release to maintaining PR momentum to the first pivotal moments after release.',
      color: 'bg-gradient-to-r from-blue-500 to-blue-300',
      icon: <FaBullhorn size={40} className="text-blue-700" />,
    },
    {
      name: 'Single Release Cycle',
      description:
        'Building momentum around a single into a broader artist narrative; with clearly definable & assessable artist goals, and suitable avenues for a team`s or individual artist`s needs',
      color: 'bg-gradient-to-r from-green-500 to-green-300',
      icon: <FaShareAlt size={40} className="text-green-700" />, 
    },
    {
      name: 'Post Release Campain',
      description:
        'Enabling artists to ride PR buzz post-release, or to plant seeds of a grander narrative for upcoming releases in organic non-gimmicky ways according to insider experience of more established PR chains.',
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
              className="relative w-[300px] h-[300px] border border-gray-300 rounded-lg shadow-xl overflow-hidden"
            >
              <img
                src={category.image || "/svgs/logo.svg"}
                className="w-full h-full object-cover"
                alt={`${category.name}'s pic`}
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white p-3">
                <h2 className="text-lg font-semibold">{category.name}</h2>
                <p className="text-sm">{category.description}</p>
              </div>
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