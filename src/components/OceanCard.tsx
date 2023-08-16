'use client'
import Image from 'next/image'
import styles from '../CSS/Home.module.css';
import { useRouter } from 'next/navigation';


type DataProps = {
    item : CampingData,
} 

export default function OceanCard({item}: DataProps) {
    const router = useRouter();

return (
    <div className={styles.ocean_imageCard}>
        <div onClick={()=>router.push(`/detail/${item.contentId}`)} 
        className={styles.roundedImage}>
            <img
                alt='Ocean Image'
                src={item.firstImageUrl}
                className={styles.image}
            />
        </div>
        <div className={styles.ocean_cardContent}>
            <p>Feel the healing at the beach.
            Feel the healing at the beach.
            Feel the healing at the beach.
            Feel the healing at the beach.
            </p>
        </div>
    </div>
    
    
)
}
