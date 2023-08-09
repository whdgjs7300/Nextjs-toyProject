import Image from 'next/image'
import styles from '../CSS/Home.module.css';

export default function MainBanner() {

return (
    <div className={styles.banner}>
        <Image 
        alt='Main Banner' 
        src='/banner1.jpg'
        fill={true} // 상위 태그 크기에 채우기 
        priority = {false}
        />
        <div className={styles.textOverlay}>
                <h1 className={styles.overlayText}>
                    "캠핑"
                </h1>
                <p>가실 준비가 되셨나요 ?</p>
        </div>
    </div>
)
}
