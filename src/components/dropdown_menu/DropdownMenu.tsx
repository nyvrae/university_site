'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { MenuProps } from '@/interfaces/popupMenuProps';

const DropdownMenu: React.FC<MenuProps> = ({ children, submenuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div
                className="cursor-pointer text-base font-semibold"
                onClick={() => (setIsOpen(!isOpen))}>
                {children}
            </div>

            {submenuItems && isOpen && (
                <div className='mt-4'>
                    <ul className='flex flex-col gap-2'>
                        {submenuItems.map((submenuItem: any, idx: number) => (
                            <li key={idx}>
                                <Link
                                    href={submenuItem.subhref}
                                    className="block px-4 w-full h-full hover:underline underline-offset-4"
                                    target={submenuItem.blank ? "_blank" : undefined}
                                    rel={submenuItem.blank ? "noopener noreferrer" : undefined}>
                                    {submenuItem.subname}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
