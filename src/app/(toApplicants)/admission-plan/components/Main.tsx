import React from 'react';
import { Table, ConfigProvider } from "antd";
import Image from 'next/image';
import Link from 'next/link';
import { specialities, columns } from '@/data/admission-plan/planData';


const Main = () => (
    <section className="admission-plan flex-center">
        <div className="admission-plan__wrapper wrapper--my">
            <ul className="admission-plan__links flex flex-wrap lg:justify-between max-lg:flex-col max-lg:gap-[20px]">
                {specialities.map(({ id, name }) => (
                    <li key={id}>
                        <Link href={`#${id}`}
                            className="admission-plan__links__item font-semibold text-sm lg:text-base leading-[1.2]
                            underline underline-offset-4 hover:text-red">{name}</Link>
                    </li>
                ))}
            </ul>

            <ConfigProvider theme={{ components: { Table: { fontSize: 16, fontFamily: 'Montserrat', borderColor: '#FFFFFF', headerBg: '#E9F3FF', colorBgContainer: '#F2F8FF' } } }}>
                {specialities.map(({ id, name, logo, data }) => (
                    <div key={id} className="table-section mt-[75px] lg:mt-[100px] flex flex-col gap-[25px]" id={id}>
                        <div className="table-title flex gap-[20px]">
                            <Image src={logo} alt={name} height={64} width={64} className="lg:w-[64px] w-[32px]" />
                            <h2 className="wwtitle flex items-end">{name}</h2>
                        </div>
                        <Table dataSource={data} columns={columns} pagination={false} size='large' scroll={{ x: 'max-content' }} />
                    </div>
                ))}
            </ConfigProvider>
        </div>
    </section>
);

export default Main;
