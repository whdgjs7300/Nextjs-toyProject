import Link from "next/link";


export default function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
            <li className="nav-item">
                <Link href="/">
                Home
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/about">
                소개
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/services">
                서비스
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/contact">
                연락처
                </Link>
            </li>
            </ul>
        </nav>
    )
}