import Link from 'next/link';
import styles from '../CSS/Footer.module.css';

export default function CardInfo() {

return (
    <div className={styles.card_container}>
        <div className={styles.info_box}>
            <p>
                <span>관광사업자 등록업체 박스 Map핑해야함</span>
            </p>
        </div>
        <div className={styles.cardimg_box}>
            <img src="" alt="캠핑장 이름" />
        </div>

        <div>
            <h2>
                <Link href='www.naver.com'>캠핑장 이름</Link>
            </h2>
            <p>일출과 바다 전망이 장관인 솔섬오토캠핑장</p>
            <p>캠핑장 설명 2줄 정도</p>
        </div>
        <ul>
            <li>주소</li>
            <li>전화번호</li>
        </ul>
        <div>
            <ul>
                <li>
                    <i><span>온수</span></i>
                </li>
            </ul>
        </div>
    </div>
)
}
