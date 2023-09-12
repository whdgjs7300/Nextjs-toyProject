import Link from "next/link";
import styles from '../CSS/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';

export default function MainNav() {
    return (
        <nav className={styles.main_container}>
            <div className={styles.main_iconbox}>
            <Link target='blank' href='https://www.instagram.com/gocamping_official/'>
            <img 
            src='/instagram.png' 
            alt='인스타그램'
            width={40}
            height={40} />
            </Link>
            <Link target='blank' href='https://www.facebook.com/go2thecamping/'>
            <img 
            src='/facebook.png' 
            alt='페이스북'
            width={40}
            height={40} />
            </Link>
            <Link target='blank' href='https://blog.naver.com/gocamping_official'>
            <img 
            src='naver.png' 
            alt='네이버 블로그'
            width={40}
            height={40} />
            </Link>
            <Link target='blank' href='https://www.youtube.com/channel/UCuCBPZUAgFBX0J1EVnkuXPQ'>
            <img 
            src='/youtube.png'
            alt='유튜브'
            width={40}
            height={40} />
            </Link>
            </div>
            <div className={styles.main_imgbox}>
                <img 
                alt="메인 아이콘"
                src="/mainIcon.png"
                width={90}
                height={90}
                />
            </div>
            <div className={styles.main_searchbox}>
                <input type="text" name="nav_search"
                placeholder="검색어를 입력하세요."
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </nav>
    )
}