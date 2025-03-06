import React from 'react'
import Image from 'next/image'
import SummerSchoolStudents from '@/../public/pics/summer-school-students.png'
import { summerAndWinterSchools } from '@/data/summer-and-winter-schools/summerAndWinterSchools'

const Main = () => {
    return (
        <section className="schools flex-center">
            <div className="schools__wrapper wrapper--my">
                <h2 className="wwtitle--bold">{summerAndWinterSchools.headline}</h2>
                <div className="schools__content flex flex-col gap-[30px] my-[30px]">
                    {
                        summerAndWinterSchools.content.map((item, index) => {
                            return (
                                <p key={index} className="lg:w-[60%]">
                                    {item}
                                </p>
                            )
                        })
                    }
                </div>
                <Image
                    src={SummerSchoolStudents}
                    alt='Студенты Совместного института в Даляне'
                />
            </div>
        </section>
    )
}

export default Main
