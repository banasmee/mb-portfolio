'use client';

import Image from 'next/image';
import circle from '../public/images/logo-circle.png';
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {


  return (
    <main className="flex flex-wrap justify-center items-center pt-6 px-4">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0,0, 1.2,1] }}
          transition={{ duration: 1 }}
        >
          <Image
            src={circle}
            alt="image"
            className='w-auto mx-auto h-[13rem] xl:h-[20.813rem]'
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1}}
          transition={{ duration: 0.3 }}
        >
          <div className="lg:ml-12 text-center lg:text-left pb-20">
            <h1 className={`text-4xl lg:text-6xl xl:text-7xl uppercase font-normal leading-normal font-second tracking-[0.305rem] mb-4 leading-10`}>Martyna Banaś</h1>
            <h2 className="text-2xl lg:text-3xl xl:text-[2.625rem] font-normal leading-normal uppercase">Front End Developer</h2>
            <p className="text-md lg:text-xl max-w-xl mt-4">Cześć! Zajmuję się tworzeniem stron internetowych, a&nbsp;także ich projektowaniem. Mam kilka lat doświadczenia,&nbsp;ale wciąż się uczę -&nbsp;aktualnie poznaję frameworki React oraz&nbsp;Next</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
