
'use client';
import Image from 'next/image';
import arrow from '../../public/images/arrow-right.svg';
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// images
import img1 from '../../public/images/website-1.jpeg';
import img2 from '../../public/images/website-2.jpeg';
import img3 from '../../public/images/website-3.jpeg';
import img4 from '../../public/images/website-4.jpeg';

//import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

//tiny slider settings
const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  prevButton: '#slider-left',
  nextButton: '#slider-right',
  loop: false
};

export default function Portfolio() {

  const portfolioItems = [
    {
      type: 'Strona internetowa',
      name: 'Xcruiter',
      code: 'https://github.com/Marlily/marlily.github.io/tree/main/xcruiter',
      live: 'https://marlily.github.io/xcruiter/',
      img: '/images/website-1.jpeg'
    },

    {
      type: 'Strona internetowa',
      name: 'Lomundal',
      code: 'https://github.com/Marlily/marlily.github.io/tree/main/lomundal',
      live: 'https://marlily.github.io/lomundal/',
      img: '/images/website-2.jpeg'
    },

    {
      type: 'Strona internetowa',
      name: 'Music Show',
      code: 'https://marlily.github.io/music-show/',
      live: 'https://github.com/Marlily/marlily.github.io/tree/main/music-show',
      img: '/images/website-3.jpeg'
    },

    {
      type: 'Strona internetowa',
      name: 'Foodie',
      code: 'https://github.com/Marlily/marlily.github.io/tree/main/foodie',
      live: 'https://marlily.github.io/foodie/',
      img: '/images/website-4.jpeg'
    },


  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >

        <main className="pt-10 lg:pt-28 pb-36">
          <div className="container relative z-30">
            <h1 className='text-4xl uppercase font-semibold text-center mb-12 lg:mb-24'>Projekty</h1>

            <div className="lg:absolute w-full top-[60%] left-0 translate-y-[-50%] flex justify-end lg:justify-between px-10 z-40">
              <button type="button" id="slider-left" className="transition disabled:brightness-200 xl:ml-[-2rem]">
                <Image
                  src={arrow}
                  className="rotate-180 h-9 lg:h-11 w-auto mr-2"
                  alt="website"
                />
              </button>

              <button type="button" id="slider-right" className="transition disabled:brightness-200 xl:mr-[-2rem]">
                <Image
                  src={arrow}
                  className='h-9 lg:h-11 w-auto'
                  alt="arrow"
                />
              </button>
            </div>


            <TinySlider settings={settings}>
              {portfolioItems.map((el, index) => (
                <div key={index} className="relative">

                  <div className="flex flex-wrap items-center px-8 xl:px-0">
                    <div className="w-full lg:w-1/2 flex flex-wrap items-center justify-center text-center lg:justify-start lg:text-left">
                      <h2 className="text-xl lg:text-2xl font-normal uppercase w-full mb-4 lg:mb-10">{el.type} <span className="font-semibold">{el.name}</span></h2>

                      <a target="_blank" rel="noopener noreferrer" href={el.code} className="text-white transition uppercase inline-flex font-semibold py-3.5 px-6 mr-2 bg-turquoise hover:bg-turquoise-hover">KOD</a>
                      <a target="_blank" rel="noopener noreferrer" href={el.live} className="text-white transition uppercase inline-flex font-semibold py-3.5 px-6 bg-orange hover:bg-orange-hover">demo</a>

                    </div>
                    <div className="w-full lg:w-1/2">
                      <figure className="p-2.5 border-solid border-2 border-[#909090] rounded-xl bg-white max-w-full mx-auto mt-4 lg:mt-0 relative h-[21rem]">
                        <Image
                          className={`tns-lazy-img rounded-xl max-w-full h-full object-cover object-top p-2.5`}
                          src={el.img}
                          alt="website"
                          width={800}
                          height={800}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>

          </div>
        </main>

      </motion.div>
    </AnimatePresence>
  )
}
