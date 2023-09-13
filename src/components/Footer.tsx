import styles from '../CSS/Footer.module.css';

export default function Footer() {

return (
    <div className={styles.footer_container}>
        <div className={styles.footer_firstbox}>
            
                <div>아이콘</div>
                <div>개인정보 처리 방침 </div>
                <div>아이콘</div>

        </div>
        
        <div className={styles.footer_secondbox}>  
            <div>서울특별시 관악구 봉천동 26-26 Tel : 010-4133-1692 </div>
            <div>E-MAIL : whdgjs7300@naver.com</div>
            <div>Copyrights(c) 2023 KOREA TOURISM ORGANIZATION ALL RIGHTS RESERVED.</div> 
        </div>
    </div>
)
}
