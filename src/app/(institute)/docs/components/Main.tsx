import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PdfFile from '../../../../../public/icons/pdf_icon.svg'
import { documents, documentsTitle } from '@/data/docs/docsData';

const Docs = () => {
    return (
        <section className="docs flex-center">
            <div className="docs__wrapper wrapper--my">
                <h2 className="wwtitle">{documentsTitle}</h2>
                <ul className="docs__box mt-[40px] flex flex-col gap-[30px]">
                    {documents.map((doc, index) => (
                        <li key={index} className="flex items-center gap-[15px] docs__item">
                            <Image src={PdfFile} alt="" />
                            <Link href={doc.href} className="hover:text-red" download>{doc.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Docs;
