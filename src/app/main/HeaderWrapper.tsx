import Header from "@/components/header/Header";

interface HeaderWrapperProps {
    children?: React.ReactNode;
}

const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
    return (
        <section className="relative w-[100%] h-[100svh] bg-cover bg-center"
            style={{ backgroundImage: 'url(/pics/bsu_main_building.png)' }}>
            <div className="z-10">
                {children}

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-[45px] lg:text-[36px] min-[1200px]:text-[42px]">
                    <h1 className="flex items-center gap-3 font-extrabold">
                        <span className="flex flex-col lg:text-right text-center uppercase max-[568px]:text-[28px]">
                            <span>Совместный</span>
                            <span>Институт</span>
                        </span>
                        <div className='w-[2px] h-[130px] mx-4 bg-white max-lg:hidden'></div>
                        <span className='grid grid-cols-3 grid-rows-3 relative lg:leading-[0.8] max-lg:hidden'>
                            <span className='col-start-1 row-start-1 uppercase'>БГУ</span>
                            <span className='col-start-2 row-start-2 '>и</span>
                            <span className='col-start-3 row-start-3 uppercase'>ДПУ</span>
                        </span>
                    </h1>
                </div>
                <div className="absolute bottom-[max(30px,5svw)] max-w-[75%] lg:w-[50%] left-20 lg:left-auto max-sm:left-4 lg:right-8 text-left text-white">
                    <h2 className="break-words font-bold text-[18px]">Гармония традиций и инноваций</h2>
                    <p className="break-words wwtext max-sm:text-[14px]">
                        Наша миссия —<br /> раздвигать границы возможного, исследуя мир через
                        призму науки и творчества. Вдохновение начинается здесь.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default HeaderWrapper;