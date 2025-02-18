import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/global/Signing';
import MusicRequestForm from '../components/forms/MusicRequestForm';

const AboutUs = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);
  const team = [
    { name: 'Joe Watema', image: 'images/Joseph Watema pic.png', title: 'Team Lead', description: 'joe.watema@suavemusicpr.com' },
    { name: 'Tela Wangeci', image: 'images/Tela Wangeci pic.jpg', title: 'Ops & Partnerships', description: '--' },
    { name: 'Christopher Mwesigwa', image: '', title: 'IT & Systems', description: 'admin@suavemusicpr.com' }
  ];

  const artists = [
    { name: 'Kezerod', image: 'images/Kezerod.jpg', description: '' },
  ];

  const logos = [
    'logos/mugibson.com logo.png',
  ];  

  return (
    <div className="relative h-screen overflow-auto">
      <GlobalHeader />

      <div className='text-center border-b'>
        <button 
          onClick={() => setToggleMusicForm(true)}
          title={'Submit your music to us and we shall settle a quick call for review'}
          className='my-8 text-white px-16 py-3 bg-black bg-opacity-80 rounded-[5px] transparent font-[600] text-md hover:bg-opacity-90 text-center'
        >
          Get started with us
        </button>
      </div>

      {/* Team Section */}
      <section className="border-b my-3">
        <h1 className="text-center text-3xl font-bold">Meet The Team</h1>
        <div className="py-6 flex justify-center items-center gap-8 flex-wrap">
          {team.map(({ name, image, title, description }, index) => (
            <section key={index} className="mx-3 md:w-[200px] w-full">
              <div className="text-center bg-gray py-3">
                <p className="font-bold text-lg">{name}</p>
                <p className="font-thin text-md uppercase">{title}</p>
                <a href={`mailto:${description}`} className="font-thin text-xs">{description}</a>
              </div>
              <div className="bg-black bg-opacity-40 h-[250px] w-full relative">
                <img
                  src={image || '/svgs/logo.svg'}
                  className="w-full h-full object-cover"
                  alt={`${name}'s pic`}
                />
              </div>
            </section>
          ))}
        </div>
      </section>


      {/* Artists Roster */}
      <section>
        <h1 className="text-center text-3xl font-bold">Artist Roster</h1>
        <div className="py-10 flex justify-center items-center gap-8 flex-wrap">
          {artists.map((member, index) => (
            <section key={index} className="h-[350px] w-full md:w-[350px]">
              <div
                className="h-[100%] mx-3 bg-cover"
                style={{ backgroundImage: `url(${member.image || '/svgs/logo.svg'})` }}
              >
                <p className="flex items-center justify-center h-full bg-black bg-opacity-60 hover:bg-opacity-70 cursor-pointer font-[600] text-lg text-white">
                  {member.name}
                </p>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* As Seen On Section */}
      <section className='mb-16'>
        <h1 className="text-center text-3xl font-bold py-8">As Seen In</h1>

        <div className='flex justify-center items-center w-full'>
          <div className="relative w-[300px] h-[300px] border border-gray-300 rounded-lg shadow-xl overflow-hidden">
            <img
              src={'images/The Culturing logo.png' || "/svgs/logo.svg"}
              className="w-full h-full object-contain p-6"
              alt={`The Culturing's pic`}
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-90 text-white p-3">
              <h2 className="text-lg font-semibold">The Culturing</h2>
            </div>
          </div>
        </div>

        {/* <h1 className="text-center text-3xl font-bold mt-16 py-2 border-y">More Partners</h1> */}
        {/* <div className="py-10 overflow-hidden text-center">
          <div className="flex gap-24">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div> */}
      </section>

      <div className="md:absolute w-full">
        <Signing />
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      <MusicRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default AboutUs;