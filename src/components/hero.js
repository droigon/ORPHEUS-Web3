import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import hero from '../images/hero.png'



export default function Hero() {
  return (
    <section>
      <main className='md:relative md:flex h-[700px] mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-5 lg:px-8 xl:mt-18  '>
    <div className=" mt-10 w-full px-4 sm:mt-12 md:w-1/2 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
     <div className="text-left lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block font-Cinzel font-normal  text-transparent bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 xl:inline">YET THE STORY OF</span>{' '}
        <span className="block font-Cinzel font-normal  text-transparent bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 xl:inline tracking-[25px]">ORPHEUS</span>
      </h1>
      <p className="mt-3 text-base text-wBgText dark:text-ashs-1 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Web3 fullstack and NFT developer, with experience in delivering end-to-end UX/UI design for software products.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className=" rounded-md shadow">
          <a
            href="#"
            className=" w-full flex items-center text-gold-1 border border-gold-1 divide-gold-2  justify-center px-8 py-3 text-base font-medium rounded-sm  text-transparent bg-clip-text bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 md:py-4 md:text-lg md:px-10"
          >
           WORKS
          </a>
          </div>
          <div className='mt-3 sm:mt-0 sm:ml-3'>  
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-sm text-white dark:text-oph_black-1 bg-gradient-to-r from-gold-1 via-gold-2 to-gold-3 md:py-4 md:text-lg  lg:px-10"
          >
           FREE STUFF
          </a>
        </div>
      </div>
      </div>
  </div>
  <div className="w-full bg-white-hero dark:bg-hero bg-contain bg-no-repeat max-w-full object-cover h-96  sm:h-96 md:h-96 lg:mt-1 lg:w-half lg:h-full mt-10 md:absolute md:block  md:right-0  md:w-1/2">
    
  
</div>


</main>
<div>
</div>
</section>
    )
  }
  