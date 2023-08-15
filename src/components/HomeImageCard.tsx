'use client'
import Image from 'next/image'
import styles from '../CSS/Home.module.css';

type DataProps = {
    item : CampingData
} 

export default function HomeImageCard({item}: DataProps) {
    

return (
        <div className={styles.imageCard}>
        <div className={styles.imageContainer}>
                <img
                    alt='Forest & Ocean Image'
                    src={item.firstImageUrl}
                    className={styles.image} 
                />
        </div>
        <div className={styles.cardContent}>
            
            <p>자연 속에서 힐링을 느껴보세요.</p>
        </div>
    </div>
    
    
)
}
