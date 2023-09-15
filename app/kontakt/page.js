'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import img from '../../public/images/envelope.svg'
import cv from '../../public/cv.pdf'

export default function Contact() {

  return (
    <main className="pt-10 pb-[11rem] lg:pt-28">
      <div className='container mx-auto font-main'>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h1 className='text-4xl uppercase font-semibold text-center mb-24'>Kontakt</h1>

            <div className="flex flex-wrap justify-center lg:justify-start">
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                <a href="mailto:banas.martynaa@gmail.com" className='hover:text-orange transition font-semibold'>banas.martynaa@gmail.com</a>
                <a href={cv} target="_blank" className="text-white transition uppercase inline-flex font-semibold py-3.5 px-6 mr-2 mt-8 bg-orange hover:brightness-95">Pobierz CV</a>
              </div>
              <div className="w-full lg:w-1/2">
                <AnimatePresence>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1, 1] }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <Image
                      src={img}
                      className='w-36 lg:w-[16.5rem] h-auto mt-10 mx-auto'
                      alt="image"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>


          </motion.div>
        </AnimatePresence>




      </div>
    </main>
  )
}
