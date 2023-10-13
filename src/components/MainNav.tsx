'use client'
import Link from "next/link";
import styles from '../CSS/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import Router from 'next/router';

export default function MainNav() {
    const router = useRouter();
    
    const [keyWord, setKeyWord]= useState<string>('');
    console.log(Router)
    // any 타입 수정해야함
    // const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         // Enter 키를 누르면 해당 경로로 이동
            
    //         router.push({
    //             pathname: `/searchlist/list`,
    //             query: { keyWord},
    //         } as any);
    //     }
    // };

    // 로그인 nav 만들어야 함 네브바 위에
    return (
        <>
            <nav className={styles.loginnav_container}>
                <Link href='/'>로그인</Link>
                <Link href='/'>로그아웃</Link>
                <Link href='/'>마이페이지</Link>
                <Link href='/'>사이트맵</Link>
            </nav>

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
            src='/naver.png' 
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
            <div onClick={()=>router.push('/')}
            className={styles.main_imgbox}>
                <img 
                alt="메인 아이콘"
                src="/mainIcon.png"
                width={90}
                height={90}
                />
            </div>
            <div className={styles.main_searchbox}>
                <input 
                onChange={(e)=>setKeyWord(e.target.value)}
                type="text" name="nav_search"
                placeholder="검색어를 입력하세요."
                />
                <Link 
                href={{
                    pathname: `/searchlist/list`,
                    query: { 
                            keyWord,
                            }
                    }}
                className={styles.main_lastbox}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
                
            </div>
        </nav>
        </>
        
    )
}