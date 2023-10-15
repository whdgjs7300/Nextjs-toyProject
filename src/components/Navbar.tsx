'use client';
import Link from "next/link";
import styles from '../CSS/Navbar.module.css';
import { useState } from "react";


export default function Navbar() {
    // Nav 모달 셋 
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(true);

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
            {isSubMenuOpen && (
                <div className={styles.subNavbar}>
                    {/* 서브 네브바 내용 */}
                    <ul className={styles.subNavList}>
                        <li className={styles.subNavItem}>
                            <Link className={styles.subNavLink} href="/searchlist/basic">
                                캠핑장 검색하기
                            </Link>
                        </li>
                        <li className={styles.subNavItem}>
                            <Link className={styles.subNavLink} href="/searchlist/map">
                                지도로 검색하기
                            </Link>
                        </li>
                        {/* 나머지 서브 네브바 아이템 추가 */}
                    </ul>
                </div>
            )}
        </li>
        <li className={styles.navItem}>
            <Link className={styles.navLink} href="/about">
                캠핑소식
            </Link>
            {/* 캠핑소식 메뉴의 드롭다운 메뉴 내용 추가 */}
            {isSubMenuOpen && (
                <div className={styles.subNavbar}>
                    <ul className={styles.subNavList}>
                        <li className={styles.subNavItem}>
                            <Link className={styles.subNavLink} 
                            href={{
                                pathname: `/zboard/list`,
                                query: { 
                                        code : "campNews"
                                        }
                                }}>
                                캠핑소식
                            </Link>
                        </li>
                        <li className={styles.subNavItem}>
                            <Link className={styles.subNavLink} 
                            href={{
                                pathname: `/zboard/list`,
                                query: { 
                                        code : "campSafe"
                                        }
                                }}>
                                안전한 캠핑즐기기
                            </Link>
                        </li>
                        {/* 나머지 서브 네브바 아이템 추가 */}
                    </ul>
                </div>
            )}
        </li>
        <li className={styles.navItem}>
            <Link className={styles.navLink} href="/services">
                고객센터
            </Link>
            {/* 고객센터 메뉴의 드롭다운 메뉴 내용 추가 */}
            {isSubMenuOpen && (
                <div className={styles.subNavbar}>
                    <ul className={styles.subNavList}>
                        <li className={styles.subNavItem}>
                            <Link className={styles.subNavLink} 
                            href={{
                                pathname: `/zboard/list`,
                                query: { 
                                        code : "notice"
                                        }
                                }}>
                                공지사항
                            </Link>
                        </li>
                        <li className={styles.subNavItem}>
                            <Link className={styles.subNavLink} 
                            href={{
                                pathname: `/zboard/list`,
                                query: { 
                                        code : "campRequest"
                                        }
                                }}>
                                문의 및 수정요청
                            </Link>
                        </li>
                        {/* 나머지 서브 네브바 아이템 추가 */}
                    </ul>
                </div>
            )}
        </li>
    </ul>
</nav>
    )
}