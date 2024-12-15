import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import About from './About';
function Home() {
  return (
    <>
    <div>
    <section class="text-white bg-black body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-left">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Explore the World, One
    <br class="hidden lg:inline-block"/>Country at a Time.
  </h1>
  <p class="mb-8 leading-relaxed text-white">Discover the history, culture, and beauty of every nation. Sort, search, and 
    <br />filter through countries to find the details you need.
  </p>
  <div class="flex items-start">
    <button class="inline-flex text-white bg-black to-transparent border-1 py-1 px-2 focus:outline-none hover:bg-indigo-600 text-lg rounded-full">
      Start Exploring
      <FaLongArrowAltRight className='mx-2 my-2' />
    </button>
  </div>
</div>

    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded-full" alt="hero" src="/src/assets/images/1.jpg"/>
    </div>
  </div>
</section>


    </div>
    <About/>
    
    </>
  )
}

export default Home