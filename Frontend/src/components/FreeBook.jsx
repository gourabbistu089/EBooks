import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cart from './Cart';

function FreeBook() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const filterData = list.filter(item => item.category === "free")
    // console.log(filterData)
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container md:px-20 px-4 py-16 dark:text-white dark:bg-slate-900'>
        <div>
        <h1 className=' font-bold text-2xl pb-2'>Free Offered Books</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quas assumenda illum voluptatum facilis suscipit fugiat nulla earum sun odio fuga libero, distinctio recusandae voluptates nesciunt?</p>
        </div>
    
    <div>
    <Slider {...settings}>
      {
        filterData.map((item) => (
            <Cart key={item.id} item={item} />
        ))
      }
    </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook