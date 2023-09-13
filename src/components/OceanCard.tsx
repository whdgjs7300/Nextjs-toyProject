'use client'
import Image from 'next/image'
import styles from '../CSS/Home.module.css';
import { useRouter } from 'next/navigation';


type DataProps = {
    item : CampingData,
} 

export default function OceanCard({item}: DataProps) {
    const router = useRouter();
console.log(item)


return (
    <div className={styles.ocean_imageCard}>
        <div onClick={()=>router.push(`/detail/${item.contentId}`)} 
        className={styles.roundedImage}>
            <img
                alt='Ocean Image'
                src={item.firstImageUrl}
                className={styles.image}
            />
            <div className={styles.overlay}>
                    <p>캠핑 정보 자세히 보기</p>
                </div>
        </div>
        <div className={styles.ocean_cardContent}>
            <h2>{item.facltNm}</h2>
            <p className={styles.introText}>{item.intro || item.lineIntro || item.featureNm}</p>
        </div>
    </div>
    
    
)
}
