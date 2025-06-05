import React from 'react'
import Image from 'next/image'
import { historyText, historyDates } from '@/data/us-and-dalian/history'
import rock from '../../../../../public/pics/rock.png'

const HistoryDut = () => {
    return (
        <section className="history flex-center">
            <div className="history__wrapper wrapper--my">
                <h2 className="wwtitle--bold">История ДПУ</h2>

                <div className="mt-[50px] gap-[25px] lg:flex lg:gap-[50px]">
                    <Image className="object-cover lg:min-w-[500px]" src={rock} width={1000} height={1000} alt="" />
                    <div className="max-lg:mt-[25px]">
                        <div className="flex flex-col gap-[10px]">
                            {historyText.map((paragraph, index) => (
                                <p key={index} className="wwtext">{paragraph}</p>
                            ))}
                        </div>
                        <div className="history-dut__dates mt-[24px]">
                            {historyDates.map(({ year, event }) => (
                                <article key={year}>
                                    <p className="flex flex-col">
                                        <span className="big-number font-light mb-[-10px]">{year}</span>
                                        <span className="font-normal">{event}</span>
                                    </p>
                                    <hr className="mt-2" />
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryDut;
