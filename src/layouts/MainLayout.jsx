import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";

const MainLayout = ({ children }) => {
  return (
    <>
      <nav className="fixed z-20 w-full main-navbar-bg border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <img src="agastya/logo.png" className="main-logo" />
            </span>
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="main-navbar-bg font-medium flex flex-col p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="/"
                  className="navlink block py-2 px-3 text-white rounded  md:p-0"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products/category"
                  className="navlink block py-2 px-3 text-white rounded  md:p-0"
                  aria-current="page"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className="navlink block py-2 px-3 text-white rounded  md:p-0"
                  aria-current="page"
                >
                  About US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className="navlink block py-2 px-3 text-white rounded  md:p-0"
                  aria-current="page"
                >
                  FAQ'S
                </NavLink>
              </li>
              <li>
                <span
                  href="#"
                  className="navlink block py-2 px-3 text-white rounded  md:p-0"
                  aria-current="page"
                >
                  Blog
                </span>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className="navlink block py-2 px-3 text-white rounded  md:p-0"
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="pt-[72px]">{children}</main>
      <footer className="bg-gray-900 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                <img src="agastya/logo.png" className="main-logo h-[60px]" />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul className="text-gray-200 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <span href="/" className="hover:underline">
                      Flowbite
                    </span>
                  </li>
                  <li>
                    <span
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul className="">
                  <li className="mb-6">
                    <div className="text-gray-200 dark:text-gray-400 font-medium flex flex-row">
                      <span  className="hover:cursor-pointer">
                        <a href="https://www.facebook.com/profile.php?id=61561396934662&mibextid=ZbWKwL">
                      <FaFacebookF className="mr-5" />
                        </a>
                      </span>
                      <span  className="hover:cursor-pointer" >
                      <a href="https://www.instagram.com/agastya1723?igsh=MTVmMG13d3Y3aWJiYg==">
                      <FaInstagram className="mr-5" />
                      </a>
                      </span>
                      <span className="hover:cursor-pointer">
                        <a href="https://api.whatsapp.com/send/?phone=919978841409&text&type=phone_number&app_absent=0">
                      <FaWhatsapp />
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="text-gray-200 dark:text-gray-400 font-medium flex flex-row">
                      <span className="hover:cursor-pointer" >
                      <a href="https://pin.it/4bdQG3lqH">
                      <FaPinterest className="mr-5" /></a>
                      </span>
                      <span className="hover:cursor-pointer">
                      <a href="https://www.linkedin.com/in/agastya-international-7585a9319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <FaLinkedinIn className="mr-5"/>
                      </a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-200 font-medium">
                  <li className="mb-4">
                    <span href="#" className="hover:underline">
                      Privacy Policy
                    </span>
                  </li>
                  <li>
                    <span href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-white">
              © 2023{" "}
              <span href="/" className="hover:underline">
                company
              </span>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
