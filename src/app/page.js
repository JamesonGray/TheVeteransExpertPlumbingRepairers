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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
      <div
        className="relative w-full bg-cover h-screen bg-center bg-no-repeat"
        style={{ backgroundImage: "url('bg.jpg')" }}
      >
        <div className="w-full absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex ">
          <Image
            alt="logo"
            src="/0.jpg"
            width={160}
            height={160}
            className="p-4 rounded-full"
          />
          <ul className="flex justify-evenly mt-10 mr-13 ml-auto h-10">
            <li
              onClick={() => scrollToSection("services")}
              className={`mx-5 text-white font-bold ${poppinsMedium.className} text-3xl hover:cursor-pointer`}
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection("bookings")}
              className={`mx-5 text-white font-bold ${poppinsMedium.className} text-3xl hover:cursor-pointer`}
            >
              Bookings
            </li>
            <li
              onClick={() => scrollToSection("pricing")}
              className={`mx-5 text-white font-bold ${poppinsMedium.className} text-3xl hover:cursor-pointer`}
            >
              Pricing
            </li>
            <li
              onClick={() => scrollToSection("about us")}
              className={`mx-5 text-white font-bold ${poppinsMedium.className} text-3xl hover:cursor-pointer`}
            >
              About Us
            </li>
          </ul>
          <button
            onClick={() => scrollToSection("bookings")}
            className={`mt-6 mr-10 bg-blue-800 h-16 w-50 rounded-2xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:bg-blue-700 text-white ${poppinsBold.className} text-white text-2xl`}
          >
            Order Now
          </button>
        </div>
        <div className="relative mt-15 z-10">
          <h1 id="sign" className={`slide-in ml-4 text-white text-8xl ${poppinsBold.className}`}>
            Your Local
          </h1>
          <h1
            id="sign" className={`slide-in mt-10 ml-4 text-white text-8xl ${poppinsBold.className}`}
          >
            Plumbing Veterans
          </h1>
          <p
            id="sign"
            className={`slide-in ml-4 mt-7 text-white text-4xl ${poppinsSemiBold.className}`}
          >
            Experts in plumbing & repairs
          </p>
          <button
            onClick={() => scrollToSection("bookings")}
            className={`mt-10 ml-4 bg-blue-800 h-16 w-50 rounded-2xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:bg-blue-700 text-white ${poppinsBold.className} text-white text-2xl`}
          >
            Order Now
          </button>
        </div>
      </div>

      <section id="services" className="bg-gray-100 w-screen h-screen">
        <h1
          className={`mt-3 ml-2 text-4xl ${poppinsSemiBold.className} underline decoration-3 underline-offset-5`}
        >
          Services
        </h1>
        <div className="flex justify-center items-center gap-40 mt-10">
          <div className="appear-animation bg-white flex flex-col items-center rounded-2xl h-150 w-100 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1
              className={`mt-3 text-3xl ${poppinsExtraBold.className}`}
            >
              Local Service
            </h1>
            <p
              id="priceClick"
              onClick={() => scrollToSection("pricing")}
              className={`mt-1 text-2xl hover:cursor-pointer ${poppinsMedium.className}`}
            >
              Click Here To See Prices
            </p>
            <p
              className={`w-80 mr-auto ml-7 text-2xl mt-3 mb-5 ${poppinsSemiBold.className}`}
            >
              We provide prompt and reliable plumbing solutions for homeowners
              and small businesses, ensuring your systems function smoothly.
            </p>
            <Image
              alt=""
              src="/unnamed.jpg"
              width={300}
              height={300}
              className="border-4 border-black rounded-2xl"
            />
            <button
              onClick={() => scrollToSection("bookings")}
              className={`mt-5 bg-blue-800 h-17 w-60 rounded-2xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:bg-blue-700 text-white ${poppinsBold.className} text-white text-3xl`}
            >
              Book Now
            </button>
          </div>
          <div className="appear-animation bg-white flex flex-col items-center rounded-2xl h-150 w-100 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1
              className={`mt-3 text-3xl ${poppinsExtraBold.className}`}
            >
              Industrial Service
            </h1>
            <p
              id="priceClick"
              onClick={() => scrollToSection("pricing")}
              className={`mt-1 text-2xl hover:cursor-pointer ${poppinsMedium.className}`}
            >
              Click Here To See Prices
            </p>
            <p
              className={`w-80 mr-auto ml-7 text-2xl mt-3 mb-5 ${poppinsSemiBold.className}`}
            >
              Specializing in complex installations and maintenance, we ensure
              optimal performance and compliance for large-scale operations.
            </p>
            <Image
              alt=""
              src="/city.jpg"
              width={300}
              height={200}
              className="h-45 border-4 border-black rounded-2xl"
            />
            <button
              onClick={() => scrollToSection("bookings")}
              className={`mt-5 bg-blue-800 h-17 w-60 rounded-2xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:bg-blue-700 text-white ${poppinsBold.className} text-white text-3xl`}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section id="bookings" className="bg-blue-300 w-screen h-screen">
        <h1
          className={`pt-5 ml-2 text-4xl ${poppinsSemiBold.className} underline decoration-3 underline-offset-5`}
        >
          Bookings
        </h1>
        <div className="flex justify-center items-center">
          <h1 className={` text-4xl ${poppinsSemiBold.className}`}>
            Need A Plumber Book Now
          </h1>
        </div>
        <div  className="bg-white mx-auto mt-5 flex flex-col rounded-2xl h-150 w-180 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
          <div>
            <input
              placeholder="First Name"
              required
              onChange={(e) => setName(e.target.value)}
              className={`ml-5 mt-10 w-80 h-15 ${poppinsSemiBold.className} text-3xl text-black border-2 indent-2.5 placeholder-black border-black rounded-lg`}
            />
            <input
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
              className={`ml-5 mt-10 w-80 h-15 ${poppinsSemiBold.className} text-3xl text-black indent-2.5 placeholder-black border-2 border-black rounded-lg`}
            />
          </div>
          <input
            className={`ml-5 mt-5 w-165 h-15 ${poppinsSemiBold.className} text-3xl text-black indent-2.5 placeholder-black border-2 border-black rounded-lg`}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={`pb-50 ml-5 mt-5 w-165 h-65 ${poppinsSemiBold.className} text-3xl text-black indent-2.5 placeholder-black border-2 border-black rounded-lg placeholder:mb-auto`}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <a className="flex items-center justify-center" href={`mailto:theveteransexpertplumbingrepai@gmail.com?subject=New request From ${name} ${lastName}&body=${message}        ${email}`}>
            <button className={`mt-5 bg-blue-800 h-17 w-60 rounded-2xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:bg-blue-700 text-white ${poppinsBold.className} text-white text-3xl`}>
              Send Email
            </button>
          </a>
        </div>
      </section>

      <section id="pricing" className="bg-gray-100 w-screen h-screen">
        <h1
          className={`pt-5 ml-2 text-4xl ${poppinsSemiBold.className} underline decoration-3 underline-offset-10`}
        >
          Pricing
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="appear-animation mt-5 ml-5 flex items-center flex-col w-100 h-75 bg-white rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1 className={`mt-3 text-3xl ${poppinsBold.className}`}>Pipe Leakage Repairing</h1>
            <p className={`text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £150 - £175</p>
            <Image alt="" src="/pipeLeakage.jpg" height={300} width={300} className="border-6 border-black rounded-lg"/>
          </div>
          <div className="appear-animation mt-5 ml-5 flex items-center flex-col w-100 h-75 bg-white rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1 className={`mt-3 text-3xl ${poppinsBold.className}`}>Local Expert Service</h1>
            <p className={`text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £175 - £350</p>
            <Image alt="" src="/download.jpg" height={300} width={300} className="h-51 border-6 border-black rounded-lg"/>
          </div>
          <div className="appear-animation mt-5 ml-5 flex items-center flex-col w-100 h-75 bg-white rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1 className={`mt-3 text-3xl ${poppinsBold.className}`}>Shower Repairing</h1>
            <p className={`text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £125 - £150</p>
            <Image alt="" src="/showerReapiring.jpg" height={300} width={300} className="h-51 mb-2 border-6 border-black rounded-lg"/>
          </div>
          <div className="appear-animation mt-5 ml-5 flex items-center flex-col w-100 h-75 bg-white rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1 className={`mt-3 text-[1.6rem] ${poppinsBold.className}`}>Bathroom and Kitchen Sink</h1>
            <p className={`text-2xl mb-1 ${poppinsMedium.className}`}>Price £100 - £155</p>
            <Image alt="" src="/sinkReapir.jpg" height={300} width={300} className="border-6 border-black rounded-lg"/>
          </div>
          <div className="appear-animation mt-5 ml-5 flex items-center flex-col w-100 h-75 bg-white rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1 className={`mt-3 text-3xl ${poppinsBold.className}`}>Industrial Service</h1>
            <p className={`text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £250 - £600</p>
            <Image alt="" src="/OIP.jpg" height={300} width={300} className="border-6 border-black rounded-lg"/>
          </div>
          <div className="appear-animation mt-5 ml-5 flex items-center flex-col w-100 h-75 bg-white rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1 className={`mt-3 text-3xl ${poppinsBold.className}`}>Tap, Heater and Radiator</h1>
            <p className={`text-2xl mt-1 mb-1 ${poppinsMedium.className}`}>Price £150 - £175</p>
            <Image alt="" src="/heaterRepair.jpg" height={300} width={300} className="border-6 border-black rounded-lg"/>
          </div>
        </div>
      </section>

      <section
        id="about us"
        className="relative w-screen bg-cover h-screen bg-center bg-no-repeat"
        style={{ backgroundImage: "url('aboutBg.jpg')" }}
      >
        <h1
          className={`pt-5 mt-3 ml-2 text-4xl ${poppinsSemiBold.className} underline decoration-3 underline-offset-5`}
        >
          About Us
        </h1>
        <div className="relative z-10">
          <div className="slide-in2 mt-15 ml-5 w-200 h-80 bg-white rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1 className={`ml-3 pt-1 text-3xl ${poppinsSemiBold.className}`}>Contacts</h1>
            <p className={`ml-3 mt-6 text-3xl ${poppinsMedium.className}`}>Facebook: The Veterans Expert Plumbing Repairs</p>
            <FaFacebook className="m-3 text-blue-600 w-17 h-17" />
            <p className={`ml-3 mt-3 text-3xl ${poppinsMedium.className}`}>WhatsApp: +447788220710</p>
            <FaWhatsapp className="ml-3 text-green-600 w-19 h-19" />
          </div>
          <div className="slide-in2 mt-7 ml-7 w-200 h-60 flex justify-center items-center bg-white rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h1 className={`ml-2 text-4xl leading-13 ${poppinsMedium.className}`}>The Veterans Expert Plumbing Repairs are a well trusted plumbing company if you need plumbing The Veterans Expert Plumbing Repairs is the go to.</h1>
          </div>
        </div>
      </section>
    </>
  );
}
