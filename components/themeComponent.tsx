'use client'

import {useState, useEffect} from 'react';
import { SunIcon, MoonIcon, UserIcon, UserCircleIcon } from '@heroicons/react/24/solid';


const ThemeComponent = () => {
    const [theme, setTheme] = useState<string>('');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.classList.add(storedTheme);
    }, [])
    const toggleTheme = () => {
        const newTheme = theme ===  'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return (
        <div className='hidden md:flex pt-2 space-x-2'>
            <button className='mb-1' onClick={toggleTheme}>
                {theme === 'light' ? (
                    <SunIcon className="h-8 w-8 text-black" />
                ) : (
                    <MoonIcon className="h-8 w-8 text-black" />
                )}
            </button>
        </div>
    )
};

export default ThemeComponent;
