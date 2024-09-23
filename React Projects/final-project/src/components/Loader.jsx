import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../API/loader.json';

function Loader() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {/* Lottie animation player component */}
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className='scale-[1.25]'
      />
    </div>
  );
}

export default Loader;
