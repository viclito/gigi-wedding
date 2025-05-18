import React, { useRef, useEffect, useState } from 'react';
import videoPlay from '../../assets/video.mp4';
import frame from '../../assets/frame.png';

const VideoPlayOnView = ({ 
  src, 
  poster, 
  alt, 
  width = '100%', 
  height = 'auto',
  mobileHeight = '300px', // Added mobile height prop
  scaleFactor = 1.1,
  transitionDuration = '0.5s',
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            videoRef.current.play().catch(error => {
              console.log('Autoplay prevented:', error);
            });
            setIsPlaying(true);
          } else {
            setIsInView(false);
            if (!videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="video-container m-auto relative rounded-2xl" 
      style={{ 
        width,
        height: isMobile ? mobileHeight : height,
        overflow: 'hidden',
      }}
    >
      {/* Conditional frame rendering */}
      { !isMobile && (
        <img 
          src={frame} 
          alt="" 
          className='absolute inset-0 w-[100%] h-[100%] pointer-events-none z-10'
          style={{
            objectFit: 'contain'
          }}
        />
      )}
      
      <div className='absolute z-20 w-full h-[100%] top-[10%] right-[10%]'></div>
      
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        alt={alt}
        controls={false}
        loop
        playsInline
        onClick={handleClick}
        className='absolute inset-0'
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          transition: `transform ${transitionDuration} ease`,
          transform: isInView ? `scale(${scaleFactor})` : 'scale(1)',
          padding: isMobile ? '0' : '10%'
        }}
      />
      
      <div className="video-controls absolute bottom-4 right-4 z-20">
        <button 
          onClick={handleClick}
          className="bg-black bg-opacity-50 text-white px-3 py-1 rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

const FourthPage = () => {
  return (
    <>
      <h1
        className="text-2xl md:text-3xl lg:text-5xl m-4 font-medium text-center mt-10 mb-12"
        style={{ fontFamily: "Playwrite DK Loopet, cursive" }}
      >
        Play With Us 
      </h1>
      <div className="flex justify-center">
        <VideoPlayOnView
          src={videoPlay}
          poster="/path/to/poster-image.jpg"
          alt="Description of video"
          width="80%"
          height="650px"
          mobileHeight="170px" // Set mobile height
          scaleFactor={1.15}
          transitionDuration="1.7s"
          showFrame={false} // Disable frame on all devices
        />
      </div>
    </>
  )
}

export default FourthPage;