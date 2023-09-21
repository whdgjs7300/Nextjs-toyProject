import styles from '../CSS/Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faYoutube,  } from "@fortawesome/free-brands-svg-icons";
import { faB } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

return (
    <div className={styles.footer_container}>
        <div className={styles.footer_firstbox}>
            
                <div className={styles.footer_icon}><img src='/mainIcon2.png' /></div>
                <div>개인정보 처리 방침,  </div>
                <div className={styles.footer_iconbox}>
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faB} />
                </div>
                
        </div>
        <div className={styles.footer_slice}></div>

        <div className={styles.footer_secondbox}>  
            <div>서울특별시 관악구 봉천동 26-26 Tel : 010-4133-1692 </div>
            <div>E-MAIL : whdgjs7300@naver.com</div>
            <div>Copyrights(c) 2023 KOREA TOURISM ORGANIZATION ALL RIGHTS RESERVED.</div> 
        </div>
    </div>
)
}
