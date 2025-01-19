import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/home/Signing';

const AboutUs = () => {
  const team = [
    { name: "Joseph", image: "", tittle: "Founder", description: "" },
  ];

  const artists = [
    { name: "Dwayne", image: "", description: "" },
    { name: "Billy the kid", image: "", description: "" },
    { name: "Bella", image: "", description: "" },
  ];

  return (
    <div className="relative h-screen overflow-auto">
      {/* Sticky Header */}
      <GlobalHeader />

      {/* Team Section */}
      <section className="pt-16">
        <h1 className="text-center text-3xl font-bold">Meet The Team</h1>
        <div className="py-10 flex justify-center items-center gap-8 flex-wrap">
          {team.map((member, index) => (
            <section key={index} className='mx-3 md:w-[300px] w-full'>
              <div className="text-center bg-gray py-3">
                <p className="font-bold text-lg">{member.name}</p>
                <p className="font-thin text-md uppercase">{member.tittle}</p>
              </div>
              <div className="flex-1 bg-black bg-opacity-40">
                <img
                  src={member.image || '/svgs/logo.svg'}
                  className=""
                  width={"100%"}
                  height={'4000px'}
                  alt={`${member.name}'s pic`}
                />
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Artists Roster */}
      <section className="">
        <h1 className="text-center text-3xl font-bold">Artist Roster</h1>
        <div className="py-10 flex justify-center items-center gap-8 flex-wrap">
          {artists.map((member, index) => (
            <section key={index} className='h-[350px] w-full md:w-[350px] '>
              <div
                className="h-[100%] mx-3 bg-contain"
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

      {/* <div className="absolute bottom-0 left-0 w-full">
        <Signing />
      </div> */}
    </div>
  );
};

export default AboutUs;