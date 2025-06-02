import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-500 to-blue overflow-hidden">
            <div
                className="
                    absolute
                    rounded-full
                    bg-white
                    opacity-10
                    w-72 h-72
                    top-1/4 left-1/4
                    animate-pulse
                "
            ></div>
            <div
                className="
                    absolute
                    rounded-full
                    border-2 border-white
                    opacity-20
                    w-60 h-60
                    bottom-1/4 right-1/4
                    animate-bounce
                "
            ></div>

            <div className="text-center z-10 px-4">
                <h1 className="text-8xl sm:text-9xl font-extrabold text-white animate-bounce">
                    404
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-white">
                    Ой, кажется, такой страницы не существует.
                </p>
                <Link
                    href="/"
                    className="
                        mt-6
                        inline-block
                        px-6 py-3
                        bg-white
                        text-blue
                        font-semibold
                        rounded-full
                        shadow-lg
                        hover:bg-gray-100
                        transition-colors
                    ">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
