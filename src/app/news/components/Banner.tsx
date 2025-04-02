import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BannerImage from '../../../../public/news-photos/banner.png'

import { BannerInfo } from '@/data/news/bannerInfo';

const Banner = () => {
    return (
        <section className="banner flex-center">
            <div className="banner__wrapper wrapper--mt">
                <div className="banner__wrapper--position">
                    <h1 className="wwtitle">{BannerInfo.headline}</h1>
                    <hr className="my-[30px]" />
                    <div className="banner__area flex max-lg:flex-col justify-between mx-4 gap-[50px]">
                        <div className="flex w-full">
                            <Image
                                className="banner__area__image"
                                src={BannerImage}
                                alt='Наука'
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className="banner__area__text flex w-full flex-col gap-[10px] justify-center wwtext">
                            <h2 className="wwtitle">{BannerInfo.headline2}</h2>
                            <p>
                                {BannerInfo.description}
                            </p>
                            <Link href="/news/8" className="underline underline-offset-4 hover:text-blue">
                                {BannerInfo.forLink}
                            </Link>
                        </div>
                    </div>
                    <hr className="mt-[30px]" />
                </div>
            </div>
        </section>
    )
}

export default Banner
