import React from 'react';

const HeroSection = () => {
  return (
    // Hero section container with black background and gradient
    <section
      className="h-[500px]"
      style={{ background:'#2BCC7E' }}
    >
      <div className="mx-auto flex flex-col md:flex-row items-center max-w-7xl gap-6 justify-between">
        <div className="md:w-7/12">
          <h1 className="text-6xl font-bold mb-6 font-jakarta">
            <span className="text-black">Elastic Path</span>{' '}
            <span className="text-black">Composable Commerce</span>
          </h1>
          <p className="text-xl leading-relaxed text-black">
            API-first. Limitless potential. Easily tailor and scale your commerce solution to meet your exact
            requirements, now and in the future.
          </p>
          <p className="text-xl text-black">
            Start building today with a free trial
          </p>
          <div className="flex gap-4 mt-4">
          <button className="border-2 border-white border-solid text-black text-lg text--bold py-4 px-6 rounded-md bg-white hover:bg-green-500 hover:text-black transition duration-300">
            Try Now
          </button>
          <button
            className="border-2 border-white border-solid text-black text-lg text--bold py-4 px-6 rounded-md bg-transparent hover:bg-green-500 hover:text-white transition duration-300">
            Get In Touch
          </button>
          </div>
        </div>
        <div className="md:w-5/12 mt-0">
          <img
            src="https://elastic-path.transforms.svdcdn.com/production/images/Stylized-Product-Page-Images/Stylized-product-image_1080x960.png?w=900&h=900&q=90&fm=webp&fit=crop&dm=1691683044&s=4b3b3fdbbe15d5d37f82d76379402b9a"
            alt="Composable Commerce"
            className="w-full shadow-lg max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
