import React from 'react'
import book from '../../public/book.webp'
import book1 from '../../public/book1.webp'
import book2 from '../../public/book2.webp'

function Banner() {
  return (
    <div className="max-w-screen-2xl container flex flex-col md:flex-row md:justify-between md:px-20 px-4 md:gap-64 bg-[#EFFAFC] dark:bg-gray-800 transition-all duration-300 mx-auto">  
      {/* left side */}
      <div className='w-full md:w-1/2 mt-4 md:mt-28 md:order-1 order-2'>
        <div className='space-y-8 md:space-y-12'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>
          Unlock a Vast Collection of Free PDF Books and Explore Endless Knowledge Online{' '}
            <span className='text-pink-500'>adipisicing elit!</span>
          </h1>
          <p className='text-xl text-gray-700 dark:text-gray-300 font-serif'>
           Explore a wide range of free PDF books from various genres and authors. Whether you're searching for educational resources, literary classics, or the latest bestsellers, our extensive library has something for everyone. Easily download and enjoy books anytime, anywhere. Start your journey into the world of knowledge today!
          </p>
          <label className="input input-bordered flex items-center gap-2 bg-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 dark:text-gray-400"
            >
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
              />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
              />
            </svg>
            <input type="text" className="grow bg-transparent outline-none text-gray-800 dark:text-gray-200" placeholder="Email" />
          </label>
        </div>
        <button className="btn bg-violet-500 text-white mt-6 dark:bg-gray-600 dark:text-white">Subscribe</button>
      </div>

      {/* right side */}  
    
      <div className='w-full md:w-1/2 md:order-2 order-1 mt-4'>
        
        <img src={book} alt="book" className='dark:hidden w-full object-cover object-center dark:brightness-75' /> 
        <img src={book2} alt="book" className='hidden dark:block w-full object-cover object-center' />
        
      </div>
    </div>
  )
}

export default Banner;
