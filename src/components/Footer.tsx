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
            <div>주소, 전화번호 </div>
            <div>이메일</div>
            <div>Copyrights(c) 2018 KOREA TOURISM ORGANIZATION ALL RIGHTS RESERVED.</div> 
        </div>
    </div>
)
}
