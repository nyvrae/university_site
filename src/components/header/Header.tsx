import React from "react";
import Image from "next/image";
import Link from "next/link";

import { HeaderProps } from "@/interfaces/headerProps";
import { headerLinks } from "@/data/headerLinks";
import Logo from "../../../public/logos/header_logo.svg";
import PopupMenu from "../popup_menu/PopupMenu";

import BurgerMenu from "./burger_menu/BurgerMenu";

import styles from "./header.module.scss";

const Header: React.FC<HeaderProps> = ({ headline, photo, type }) => {
    return (
        <header
            className={`header flex-center
            ${type === "image" ? styles['header-image'] : ""}  
            ${type === "bg" ? "bg-blue" : ""}`}

            style={(type === "image" && photo) ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/header-photos/${[photo]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            } : undefined}
        >
            <div
                className={`header__wrapper wrapper h-full
                ${styles.wrapper}
                ${type === "image" ? "flex flex-col" : ""}`}
            >
                <div className="header__box flex items-center justify-between">
                    <div className="header__logo">
                        <Link href='/'>
                            <Image
                                className={styles.header__logo__image}
                                src={Logo}
                                width={300}
                                height={85}
                                alt=""
                            />
                        </Link>
                    </div>

                    <nav className="menu max-md:hidden">
                        <ul className="menu__list flex gap-[25px] lg:gap-[50px] xl:gap-[65px]">
                            {headerLinks.map((item, index) => {
                                return (
                                    <li key={index} className="list__item">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="cursor-pointer text-base font-semibold text-white hover:underline underline-offset-4"
                                            >
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <PopupMenu submenuItems={item.submenu}>
                                                {item.name}
                                            </PopupMenu>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>


                    <BurgerMenu />

                </div>

                {
                    headline && (type === "image") && (
                        <div className="mt-auto">
                            <h1 className={styles.headline}>{headline}</h1>
                        </div>
                    )
                }

            </div>
        </header>
    );
};

export default Header;
