import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav class="bg-pink-600">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-white font-semibold">Tailwind Try</Link>
                </div>
                <div class="hidden sm:block sm:ml-auto">
                  <div class="flex space-x-4">
                    <Link to="/" class="text-white font-semibold text-300 hover:bg-pink-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                    <Link to="/cart" class="text-white font-semibold text-300 hover:bg-pink-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart</Link>
                    <Link to="/about" class="text-white font-semibold text-300 hover:bg-pink-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                    <Link to="/contact" class="text-white font-semibold text-300 hover:bg-pink-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" class="text-white font-semibold text-300 hover:bg-pink-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/cart" class="text-white font-semibold text-300 hover:bg-pink-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cart</Link>
              <Link to="/about" class="text-white font-semibold text-300 hover:bg-pink-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link to="/contact" class="text-white font-semibold text-300 hover:bg-pink-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            </div>
          </div>
        </nav>        
    );
};

export default Nav;