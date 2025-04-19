// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-500 via-indigo-600 to-purple-700 text-white overflow-hidden">
      {/* Hero Section */}
      <header className="flex-grow flex flex-col justify-center items-center text-center px-6 py-12 relative">
        {/* Background Circles for Decoration */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg z-10">
          Welcome to Task Manager
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-md z-10">
          Organize your tasks efficiently and stay productive with our app.
        </p>
        <div className="space-x-6 z-10">
          <Link
            to="/signup"
            className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-teal-600 transition duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Effortless Organization</h3>
              <p className="text-gray-300">
                Manage all your tasks in one place with intuitive tools.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Stay Productive</h3>
              <p className="text-gray-300">
                Prioritize tasks and meet deadlines with ease.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Collaborate Easily</h3>
              <p className="text-gray-300">
                Share tasks and collaborate with your team seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-900 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <p className="text-gray-300 italic">
                "Task Manager has transformed the way I organize my work. Highly recommend!"
              </p>
              <p className="text-teal-400 font-bold mt-4">— John Doe</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <p className="text-gray-300 italic">
                "The app is simple yet powerful. It helps me stay on top of my tasks."
              </p>
              <p className="text-indigo-400 font-bold mt-4">— Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-6">
            © 2023 Task Manager. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition duration-300"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;