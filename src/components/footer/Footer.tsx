import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import Logo from '../../../public/logos/footer_logo.png';

import styles from './footer.module.scss'

import { footerLinks } from '@/data/footerLinks';

const Footer = () => {
    const { fCol, sCol, tCol } = footerLinks;

    return (
        <footer className="footer flex-center bg-blue">
            <div className="footer__wrapper wrapper text-white">
                <div
                    className="w-full grid grid-cols-1 lg:grid-cols-4 py-[50px] max-lg:gap-[50px] max-md:gap-[30px]"
                >

                    <div className={styles.column}>
                        <Image
                            className={styles.footer__logo__image}
                            src={Logo}
                            width={150}
                            height={150}
                            alt=''
                        />
                    </div>

                    <div className={styles.column}>
                        <ul className={styles.gap5}>
                            {
                                fCol.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={item.href} className={styles['small-links']}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <div>
                            <h2 className={styles.headline}>{sCol.headline}</h2>
                            <ul className={styles.gap5}>
                                {
                                    sCol.links.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={item.href} className={styles['small-links']} target='_blank' rel='noopener noreferrer'>{item.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div>
                            <h2 className={styles.headline}>{tCol.headline}</h2>
                            <p className={`mt-[5px] mb-[15px] text-sm leading-[1.5]`}>{tCol.p}</p>
                            <div className="flex gap-[20px]">
                                <Link href='https://www.instagram.com/bsu.dut?igsh=MTFrd2F4c24xc21zNw==' target='_blank' rel='noopener noreferrer'>
                                    <svg className={styles['icon-media']} width="32" height="33" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.64712C14.5395 8.64712 13.1117 9.08022 11.8973 9.89165C10.6829 10.7031 9.73643 11.8564 9.17751 13.2058C8.61858 14.5551 8.47234 16.0399 8.75728 17.4724C9.04222 18.9049 9.74553 20.2207 10.7783 21.2534C11.811 22.2862 13.1269 22.9895 14.5593 23.2745C15.9918 23.5594 17.4766 23.4132 18.826 22.8542C20.1753 22.2953 21.3287 21.3488 22.1401 20.1344C22.9515 18.92 23.3846 17.4923 23.3846 16.0317C23.3826 14.0738 22.6039 12.1967 21.2195 10.8123C19.835 9.42783 17.9579 8.64916 16 8.64712ZM16 20.9548C15.0263 20.9548 14.0745 20.6661 13.2649 20.1251C12.4553 19.5842 11.8243 18.8153 11.4517 17.9157C11.0791 17.0161 10.9816 16.0263 11.1715 15.0713C11.3615 14.1163 11.8304 13.2391 12.5189 12.5506C13.2074 11.8621 14.0846 11.3932 15.0396 11.2033C15.9945 11.0133 16.9844 11.1108 17.884 11.4834C18.7836 11.856 19.5524 12.487 20.0934 13.2966C20.6343 14.1062 20.9231 15.058 20.9231 16.0317C20.9231 17.3374 20.4044 18.5896 19.4811 19.5129C18.5579 20.4361 17.3057 20.9548 16 20.9548ZM23.3846 0.0317383H8.61538C6.33119 0.0341817 4.14126 0.942656 2.52609 2.55782C0.910918 4.17299 0.00244342 6.36293 0 8.64712V23.4164C0.00244342 25.7005 0.910918 27.8905 2.52609 29.5057C4.14126 31.1208 6.33119 32.0293 8.61538 32.0317H23.3846C25.6688 32.0293 27.8587 31.1208 29.4739 29.5057C31.0891 27.8905 31.9976 25.7005 32 23.4164V8.64712C31.9976 6.36293 31.0891 4.17299 29.4739 2.55782C27.8587 0.942656 25.6688 0.0341817 23.3846 0.0317383ZM29.5385 23.4164C29.5385 25.0485 28.8901 26.6137 27.736 27.7678C26.582 28.9218 25.0167 29.5702 23.3846 29.5702H8.61538C6.98328 29.5702 5.41803 28.9218 4.26396 27.7678C3.10989 26.6137 2.46154 25.0485 2.46154 23.4164V8.64712C2.46154 7.01502 3.10989 5.44977 4.26396 4.2957C5.41803 3.14163 6.98328 2.49328 8.61538 2.49328H23.3846C25.0167 2.49328 26.582 3.14163 27.736 4.2957C28.8901 5.44977 29.5385 7.01502 29.5385 8.64712V23.4164ZM25.8462 8.03174C25.8462 8.39687 25.7379 8.75381 25.535 9.05741C25.3322 9.361 25.0438 9.59763 24.7065 9.73736C24.3692 9.87709 23.998 9.91365 23.6398 9.84242C23.2817 9.77118 22.9528 9.59536 22.6946 9.33717C22.4364 9.07898 22.2606 8.75002 22.1893 8.39191C22.1181 8.03379 22.1546 7.66259 22.2944 7.32525C22.4341 6.98791 22.6707 6.69957 22.9743 6.49672C23.2779 6.29386 23.6349 6.18558 24 6.18558C24.4896 6.18558 24.9592 6.38009 25.3054 6.72631C25.6516 7.07253 25.8462 7.54211 25.8462 8.03174Z"
                                        />
                                    </svg>
                                </Link>
                                <Link href='https://t.me/sibd5' target='_blank' rel='noopener noreferrer'>
                                    <svg className={styles['icon-media']} width="37" height="33" viewBox="0 0 37 33" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.4854 0.381848C36.2807 0.210595 36.0316 0.096701 35.765 0.0524355C35.4984 0.00816998 35.2243 0.0352111 34.9724 0.130645L1.49757 12.8204C1.02316 12.9991 0.621508 13.3222 0.353096 13.7412C0.0846842 14.1601 -0.0359648 14.6522 0.00931323 15.1433C0.0545912 15.6344 0.263346 16.098 0.604148 16.4642C0.94495 16.8305 1.39935 17.0796 1.89895 17.174L10.5724 18.8236V28.1917C10.5707 28.702 10.7273 29.201 11.0218 29.6241C11.3163 30.0471 11.7352 30.3748 12.2242 30.5645C12.7124 30.7577 13.2494 30.804 13.7652 30.6976C14.281 30.5911 14.7518 30.3368 15.1164 29.9677L19.2987 25.7661L25.9339 31.3917C26.4126 31.803 27.03 32.0307 27.6699 32.0317C27.9503 32.0315 28.229 31.9889 28.4958 31.9053C28.9318 31.7713 29.3239 31.529 29.6332 31.2025C29.9424 30.8761 30.1579 30.4768 30.2583 30.0445L36.9628 1.79146C37.0228 1.53666 37.01 1.27085 36.9259 1.02253C36.8418 0.774204 36.6896 0.552731 36.4854 0.381848ZM26.3865 6.1419L11.5883 16.4076L3.39546 14.8508L26.3865 6.1419ZM13.2153 28.1917V20.5948L17.31 24.0733L13.2153 28.1917ZM27.6732 29.4717L14.0164 17.8716L33.6725 4.22508L27.6732 29.4717Z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
