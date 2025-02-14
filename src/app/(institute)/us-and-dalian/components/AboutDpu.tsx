import React from 'react';

import VideoDpu from './VideoDpu';

import { aboutDpuContent } from '@/data/us-and-dalian/about';

const AboutDpu = () => {
    return (
        <section className="about-dpu flex-center">
            <div className="about-dpu__wrapper wrapper--mt">

                <h2 className="wwtitle--bold">
                    {aboutDpuContent.title}
                </h2>

                <p className="wwtitle__text my-[15px] lg:w-[60%] 2xl:w-[40%]">
                    {aboutDpuContent.text}
                </p>

                <hr />

                <div className="flex-center my-[50px] lg:my-[75px]">
                    <VideoDpu />
                </div>

                <hr />

            </div>
        </section>
    );
};

export default AboutDpu;
