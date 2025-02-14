import Image from 'next/image';
import { dormData } from '@/data/dormitory/dormData';
import dormPhoto from '../../../../../public/pics/dorm.png';

const Main = () => {
    return (
        <section className="dorm flex-center">
            <div className="dorm__wrapper wrapper--my">
                <h1 className="wwtitle--bold">{dormData.headline}</h1>

                <div className="dorm__content lg:grid lg:grid-cols-2 gap-[50px] mt-[15px]">
                    <div className="content__box flex flex-col gap-[15px]">
                        <Image
                            src={dormPhoto}
                            alt="Фото общежития №2 БГУ"
                        />
                        <p className="wwtext">{dormData.address}</p>
                        <a href="https://yandex.by/maps/157/minsk/house/Zk4YcwFkT0UAQFtpfXR4cnxkbQ==/?ll=27.564647%2C53.893044&z=17.5" className="underline underline-offset-4 hover:text-red">Как добраться?</a>
                    </div>
                    <div className="text__box lg:flex lg:items-center max-lg:mt-[35px]">
                        <p className="description wwtext">
                            {dormData.description}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Main;