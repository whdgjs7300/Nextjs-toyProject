import Link from 'next/link';
import styles from '../CSS/CardInfo.module.css';

type DataProps = {
    item : ItemsData<LocationCampingData>,
} 

export default function CardInfo({item}: DataProps) {

return (
    <div className={styles.card_container}>
        <div className={styles.info_box}>
            <p>
                <span>관광사업자 등록업체 박스 Map핑해야함</span>
            </p>
        </div>
    <div className={styles.info_container}>
        <div className={styles.cardimg_box}>
            <img src="banner0.jpg" alt="캠핑장 이름" />
        </div>


        <div className={styles.card_detail}>
            <h2>
                <Link href='www.naver.com'>캠핑장 이름</Link>
            </h2>
            <p>일출과 바다 전망이 장관인 솔섬오토캠핑장</p>
            <p>캠핑장 설명 2줄 정도</p>

            <ul>
            <li>주소</li>
            <li>전화번호</li>
            </ul>
        </div>
    </div>
        
        
        <div className={styles.iconinfo}>
            <ul>
                <li>
                    <i><span>온수</span></i>
                </li>
            </ul>
        </div>
    </div>
)
}
