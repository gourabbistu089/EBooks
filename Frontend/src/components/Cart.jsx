import React from "react";

function Cart({ item }) {
  const handleBuyNow = () => {
    window.open(item.pdfLink, "_blank"); // Opens the PDF link in a new tab
  };

  return (
    <div className="mt-4 my-3 p-3 hover:scale-105 transition-all duration-300">
      <div className="card bg-base-100 w-80 h-96 shadow-xl dark:bg-gray-800 dark:text-gray-200">
        <figure>
          <img
            src={item.image}
            alt={item.title} // Use item.title for better accessibility
            className="object-cover object-center h-48 w-full dark:brightness-90"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title} {/* Changed to use item.title */}
            
          </h2>
          <p className="dark:text-gray-300">{item.description}</p> {/* Added description */}
          <div >
            <p className="  text-lg font-medium text-slate-900 dark:text-slate-50">
              By- {item.author} {/* Assuming price is included in the item, add it here */}
            </p>
            
          </div>
          <div className=" flex justify-between mt-4">
            <div className=" bg-violet-700 dark:bg-slate-600  text-white rounded-xl px-4 py-2 ">{item.category}</div>
            <div 
              className="py-2 rounded-xl  border-[1px] px-3 bg-violet-600 text-white hover:bg-violet-700 border-violete-600 dark:bg-slate-800 cursor-pointer dark:border-gray-600"
              onClick={handleBuyNow} // Handle click event
            >
              View Book
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
