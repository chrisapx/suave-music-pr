import React, { useState } from 'react';
import Header from '../components/home/Header';
import Signing from '../components/global/Signing';
import MusicRequestForm from '../components/forms/MusicRequestForm';

const Home = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);
  return (
    <div className="relative h-screen w-full">
      {/* <video
        src="/videos/save_video.mp4"
        autoPlay
        loop
        muted
        className="top-0 left-0 h-screen w-full object-cover fixed"
      /> */}

      <img 
        src="/images/HomePic.jpeg" alt="BG Icon" 
        className="top-0 left-0 h-screen w-full object-cover fixed opacityn-90"
      />
      
      <div className="absolute top-0 left-0 h-full w-full bg-black/50 overflow-scroll">
        <Header />
        <div className="flex flex-col py-[17vh] justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Reimagine visibility
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Pioneering a multifaceted approach in the East African Music PR scene
          </p>
          <button 
            onClick={() => setToggleMusicForm(true)}
            title={'Submit your music to us and we shall settle a quick call for review'}
            className='my-12 text-black px-6 py-2 bg-white bg-opacity-80 rounded-[5px] transparent font-[600] text-md hover:bg-opacity-90'
          >
            Get started with us
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Signing />
        </div>
      </div>

      <MusicRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default Home;