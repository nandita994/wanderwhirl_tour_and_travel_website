import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 w-full max-w-lg mx-4 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition duration-200"
              onClick={() => setOrderPopup(false)}
            >
              <IoCloseOutline className="text-3xl" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Book Your Trip
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Fill in your details to secure your booking
              </p>
            </div>

            {/* Body */}
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-800 transition duration-200"
                />
                <input
                  type="text"
                  placeholder="Home Address"
                  className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
                />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                />
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="h-10 bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;








/*
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {" "}
            {/* Header }
          /*  <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body }
          /*<div className="mt-4">
             <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;*/