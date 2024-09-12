import React from "react";

function Cart({ item }) {
//   console.log(item);
  return (
    <div className="mt-4 my-3 p-3 hover:scale-105 transition-all duration-300">
      <div className="card bg-base-100 w-80 h-96 shadow-xl dark:bg-gray-800 dark:text-gray-200">
        <figure>
          <img
            src={item.image}
            alt="Item"
            className="object-cover object-center h-48 w-full dark:brightness-90"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary dark:badge-gray-700">
              {item.category}
            </div>
          </h2>
          <p className="dark:text-gray-300">{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline dark:badge-gray-700">
              ${item.price}
            </div>
            <div className="py-2 rounded-lg border border-[1px] px-3 hover:bg-pink-400 dark:hover:bg-pink-600 cursor-pointer dark:border-gray-600">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
