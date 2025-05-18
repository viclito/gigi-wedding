import React from 'react'
import mainImage from '../../assets/pre/main.webp'

const FirstSec = () => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src={mainImage}
        alt="Wedding" 
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading='lazy'
      />
      <div className="absolute top-[25%] w-full text-center text-white font-bold drop-shadow-lg" style={{ fontFamily: 'Playwrite DK Loopet, cursive' }}>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-medium' style={{textShadow:'1px 2px 4px #000'}}>
            A New Life Begins Now, With My Love by My Side.
        </h1>
      </div>

      
    </div>
  );
};

export default FirstSec