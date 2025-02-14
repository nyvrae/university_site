'use client';

import React from 'react';
import Link from 'next/link';

import { MenuProps } from '@/interfaces/popupMenuProps';

const PopupMenu: React.FC<MenuProps> = ({ children, submenuItems }) => {
    return (
        <div className="relative group">
            <div className="cursor-pointer text-base font-semibold text-white">
                {children}
            </div>

            {submenuItems && (
                <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul>
                        {submenuItems.map((submenuItem: any, idx: number) => (
                            <li key={idx}>
                                <Link href={submenuItem.subhref} className="block px-4 py-2 w-full h-full hover:bg-gray-100">
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

export default PopupMenu;
