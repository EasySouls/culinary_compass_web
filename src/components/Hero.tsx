import React from "react";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex-1 pt-12 px-8'>
        <h1 className='w-1/2 mx-auto 2xl:text-[72px] text-center sm:text-[64px] text-[50px] font-extrabold'>
          Lose yourself in the world of spectacular dishes!
        </h1>
        <h3 className='text-[27px] text-center text-black font-light mt-5'>
          Search among the many possibilities, or share your favorites with
          others
        </h3>
      </div>
    </div>
  );
};

export default Hero;
