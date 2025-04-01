import React from 'react';
import Link from 'next/link';
import { infoContent } from '@/data/about-institute/instituteInfo';

const Info = () => {
    return (
        <section className="info flex-center">
            <div className="info__wrapper wrapper--mt flex flex-col gap-[40px] lg:gap-[55px]">
                {infoContent.map((item, index) => (
                    <div key={index} className="lg:max-w-[60%] flex flex-col gap-[8px] lg:gap-[15px]">
                        <h2 className="wwtitle">{item.title}</h2>
                        <p className="wwtext">{item.text}</p>
                        <hr className="w-[150px]" />
                    </div>
                ))}
            </div>
        </section >
    );
}

export default Info;
