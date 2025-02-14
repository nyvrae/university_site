'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import {
    REVIEW_TITLE,
    FEOFAN_REVIEW_PARAGRAPHS,
    FEOFAN_STUDENT_INFO,
    NADEZHDA_REVIEW_PARAGRAPHS,
    NADEZHDA_STUDENT_INFO
} from '@/data/about-institute/feedbackParagraphs';

import feofanStudent from '@/../public/people/feofan_student.png';
import nadezhdaStudent from '@/../public/people/nadezhda_student.png';

const Feedback = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const reviews = [
        {
            paragraphs: FEOFAN_REVIEW_PARAGRAPHS,
            info: FEOFAN_STUDENT_INFO,
            image: feofanStudent
        },
        {
            paragraphs: NADEZHDA_REVIEW_PARAGRAPHS,
            info: NADEZHDA_STUDENT_INFO,
            image: nadezhdaStudent
        }
    ];

    const feofanSlide = () => {
        setCurrentSlide(0);
    };

    const nadezhdaSlide = () => {
        setCurrentSlide(1);
    };

    return (
        <section id="feedback" className="feedback flex-center">
            <div className="feedback__wrapper wrapper--my">
                <h2 className="wwtitle--bold">{REVIEW_TITLE}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[75px] mt-[25px] lg:mt-[50px]">
                    <div className="max-lg:mb-[30px] flex flex-col gap-[10px]">
                        {reviews[currentSlide].paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-sm lg:text-base justify-center align-center italic">{paragraph}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <Image src={reviews[currentSlide].image} className="lg:min-h-[600px] xl:h-[700px] lg:w-auto object-cover" alt='Фото студента' />
                        <div>
                            {reviews[currentSlide].info.map((info, index) => (
                                <p key={index} className="text-xs">{info}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-4 mt-8 text-blue">
                    <a
                        href="#feedback"
                        onClick={feofanSlide}
                        className="hover:text-red rounded"
                    >
                        Феофан
                    </a>
                    <a
                        href="#feedback"
                        onClick={nadezhdaSlide}
                        className="hover:text-red rounded"
                    >
                        Надежда
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Feedback
