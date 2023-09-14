'use client';

import Image from 'next/image';
import shape from '../../public/images/footer.svg';
import circle from '../../public/images/circle.png';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
    const pathname = usePathname();


    return (

        <footer className="fixed left-0 bottom-0 w-full z-40">

             <Image 
                className="w-full h-auto absolute left-0 bottom-0"
                src={shape}
                alt="background"
            />


            {pathname !== '/' ? (
                <div className='absolute bottom-4 left-4 flex items-center'>
                    <AnimatePresence>
                        <motion.div
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition= {{delay: 0.4, duration: 0.3}}
                        >
                        <Image 
                            className="mr-6 h-[5rem] w-[5rem] xl:h-[9.25rem] xl:w-[9.25rem]"
                            src={circle}
                            alt="background"
                        />
                        </motion.div>
                    </AnimatePresence>

                    <div>
                    <AnimatePresence>
                        <motion.div
                        initial={{x: 15, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition= {{delay: 0.6, duration: 0.5}}
                        >
                        <h2 className='text-2xl lg:text-4xl uppercase font-medium font-second tracking-wide mb-1 lg:mb-3 mt-2'>Martyna Banaś</h2>
                        <h3 className='text-1xl lg:text-2xl uppercase'>Front end developer</h3>
                        </motion.div>
                    </AnimatePresence>

                    </div>


                </div>
            ) : ''}
       
        </footer>



    )
}

export default Footer;