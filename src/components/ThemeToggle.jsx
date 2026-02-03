import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/cn';

const ThemeToggle = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "p-2 rounded-xl transition-all duration-300",
                "bg-slate-100 dark:bg-slate-800",
                "text-slate-500 dark:text-slate-400",
                "hover:bg-indigo-50 dark:hover:bg-indigo-900/30",
                "hover:text-indigo-600 dark:hover:text-indigo-400",
                className
            )}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {theme === 'dark' ? (
                <Sun className="h-5 w-5 animate-in spin-in-180 duration-500" />
            ) : (
                <Moon className="h-5 w-5 animate-in spin-in-180 duration-500" />
            )}
        </button>
    );
};

export default ThemeToggle;
