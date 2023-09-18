import Link from "next/link";
import styles from '../CSS/Navbar.module.css';

export default function Navbar() {
    // Nav 모달 셋 
    return (
        <nav className={styles.navbar}>
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
        </nav>
    )
}