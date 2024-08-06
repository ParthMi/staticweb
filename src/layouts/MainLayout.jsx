import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaLinkedinIn,
  FaPhoneAlt,
  FaArrowCircleUp,
} from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdMail } from "react-icons/md";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import logo from '../logo.png';

const MainLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
              setIsVisible(true);
          } else {
              setIsVisible(false);
          }
      };

      window.addEventListener('scroll', toggleVisibility);

      return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  return (
    <>
    <div className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
            <TbSquareRoundedArrowUpFilled />
        </div>
      <nav className="fixed z-20 w-full main-navbar-bg border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <NavLink to="/">
              <img src={logo} className="main-logo" />
              </NavLink>
            </span>
          </span>
          <button
            onClick={toggleDrawer}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isDrawerOpen}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Mobile Drawer */}
          <div className={`fixed inset-0 z-30 bg-gray-800 z-1500 bg-opacity-75 transition-opacity ${isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={toggleDrawer}></div>
          <div className={`fixed inset-y-0 left-0 w-64 z-1500 bg-gray-900 text-white transform transition-transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
            <div className="p-4">
              <button
                onClick={toggleDrawer}
                type="button"
                className="text-white float-right text-2xl"
              >
                &times;
              </button>
              <ul className="mt-4">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 px-3 rounded"
                    onClick={toggleDrawer}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="block py-2 px-3 rounded"
                    onClick={toggleDrawer}
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/aboutus"
                    className="block py-2 px-3 rounded"
                    onClick={toggleDrawer}
                  >
                    About US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faqs"
                    className="block py-2 px-3 rounded"
                    onClick={toggleDrawer}
                  >
                    FAQ'S
                  </NavLink>
                </li>
                <li>
                <NavLink
                    to="/blog"
                    className="block py-2 px-3 rounded"
                    onClick={toggleDrawer}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactus"
                    className="block py-2 px-3 rounded"
                    onClick={toggleDrawer}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden w-full md:block md:w-auto">
            <ul className="main-navbar-bg font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  className="navlink block py-2 px-3 text-white rounded md:p-0"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="navlink block py-2 px-3 text-white rounded md:p-0"
                  aria-current="page"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className="navlink block py-2 px-3 text-white rounded md:p-0"
                  aria-current="page"
                >
                  About US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className="navlink block py-2 px-3 text-white rounded md:p-0"
                  aria-current="page"
                >
                  FAQ'S
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/blog"
                  className="navlink block py-2 px-3 text-white rounded md:p-0"
                  aria-current="page"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className="navlink block py-2 px-3 text-white rounded md:p-0"
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="whatsapp-link">
        <NavLink to="https://api.whatsapp.com/send/?phone=919978841409&text&type=phone_number&app_absent=0">
          <SiWhatsapp />
        </NavLink>
      </div>
      <main className="pt-[72px]">{children}</main>
      <footer className="bg-gray-900 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                <NavLink to="/">
                <img src={logo} className="main-logo h-[60px]" />
              </NavLink>
              <div className="w-full mt-5 mb-3">
                    <p className="text-base text-body-color dark:text-dark-6">
                     Contact: (+91) 997 884 1409
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-body-color dark:text-dark-6">
                    E-Mail: agastyainternational0@gmail.com
                    </p>
                  </div>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Quick Links
                </h2>
                <ul className="text-gray-200 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <NavLink
                    to='/'
                    classname="hover:underline"
                    aria-current="page">Home</NavLink>
                  </li>
                  <li className="mb-4">
                    <NavLink
                    to='/products'
                    classname="hover:underline"
                    aria-current="page">Product</NavLink>
                  </li>
                  <li className="mb-4">
                    <NavLink
                    to='/aboutus'
                    classname="hover:underline"
                    aria-current="page">About Us</NavLink>
                  </li>
                  <li className="mb-4">
                    <NavLink
                    to='/contactus'
                    classname="hover:underline"
                    aria-current="page">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <div className="grid grid-cols-5 gap-2">
                  <span className="hover:cursor-pointer">
                    <a href="https://www.facebook.com/profile.php?id=61561396934662&mibextid=ZbWKwL">
                      <FaFacebookF className="social-link" />
                    </a>
                  </span>
                  <span className="hover:cursor-pointer">
                    <a href="https://www.instagram.com/agastya.international0/">
                      <FaInstagram className="social-link" />
                    </a>
                  </span>
                  <span className="hover:cursor-pointer">
                    <a href="https://api.whatsapp.com/send/?phone=919978841409&text&type=phone_number&app_absent=0">
                      <FaWhatsapp className="social-link" />
                    </a>
                  </span>
                  <span className="hover:cursor-pointer">
                    <a href="https://pin.it/4bdQG3lqH">
                      <FaPinterest className="social-link" />
                    </a>
                  </span>
                  <span className="hover:cursor-pointer">
                    <a href="https://www.linkedin.com/in/agastya-international-7585a9319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <FaLinkedinIn className="social-link" />
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-200 font-medium">
                  <li className="mb-4">
                    <NavLink to='/privacy-policy'>
                    <span href="#" className="hover:underline">
                      Privacy Policy
                    </span>
                    </NavLink>
                  </li>
                  <li>
                  <NavLink to='/terms-and-condition'>
                    <span href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-white">
              © 2024{" "}
              <span href="/" className="hover:underline">
                Agastya International
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
