import { specialtiesData, specialtiesContent, openDaysInfo, presentationTitle } from "@/data/specialities";
import Image from "next/image";
import Link from "next/link";

import { Specialty } from "@/types/specialty";

const Main = () => {
    return (
        <section className="specialities flex-center">
            <div className="specialities__wrapper wrapper--my">
                <div className="space-y-4 mb-8">
                    <h1 className="wwtitle--bold">{specialtiesContent.title}</h1>
                    <p className="wwtext lg:w-[50%]">
                        {specialtiesContent.description}
                    </p>
                </div>

                <Link href="/files/Совместный институт БГУ и ДПУ.pptx" className="uppercase underline underline-offset-4 font-bold hover:text-red" download>{presentationTitle.title}</Link>

                {specialtiesData.map((specialty: Specialty, index: number) => (
                    <div key={specialty.title}>
                        <hr className="mt-8" />
                        <div className="space-y-6 mt-[75px]">
                            <h2 className="wwtitle">{specialty.title}</h2>
                            <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <Image
                                        src={specialty.icon}
                                        alt={`${specialty.title} Icon`}
                                        className="w-64 h-64 object-contain"
                                    />
                                </div>
                                <div className="w-full md:w-2/3 space-y-4">
                                    {specialty.description.map((paragraph: string, i: number) => (
                                        <p key={i} className="text-gray-700 text-lg">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="about-open-days mt-[50px]">
                    <p className="italic wwtext">
                        {openDaysInfo.info}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Main;