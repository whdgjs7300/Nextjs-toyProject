import styles from '../CSS/Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faYoutube,  } from "@fortawesome/free-brands-svg-icons";
import { faB } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {

return (
    <div className={styles.footer_container}>
        <div className={styles.footer_firstbox}>
            
                <div className={styles.footer_icon}><img src='/mainIcon2.png' /></div>
                <div className={styles.footer_infobox}><div>개인정보 처리 방침</div> <div>캠핑장 등록안내</div> <div>전자우편무단수집거부</div> <div>미등록야영장불법영업신고</div>  </div>
                <div className={styles.footer_iconbox}>
                    <Link target='blank' href='https://www.instagram.com/gocamping_official/'><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link target='blank' href='https://www.facebook.com/go2thecamping/'><FontAwesomeIcon icon={faFacebookF} /></Link>
                    <Link target='blank' href='https://blog.naver.com/gocamping_official'><FontAwesomeIcon icon={faB} /></Link>
                    <Link target='blank' href='https://www.youtube.com/channel/UCuCBPZUAgFBX0J1EVnkuXPQ'><FontAwesomeIcon icon={faYoutube} /></Link>
                </div>
                
        </div>
        <div className={styles.footer_slice}></div>

        <div className={styles.footer_secondbox}>  
            <div >서울특별시 관악구 봉천동 26-26 </div>
            <div className={styles.footer_contents}>E-MAIL : whdgjs7300@naver.com <div>Tel : 010-4133-1692</div> </div>
            <div>Copyrights(c) 2023 KOREA TOURISM ORGANIZATION ALL RIGHTS RESERVED.</div> 
        </div>
    </div>
)
}
