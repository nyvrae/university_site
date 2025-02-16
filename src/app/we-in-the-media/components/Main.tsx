import React from 'react'
import Link from 'next/link'

import { mediaData } from '@/data/we-in-the-media/mediaData'
import { mediaTitle } from '@/data/we-in-the-media/mediaData'

const Main = () => {
    return (
        <section className="we-in-the-media flex-center">
            <div className="we-in-the-media__wrapper wrapper--my">
                <div>
                    <h1 className="wwtitle--bold">{mediaTitle.title}</h1>

                    <div className="flex flex-col gap-[40px] mt-[50px]">
                        {
                            mediaData.map((item, index) => {
                                return (
                                    <div key={index} className="we-in-the-media__item flex md:items-center max-md:flex-col max-md:gap-[10px] gap-[30px]">
                                        <div className="bg-blue min-w-[200px] w-[200px] h-[75px] rounded-full block text-white flex-center">
                                            <p className="text-sm">
                                                {item.mediaName}
                                            </p>
                                        </div>
                                        <div className="wwtext hover:text-red max-md:text-left">
                                            <Link href={item.link}>
                                                {item.theme}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
