'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [theme, setTheme] = useState<string>('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAuth = () => {
    if (isLoggedIn) {
      console.log('Signing out...');
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    console.log('rendered')
  }, [theme])
  return (
    <nav className={`shadow-md z-50 ${theme === 'dark' ? 'bg-gradient-to-r from-purple-800 to-blue-600 text-slate-100' : 'text-[#232323] bg-gradient-to-t from-slate-100 to-white'}`}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 font-semibold">
          <div className='w-20 h-full'>
            <img src='/imgs/logo.jpg' className='h-full w-full'/>
          </div>
          <div className="flex mx-auto">
            <div className="text-sm mx-auto hidden md:ml-6 md:flex space-x-20">
              <Link href="/">
                Home
              </Link>
              <Link href="/projects">
                MyApps
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md"
            >
              <svg
                className="h-10 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={`${isOpen ? 'hidden' : 'block'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={`${isOpen ? 'block' : 'hidden'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sign Out / Login Button */}
          <div className="hidden md:flex items-center space-x-2">
          {/* <ThemeComponent /> */}
            <button
              onClick={handleAuth}
              className="bg-slate-100 hover:scale-105 px-3 py-2 rounded-sm text-sm font-bold"
            >
              {true ? 'Sign Out' : 'Login'}   
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#003135]">
          <div className="space-y-2 px-6 pt-2 pb-3 text-white text-base font-medium">
            <Link href="/" className='block'>
                Home
            </Link>
            <Link href="/projects" className='block'>
                Deployments
            </Link>
            <button
              onClick={handleAuth}
              className="block w-full text-left rounded-md"
            >
              {isLoggedIn ? 'Sign Out' : 'Login'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
