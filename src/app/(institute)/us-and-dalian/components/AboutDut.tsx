import React from 'react';

import VideoDut from './VideoDut';

import { aboutDutContent } from '@/data/us-and-dalian/about';

const AboutDut = () => {
    return (
        <section className="about-dut flex-center">
            <div className="about-dut__wrapper wrapper--mt">

                <h2 className="wwtitle--bold">
                    {aboutDutContent.title}
                </h2>

                <p className="wwtitle__text my-[15px] lg:w-[60%] 2xl:w-[40%]">
                    {aboutDutContent.text}
                </p>

                <hr />

                <div className="flex-center my-[50px] lg:my-[75px]">
                    <VideoDut />
                </div>

                <hr />

            </div>
        </section>
    );
};

export default AboutDut;
