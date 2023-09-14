'use client';

import Image from 'next/image';
import icon1 from '../../public/images/skills-html.svg'
import icon2 from '../../public/images/skills-css.svg'
import icon3 from '../../public/images/skills-js.svg'
import icon4 from '../../public/images/skills-sass.svg'
import icon5 from '../../public/images/skills-tail.svg'
import icon6 from '../../public/images/skills-jquery.svg'
import icon7 from '../../public/images/skills-bootstrap.svg'
import icon8 from '../../public/images/skills-wp.svg'
import icon9 from '../../public/images/skills-react.svg'
import icon10 from '../../public/images/skills-ps.svg'
import icon11 from '../../public/images/skills-figma.svg'
import icon12 from '../../public/images/skills-xd.svg'
import { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {

  const skills1 = [
    { 'img': icon1, 'text': 'HTML', 'id': 0 },
    { 'img': icon2, 'text': 'CSS', 'id': 1 },
    { 'img': icon3, 'text': 'JavaScript', 'id': 2 },
    { 'img': icon4, 'text': 'SASS', 'id': 3 },
    { 'img': icon5, 'text': 'Tailwind', 'id': 4 }
  ];

  const skills2 = [
    { 'img': icon6, 'text': 'jQuery', id: 5 },
    { 'img': icon7, 'text': 'Bootstrap', id: 6 },
    { 'img': icon8, 'text': 'WordPress', id: 7 },
    { 'img': icon9, 'text': 'React', id: 8 },
  ];

  const skills3 = [
    { 'img': icon10, 'text': 'Photoshop', id: 9 },
    { 'img': icon11, 'text': 'Figma', id: 10 },
    { 'img': icon12, 'text': 'Adobe XD', id: 11 }
  ];

  return (
    <main className="pt-10 pb-[11rem] lg:pt-28">
      <div className='container mx-auto font-main'>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h1 className='text-4xl uppercase font-semibold text-center mb-16'>Umiejętności</h1>

            <ul className='flex flex-wrap gap-4 lg:gap-16 justify-center'>
              {skills1.map((item) => <li key={item.id} className='flex flex-col items-center text-center transition hover:scale-125'>
                <figure className="h-10 w-10 lg:h-16 lg:w-14">
                  <Image
                    src={item.img}
                    alt="icon"
                    className="max-h-full mx-auto h-[2rem] lg:h-[3.25rem]"
                  />
                </figure>
                <figcaption>{item.text}</figcaption>
              </li>)}

            </ul>

            <ul className='flex flex-wrap gap-4 lg:gap-16 justify-center my-10'>
              {skills2.map((item) => <li key={item.id} className='flex flex-col items-center text-center transition hover:scale-125'>
                <figure className="h-10 w-10 lg:h-16 lg:w-14">
                  <Image
                    src={item.img}
                    alt="icon"
                    className="max-h-full mx-auto h-[2rem] lg:h-[3.25rem]"
                  />
                </figure>
                <figcaption>{item.text}</figcaption>
              </li>)}
            </ul>

            <ul className='flex flex-wrap gap-4 lg:gap-16 justify-center'>
              {skills3.map((item) => <li key={item.id} className='flex flex-col items-center text-center transition hover:scale-125'>
                <figure className="h-10 w-10 lg:h-16 lg:w-14">
                  <Image
                    src={item.img}
                    alt="icon"
                    className="max-h-full mx-auto h-[2rem] lg:h-[3.25rem]"
                  />
                </figure>
                <figcaption>{item.text}</figcaption>
              </li>)}

            </ul>
          </motion.div>
        </AnimatePresence>




      </div>
    </main>
  )
}
