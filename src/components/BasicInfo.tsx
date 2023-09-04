import Link from 'next/link';
import styles from '../CSS/Detail.module.css';
import Image from 'next/image'

type DataProps = {
    item : CampingData,
} 

export default function BasicInfo({item}: DataProps) {
    console.log(item)

return (
    <div className={styles.Info_container}>
        <div className={styles.Info_imgbox}>
            <img 
            src={item.firstImageUrl}
            alt='detail banner'
            width='100%'
            height='100%'
            ></img>
        </div>
        <div className={styles.Info_textbox}>
            <ul>
                <li>주소 : <span>{item.addr1 || item.addr2}</span></li>
                <li>전화번호 : <span>{item.tel || "정보 없음"}</span></li>
                <li>캠핑장 환경 : <span>{item.lctCl}/{item.facltDivNm}</span></li>
                <li>캠핑장 유형 : <span>{item.induty}</span></li>
                <li>운영기간 : <span>{item.operPdCl}</span></li>
                <li>운영일 : <span>{item.operDeCl}</span></li>
                <li>홈페이지 : <Link target='blank' href={item.homepage}>{item.homepage || "정보 없음"}</Link></li>
                <li>주변이용 시설 : <span>{item.posblFcltyCl || item.posblFcltyEtc || "정보 없음"}</span></li>
            </ul>
        </div>
    </div>
)
}
