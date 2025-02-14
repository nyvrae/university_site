'use client'

import { advantagesText, advantagesPoints } from "@/data/main/advantages"

const Advantages = () => {
    return (
        <section className="advantages flex-center bg-blue bg-[url('/pics/nice_background.png')] bg-cover bg-center">
            <div className="advantages__wrapper wrapper py-[75px] lg:py-[100px]">
                <h2 className="flex flex-col text-right text-white">
                    <span className="text-red text-[56px]">教育過程</span>
                    <span className="wwtitle--bold mr-[10px]">учебный процесс</span>
                </h2>

                <div className="advantages__content flex flex-col gap-[20px] mt-[75px] lg:mt-[100px]">
                    {
                        advantagesText.map((item, index) => {
                            return (
                                <p key={index} className="md:w-[50%] wwtext text-white">{item}</p>
                            )
                        })
                    }
                </div>
                <div className="advantages__slider mt-[75px] lg:mt-[100px] flex flex-wrap gap-4 transition-[1s]">
                    {
                        advantagesPoints.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="slider__item bg-white text-blue px-[40px] rounded-lg cursor-pointer flex items-center gap-8 transition-all duration-300 hover:bg-opacity-90"
                                    onClick={() => {
                                        const items = document.querySelectorAll('.slider__item');
                                        const currentText = items[index].querySelector('.slider__text');

                                        if (!currentText?.classList.contains('hidden')) {
                                            currentText?.classList.add('hidden');
                                            items[index].classList.remove('shadow-lg');
                                        } else {
                                            items.forEach(item => {
                                                item.querySelector('.slider__text')?.classList.add('hidden');
                                                item.classList.remove('shadow-lg');
                                            });
                                            currentText?.classList.remove('hidden');
                                            items[index].classList.add('shadow-lg');
                                        }
                                    }}
                                >
                                    <span className="text-[72px] font-bold">{index + 1}</span>
                                    <p className={`slider__text text-[14px] max-[350px]:py-[10px] md:text-[16px] lg:text-[18px] transition-opacity duration-300 ${index === 0 ? '' : 'hidden'}`}>
                                        {item}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Advantages
