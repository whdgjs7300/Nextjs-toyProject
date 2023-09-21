'use client';
import Link from "next/link";
import styles from '../CSS/Navbar.module.css';
import { useState } from "react";


export default function Navbar() {
    // Nav 모달 셋 
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSubMenuOpen(false);
    };

    return (
        <nav className={styles.navbar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/">
                        CAMPHUB
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/about">
                        소개
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/services">
                        서비스
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/contact">
                        문의
                    </Link>
                </li>
            </ul>
            {isSubMenuOpen && (
                <div className={styles.subNavbar}>
                    {/* 서브 네브바 내용 */}
                    <ul className={styles.subNavList}>
                        <li className={styles.subNavItem}>
                            <Link className={styles.subNavLink} href="/details1">
                                서비스1
                            </Link>
                        </li>
                        <li className={styles.subNavItem}>
                            <Link className={styles.subNavLink} href="/details2">
                                서비스2
                            </Link>
                        </li>
                        {/* 나머지 서브 네브바 아이템 추가 */}
                    </ul>
                </div>
            )}
        </nav>
    )
}