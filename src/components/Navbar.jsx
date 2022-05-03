import React from "react";

const Navbar = () => {
  return (
    <div className="bg-transparent">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <h1 className="text-white display-4 text-6xl font-Raleway font-extrabold ">
              <span className="text-6xl text-orange-400 font-Raleway font-extrabold">
                D
              </span>
              ot
              <span className="text-6xl text-orange-400 font-Raleway font-extrabold ">
                C
              </span>
              om
            </h1>
          </a>
          <button type="button" className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold  ">
            <a className="mr-5 hover:text-primarycolor-500 cursor-pointer">
              Home
            </a>
            <a className="mr-5 hover:text-primarycolor-500 cursor-pointer">
              About
            </a>
            <a className="mr-5 hover:text-primarycolor-500 cursor-pointer">
              Services
            </a>
            <a className="mr-5 hover:text-primarycolor-500 cursor-pointer">
              Pricing
            </a>
            <a className="mr-5 hover:text-primarycolor-500 cursor-pointer">
              Pages
            </a>
            <a className="mr-5 hover:text-primarycolor-500 cursor-pointer">
              Contacts
            </a>
          </nav>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
