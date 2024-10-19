/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/navbar";
import Image from "next/image";
import { FaPalette, FaCode, FaMobileAlt, FaCloud, FaPlug, FaServer, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Import the icons
import Timeline from "@/components/timeline";
// import {Carousel} from "@/components/socialproof";

export default function Home() {
  const services = [
    { icon: <FaPalette size={40} />, title: "UI/UX Design" },
    { icon: <FaCode size={40} />, title: "Web Development" },
    { icon: <FaMobileAlt size={40} />, title: "Mobile App Development" },
    { icon: <FaCloud size={40} />, title: "Cloud Solutions" },
    { icon: <FaPlug size={40} />, title: "API Integration" },
    { icon: <FaServer size={40} />, title: "DevOps Services" },
  ];

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10 bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row text-center lg:text-left py-10 lg:py-20">
        <div className="lg:w-1/2 w-full px-4 lg:px-0">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Welcome to Corium Connect</h1>
          <h3 className="mb-4 text-lg lg:text-xl">
            <span className="text-orange-600">Educate . </span>
            <span className="text-lime-600">Innovate . </span>
            <span className="text-purple-950">Connect</span>
          </h3>
          <p className="mb-4 text-sm lg:text-base">
            Welcome to Corium Connect, your gateway to innovation and excellence in technology education. Our website offers a comprehensive overview of our diverse range of services, including the prestigious Corium Code Academy. Whether you're here to explore cutting-edge projects, enroll in our programming courses, or connect with like-minded tech enthusiasts, Corium Connect is your ultimate destination.
          </p>
          <button className="px-6 py-2 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white">
            Get in Touch
          </button>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center items-center mb-10 lg:mb-0">
          <Image
            src="/corium_globe.png"
            alt="Hero Image"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </section>


      {/* About Us Section */}
      <section className="w-full text-center py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Corium Connect, we are dedicated to bridging the gap between innovation and collaboration in technology. Our mission is to provide a platform where visionary ideas converge with cutting-edge technology, empowering you to achieve excellence and drive impactful change. Join us on this journey to transform ideas into reality and shape the future of tech.
        </p>
      </section>

      {/* {testimonial}
      <section className="w-full py-10">
        <div className="container mx-auto">
          <Carousel />
        </div>
      </section> */}

      {/* Work Process Section */}
      {/* <section className="w-full py-10">
        <div className="container mx-auto">
          <Timeline />
        </div>
      </section> */}


      <section className="w-full py-10">
        <div className="container mx-auto">
          
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-10 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-center text-gray-600">
                We provide exceptional {service.title} tailored to your business needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full bg-gray-800 text-white py-10">
        <h3 className="text-center text-xl font-semibold mb-6">Portfolio</h3>
        <div className="flex justify-center space-x-4">
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src="" // Adjust the path to your portfolio items
              alt="Portfolio Item"
              width={150}
              height={150}
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-gray-800">
            View Portfolio
          </button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="w-full py-10 flex justify-center items-center bg-gray-100">
        <div className="bg-white w-full max-w-4xl flex shadow-lg rounded-lg overflow-hidden">
          {/* Left Section with Logo and Info */}
          <div className="w-1/3 bg-gradient-to-b from-gray-50 to-gray-200 p-8 ">
            <Image src="/corium_connect.png" width={80} height={80} alt="Token Logo" className="h-16 w-16 " />
            <div className="">
              <h4 className="text-2xl font-bold mb-4">GET IN TOUCH</h4>
              <p className="text-sm text-gray-600 mb-8">
                We will answer your questions and problems 24/7
              </p>
            </div>

          </div>


          {/* Right Section with Contact Form */}
          <div className="w-2/3 p-8">
            <form>
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-3 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Describe your issue"
                  className="w-full p-3 border border-gray-300 rounded h-32"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="w-full text-center py-4">
        <div className="flex justify-center space-x-6 mb-2">
          {/* Social Media Icons */}
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-800">
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <p>© 2024 Corium Connect</p>
      </footer>
    </main>
  );
}
