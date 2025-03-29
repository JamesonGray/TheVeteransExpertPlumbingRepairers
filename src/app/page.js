"use client"

import Image from "next/image";
import { Poppins } from "next/font/google";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { useState } from "react";

const poppinsRegular = Poppins({
  weight: '300',
  subsets: ['latin'],
  style: 'normal',
});

const poppinsMedium = Poppins({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
});

const poppinsSemiBold = Poppins({
  weight: '500',
  subsets: ['latin'],
  style: 'normal',
});

const poppinsBold = Poppins({
  weight: '600',
  subsets: ['latin'],
  style: 'normal',
});
const poppinsExtraBold = Poppins({
  weight: '700',
  subsets: ['latin'],
  style: 'normal',
});

export default function Home() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  
  return (
    <>
      <div
        className="relative w-full bg-cover min-h-screen bg-center bg-no-repeat"
        style={{ backgroundImage: "url('bg.jpg')" }}
      >
        <div className="w-full absolute inset-0 bg-black/10"></div>
        <div className="relative z-30 flex flex-wrap items-center">
          <Image
            alt="logo"
            src="/0.jpg"
            width={160}
            height={160}
            className="p-4 rounded-full"
          />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden ml-auto mr-4 p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden fixed top-24 right-0 left-0 bg-blue-800 flex-col w-full z-50`}>
            <ul className="flex flex-col w-full">
              <li
                onClick={() => scrollToSection("services")}
                className={`py-3 px-4 text-white font-bold ${poppinsMedium.className} text-xl hover:bg-blue-700 hover:cursor-pointer`}
              >
                Services
              </li>
              <li
                onClick={() => scrollToSection("bookings")}
                className={`py-3 px-4 text-white font-bold ${poppinsMedium.className} text-xl hover:bg-blue-700 hover:cursor-pointer`}
              >
                Bookings
              </li>
              <li
                onClick={() => scrollToSection("pricing")}
                className={`py-3 px-4 text-white font-bold ${poppinsMedium.className} text-xl hover:bg-blue-700 hover:cursor-pointer`}
              >
                Pricing
              </li>
              <li
                onClick={() => scrollToSection("about us")}
                className={`py-3 px-4 text-white font-bold ${poppinsMedium.className} text-xl hover:bg-blue-700 hover:cursor-pointer`}
              >
                About Us
              </li>
            </ul>
            <button
              onClick={() => scrollToSection("bookings")}
              className={`m-4 bg-blue-600 p-3 rounded-xl shadow-md hover:bg-blue-500 text-white ${poppinsBold.className} text-xl`}
            >
              Order Now
            </button>
          </div>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex justify-evenly mt-10 mr-13 ml-auto h-10">
            <li
              onClick={() => scrollToSection("services")}
              className={`mx-5 text-white font-bold ${poppinsMedium.className} text-lg lg:text-3xl hover:cursor-pointer`}
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection("bookings")}
              className={`mx-5 text-white font-bold ${poppinsMedium.className} text-lg lg:text-3xl hover:cursor-pointer`}
            >
              Bookings
            </li>
            <li
              onClick={() => scrollToSection("pricing")}
              className={`mx-5 text-white font-bold ${poppinsMedium.className} text-lg lg:text-3xl hover:cursor-pointer`}
            >
              Pricing
            </li>
            <li
              onClick={() => scrollToSection("about us")}
              className={`mx-5 text-white font-bold ${poppinsMedium.className} text-lg lg:text-3xl hover:cursor-pointer`}
            >
              About Us
            </li>
          </ul>
          <button
            onClick={() => scrollToSection("bookings")}
            className={`hidden md:block mt-6 mr-4 lg:mr-10 bg-blue-800 py-2 px-4 lg:h-16 lg:w-50 rounded-xl lg:rounded-2xl shadow-md hover:bg-blue-700 text-white ${poppinsBold.className} text-lg lg:text-2xl`}
          >
            Order Now
          </button>
        </div>
        
        {/* Add a div that pushes content down when menu is open on mobile */}
        <div className={`${isMenuOpen ? 'h-64' : 'h-0'} md:h-0 transition-all duration-300 relative z-20`}></div>
        
        <div className="w-full relative z-10 p-4 mt-8 md:mt-15">
          <h1 id="sign" className={`slide-in text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl ${poppinsBold.className}`}>
            Your Local
          </h1>
          <h1
            id="sign" className={`slide-in mt-4 md:mt-10 text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl ${poppinsBold.className}`}
          >
            Plumbing Veterans
          </h1>
          <p
            id="sign"
            className={`slide-in mt-4 md:mt-7 text-white text-xl md:text-2xl lg:text-4xl ${poppinsSemiBold.className}`}
          >
            Experts in plumbing & repairs
          </p>
          <button
            onClick={() => scrollToSection("bookings")}
            className={`mt-6 md:mt-10 bg-blue-800 py-3 px-6 md:h-16 md:w-50 rounded-xl md:rounded-2xl shadow-md hover:bg-blue-700 text-white ${poppinsBold.className} text-lg md:text-2xl`}
          >
            Order Now
          </button>
        </div>
      </div>

      <section id="services" className="bg-gray-100 w-full min-h-screen py-8 px-4">
        <h1
          className={`mt-3 text-3xl md:text-4xl ${poppinsSemiBold.className} underline decoration-3 underline-offset-5`}
        >
          Services
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-40 mt-8">
          <div className="appear-animation bg-white flex flex-col items-center rounded-2xl p-4 w-full max-w-md shadow-md">
            <h1
              className={`mt-3 text-2xl md:text-3xl ${poppinsExtraBold.className}`}
            >
              Local Service
            </h1>
            <p
              id="priceClick"
              onClick={() => scrollToSection("pricing")}
              className={`mt-1 text-lg md:text-2xl hover:cursor-pointer ${poppinsMedium.className}`}
            >
              Click Here To See Prices
            </p>
            <p
              className={`w-full md:w-80 md:ml-7 text-lg md:text-2xl mt-3 mb-5 ${poppinsSemiBold.className}`}
            >
              We provide prompt and reliable plumbing solutions for homeowners
              and small businesses, ensuring your systems function smoothly.
            </p>
            <Image
              alt=""
              src="/unnamed.jpg"
              width={300}
              height={300}
              className="border-4 border-black rounded-2xl w-full max-w-xs"
            />
            <button
              onClick={() => scrollToSection("bookings")}
              className={`mt-5 bg-blue-800 py-2 px-4 md:h-17 md:w-60 rounded-xl md:rounded-2xl shadow-md hover:bg-blue-700 text-white ${poppinsBold.className} text-xl md:text-3xl`}
            >
              Book Now
            </button>
          </div>
          <div className="appear-animation bg-white flex flex-col items-center rounded-2xl p-4 w-full max-w-md shadow-md mt-8 md:mt-0">
            <h1
              className={`mt-3 text-2xl md:text-3xl ${poppinsExtraBold.className}`}
            >
              Industrial Service
            </h1>
            <p
              id="priceClick"
              onClick={() => scrollToSection("pricing")}
              className={`mt-1 text-lg md:text-2xl hover:cursor-pointer ${poppinsMedium.className}`}
            >
              Click Here To See Prices
            </p>
            <p
              className={`w-full md:w-80 md:ml-7 text-lg md:text-2xl mt-3 mb-5 ${poppinsSemiBold.className}`}
            >
              Specializing in complex installations and maintenance, we ensure
              optimal performance and compliance for large-scale operations.
            </p>
            <Image
              alt=""
              src="/city.jpg"
              width={300}
              height={200}
              className="h-auto w-full max-w-xs border-4 border-black rounded-2xl"
            />
            <button
              onClick={() => scrollToSection("bookings")}
              className={`mt-5 bg-blue-800 py-2 px-4 md:h-17 md:w-60 rounded-xl md:rounded-2xl shadow-md hover:bg-blue-700 text-white ${poppinsBold.className} text-xl md:text-3xl`}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section id="bookings" className="bg-blue-300 w-full min-h-screen py-8 px-4">
        <h1
          className={`text-3xl md:text-4xl ${poppinsSemiBold.className} underline decoration-3 underline-offset-5`}
        >
          Bookings
        </h1>
        <div className="flex justify-center items-center mt-4">
          <h1 className={`text-2xl md:text-4xl text-center ${poppinsSemiBold.className}`}>
            Need A Plumber Book Now
          </h1>
        </div>
        <div className="bg-white mx-auto mt-5 flex flex-col rounded-2xl p-4 w-full max-w-3xl shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              placeholder="First Name"
              required
              onChange={(e) => setName(e.target.value)}
              className={`w-full md:w-80 p-3 ${poppinsSemiBold.className} text-xl md:text-3xl text-black border-2 indent-2.5 placeholder-black border-black rounded-lg`}
            />
            <input
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full md:w-80 mt-4 md:mt-0 p-3 ${poppinsSemiBold.className} text-xl md:text-3xl text-black indent-2.5 placeholder-black border-2 border-black rounded-lg`}
            />
          </div>
          <input
            className={`mt-4 w-full p-3 ${poppinsSemiBold.className} text-xl md:text-3xl text-black indent-2.5 placeholder-black border-2 border-black rounded-lg`}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className={`mt-4 w-full h-40 md:h-65 p-3 ${poppinsSemiBold.className} text-xl md:text-3xl text-black indent-2.5 placeholder-black border-2 border-black rounded-lg placeholder:mb-auto`}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <a className="flex items-center justify-center" href={`mailto:theveteransexpertplumbingrepai@gmail.com?subject=New request From ${name} ${lastName}&body=${message}        ${email}`}>
            <button className={`mt-5 bg-blue-800 py-3 px-6 md:h-17 md:w-60 rounded-xl md:rounded-2xl shadow-md hover:bg-blue-700 text-white ${poppinsBold.className} text-xl md:text-3xl`}>
              Send Email
            </button>
          </a>
        </div>
      </section>

      <section id="pricing" className="bg-gray-100 w-full min-h-screen py-8 px-4">
        <h1
          className={`text-3xl md:text-4xl ${poppinsSemiBold.className} underline decoration-3 underline-offset-5 md:underline-offset-10`}
        >
          Pricing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="appear-animation flex items-center flex-col w-full bg-white rounded-lg p-4 shadow-md">
            <h1 className={`mt-2 text-xl md:text-3xl text-center ${poppinsBold.className}`}>Pipe Leakage Repairing</h1>
            <p className={`text-lg md:text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £150 - £175</p>
            <Image alt="" src="/pipeLeakage.jpg" height={300} width={300} className="w-full max-w-xs border-4 border-black rounded-lg"/>
          </div>
          <div className="appear-animation flex items-center flex-col w-full bg-white rounded-lg p-4 shadow-md">
            <h1 className={`mt-2 text-xl md:text-3xl text-center ${poppinsBold.className}`}>Local Expert Service</h1>
            <p className={`text-lg md:text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £175 - £350</p>
            <Image alt="" src="/download.jpg" height={300} width={300} className="w-full max-w-xs border-4 border-black rounded-lg"/>
          </div>
          <div className="appear-animation flex items-center flex-col w-full bg-white rounded-lg p-4 shadow-md">
            <h1 className={`mt-2 text-xl md:text-3xl text-center ${poppinsBold.className}`}>Shower Repairing</h1>
            <p className={`text-lg md:text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £125 - £150</p>
            <Image alt="" src="/showerReapiring.jpg" height={300} width={300} className="w-full max-w-xs border-4 border-black rounded-lg"/>
          </div>
          <div className="appear-animation flex items-center flex-col w-full bg-white rounded-lg p-4 shadow-md">
            <h1 className={`mt-2 text-xl md:text-[1.6rem] text-center ${poppinsBold.className}`}>Bathroom and Kitchen Sink</h1>
            <p className={`text-lg md:text-2xl mb-1 ${poppinsMedium.className}`}>Price £100 - £155</p>
            <Image alt="" src="/sinkReapir.jpg" height={300} width={300} className="w-full max-w-xs border-4 border-black rounded-lg"/>
          </div>
          <div className="appear-animation flex items-center flex-col w-full bg-white rounded-lg p-4 shadow-md">
            <h1 className={`mt-2 text-xl md:text-3xl text-center ${poppinsBold.className}`}>Industrial Service</h1>
            <p className={`text-lg md:text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £250 - £600</p>
            <Image alt="" src="/OIP.jpg" height={300} width={300} className="w-full max-w-xs border-4 border-black rounded-lg"/>
          </div>
          <div className="appear-animation flex items-center flex-col w-full bg-white rounded-lg p-4 shadow-md">
            <h1 className={`mt-2 text-xl md:text-3xl text-center ${poppinsBold.className}`}>Tap, Heater and Radiator</h1>
            <p className={`text-lg md:text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £150 - £175</p>
            <Image alt="" src="/heaterRepair.jpg" height={300} width={300} className="w-full max-w-xs border-4 border-black rounded-lg"/>
          </div>
        </div>
      </section>

      <section
        id="about us"
        className="relative w-full bg-cover min-h-screen bg-center bg-no-repeat py-8 px-4"
        style={{ backgroundImage: "url('aboutBg.jpg')" }}
      >
        <h1
          className={`text-3xl md:text-4xl ${poppinsSemiBold.className} underline decoration-3 underline-offset-5`}
        >
          About Us
        </h1>
        <div className="relative z-10 mt-8">
          <div className="slide-in2 w-full max-w-3xl mx-auto bg-white rounded-lg p-4 shadow-md">
            <h1 className={`text-2xl md:text-3xl ${poppinsSemiBold.className}`}>Contacts</h1>
            <p className={`mt-4 text-xl md:text-3xl ${poppinsMedium.className}`}>Facebook: The Veterans Expert Plumbing Repairs</p>
            <FaFacebook className="m-3 text-blue-600 w-10 h-10 md:w-17 md:h-17" />
            <p className={`mt-3 text-xl md:text-3xl ${poppinsMedium.className}`}>WhatsApp: +447788220710</p>
            <FaWhatsapp className="m-3 text-green-600 w-10 h-10 md:w-19 md:h-19" />
          </div>
          <div className="slide-in2 mt-6 w-full max-w-3xl mx-auto bg-white rounded-lg p-4 shadow-md">
            <h1 className={`text-xl md:text-4xl text-center ${poppinsMedium.className}`}>The Veterans Expert Plumbing Repairs are a well trusted plumbing company if you need plumbing The Veterans Expert Plumbing Repairs is the go to.</h1>
          </div>
        </div>
      </section>
    </>
  );
}