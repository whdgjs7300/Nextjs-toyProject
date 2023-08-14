import Link from "next/link";
import styles from '../CSS/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/">
                        홈
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