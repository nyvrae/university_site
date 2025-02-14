import React from "react";
import { statsData } from "@/data/us-and-dalian/statsData";

const StatsDpu = () => {
    return (
        <section className="stats flex-center bg-blue">
            <div className="stats__wrapper wrapper my-[40px] md:my-[75px] lg:my-[100px] grid grid-cols-1 min-[460px]:grid-cols-2 gap-y-[25px] lg:grid-cols-4">
                {statsData.map(({ id, topNumber, topLabel, botNumber, postfix, botLabel }) => (
                    <article key={id} className="flex text-white gap-[15px]">
                        <div className="block w-[3px] h-full bg-white"></div>

                        <div className="stats__content">
                            <div className="stats__content__top">
                                <p className="flex flex-col">
                                    <span className="big-number mb-[-8px] lg:mb-[-12px] xl:mb-[-20px]">{topNumber}</span>
                                    <span className="text-sm lg:text-base 2xl:text-[18px] font-light text-nowrap">{topLabel}</span>
                                </p>
                            </div>
                            <div className="stats__content__bottom">
                                <p className="flex flex-col">
                                    <span className="mb-[-8px] lg:mb-[-12px] xl:mb-[-20px]">
                                        <span className="big-number">{botNumber}</span>
                                        <span className="text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] ml-[3px]">{postfix}</span>
                                    </span>
                                    <span className="text-sm lg:text-base font-light">{botLabel}</span>
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default StatsDpu;
