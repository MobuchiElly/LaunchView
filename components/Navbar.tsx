'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeComponent from './themeComponent';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userActive, setuserActive] = useState(false);
  const router = useRouter();
  const [theme, setTheme] = useState<string>('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    const isLoggedIn = true;
    if (isLoggedIn) {
      console.log('Signing out...');
    } else {
      console.log('Navigating to login...');
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
          <div className="flex mx-auto">
            <div className="text-sm mx-auto hidden md:ml-6 md:flex space-x-20">
              <Link href="/">
                Home
              </Link>
              <Link href="/projectView">
                MyApps
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 hover:bg-purple-700"
            >
              <svg
                className="h-6 w-6"
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
              onClick={handleLogin}
              className="bg-slate-100 hover:scale-105 px-3 py-2 rounded-sm text-sm font-bold"
            >
              {userActive ? 'Sign Out' : 'Login'}   
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link href="/">
                Home
            </Link>
            <Link href="/projectView">
                Project View
            </Link>
            <button
              onClick={handleLogin}
              className="block w-full text-left text-white hover:bg-pink-500 hover:text-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              {true ? 'Sign Out' : 'Login'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
