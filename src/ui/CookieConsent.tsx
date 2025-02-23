'use client'

import { useEffect, useState } from "react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const hasAccepted = localStorage.getItem("cookieAccepted");
        if (!hasAccepted) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieAccepted", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;



    return (
        <div className="fixed z-50 bottom-0 max-lg:w-full p-4">
            <div
                className="text-center lg:text-left text-white bg-blue p-4 flex flex-col gap-[20px] wwtext"
            >
                <p>Мы используем файлы cookie для улучшения работы сайта.</p>
                <div className="flex gap-[20px] justify-center">
                    <button
                        onClick={acceptCookies}
                        className="underline underline-offset-4 hover:text-red">
                        Принять
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="underline underline-offset-4 hover:text-red">
                        Отклонить
                    </button>
                </div>
            </div>
        </div>
    );
}

