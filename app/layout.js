import './globals.css'
import { Quicksand, Bree_Serif } from 'next/font/google';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./components/Navbar'));
const Footer = dynamic(() => import('./components/Footer'));

const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' });
export const bree = Bree_Serif({ subsets: ['latin'], weight: '400', variable: '--font-bree' });

export const metadata = {
  title: 'Portfolio MB',
  description: '',
  icons: {
    icon: '/images/favicon.ico'
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${bree.variable}`}>
      <body className='font-main min-h-screen flex flex-col justify-center'>
        <Navbar />
              {children}
        <Footer />
      </body>
    </html>
  )
}
 