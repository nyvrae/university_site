import Image from 'next/image';
import RightArrow from '@/../public/icons/right_arrow.svg';
import RikkImage from '@/../public/pics/rikk.png';
import { rikkData } from '@/data/rikk/rikkData';

const RikkContent = () => {
    return (
        <section className="rikk flex-center">
            <div className="rikk__wrapper wrapper--my">
                <div>
                    <h2 className="wwtitle">{rikkData.subtitle1}</h2>
                    <p className="mt-[10px] md:w-[60%]">{rikkData.description1}</p>
                </div>

                <ul className="mt-[30px] grid grid-cols-1 gap-y-[20px] gap-x-[50px] lg:grid-cols-2">
                    {rikkData.benefits.map((benefit, index) => (
                        <li className="flex gap-[20px]" key={index}>
                            <Image src={RightArrow} alt='' />
                            <p className="text-sm flex items-center">{benefit}</p>
                        </li>
                    ))}
                </ul>

                <div className="mt-[50px] lg:mt-[75px]">
                    <Image src={RikkImage} alt='' />
                </div>

                <div className="mt-[35px]">
                    <h2 className="wwtitle">{rikkData.subtitle2}</h2>
                    <p className="mt-[10px]">{rikkData.description2}</p>
                </div>
            </div>
        </section>
    );
};

export default RikkContent;