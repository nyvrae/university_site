'use client';

import React, { useState } from "react";
import Image from "next/image";

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative w-full max-w-[1150px]">
            {!isPlaying ? (
                <div
                    className="cursor-pointer relative"
                    onClick={() => setIsPlaying(true)}
                >
                    <Image
                        src='/pics/dalian_polytechnic_university.png'
                        width={1150}
                        height={650}
                        alt="Dalian Polytechnic University"
                        className="w-full h-[200px] min-[480px]:h-[250px] min-[640px]:h-[300px] min-[768px]:h-[400px] min-[1200px]:h-[500px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <svg className="w-16 h-16 text-white" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            ) : (
                <iframe
                    className="w-full h-[200px] min-[480px]:h-[250px] min-[640px]:h-[300px] min-[768px]:h-[400px] min-[1200px]:h-[500px]"
                    src="https://www.youtube.com/embed/_SdvYRwIURg?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}
