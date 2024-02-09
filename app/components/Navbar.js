'use client'

import Link from 'next/link';
import Image from 'next/image';
import dots from '../../public/images/dots.svg';
import { usePathname } from 'next/navigation'
import { useState } from 'react';

const Navbar = () => {
    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);

    const navLinks = [
        {
            path: '/',
            title: 'Strona główna',
            id: 1
        },
        {
            path: '/skills',
            title: 'Umiejętności',
            id: 2
        },
        {
            path: '/portfolio',
            title: 'Portfolio',
            id: 3
        },
        {
            path: '/kontakt',
            title: 'Kontakt',
            id: 4
        },
    ]

    return (
        <>
        
            <nav className="absolute top-0 w-full">
                <button className="relative w-8 h-6 flex flex-col justify-between mt-6 ml-auto mr-8 lg:hidden z-50" onClick={ () => {openMenu ? setOpenMenu(false) : setOpenMenu(true)} }>
                    <span className={`w-full h-0.5 block bg-dark transition ${openMenu ? 'rotate-45 translate-y-[11px]' : ''}`}></span>
                    <span className={`w-full h-0.5 block bg-dark transition ${openMenu ? 'hidden' : ''}` }></span>
                    <span className={`w-full h-0.5 block bg-dark transition ${openMenu ? '-rotate-45 -translate-y-[11px]' : ''}`}></span>
                </button>

                <ul className={`${openMenu ? 'opacity-100 translate-y-0' : '-translate-y-full'} transition p-8 flex flex-col lg:flex-row text-end justify-end gap-6 lg:gap-12 absolute top-0 pt-20 lg:pt-8 lg:static overflow-hidden opacity-0 lg:translate-y-0  lg:opacity-100 bg-white lg:bg-transparent w-full z-40`}>
                   {navLinks.map( (link) => {
                        const isActive = pathname === link.path;

                        return(
                            <li key={link.id}>
                                <Link href={link.path} onClick={ () => {setOpenMenu(false)} } className={`font-semibold text-md lg:text-lg transition ${isActive ? 'text-orange' : 'text-dark'}`}>{link.title}</Link>
                                <span className={`hidden lg:block w-2 h-2 bg-turquoise rounded transition mt-1 mx-auto ${isActive ? 'opacity-100' : 'opacity-0'} `}></span>
                            </li>
                        )

                    })}
                </ul>
            </nav>


            <Image 
            className="absolute top-[-4rem] left-[-12rem] xl:left-[-8rem] z-[-1] opacity-70 h-auto"
            src={dots}
            width="527"
            alt="background"
        />

        </>
    )
}

export default Navbar;