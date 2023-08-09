'use client'
import Image from 'next/image'
import styles from '../CSS/Home.module.css';

export default function HomeImageCard() {

return (
        <div className={styles.imageCard}>
        <div className={styles.imageContainer}>
            <Image
                alt='Forest Image'
                src='/banner2.jpg'
                fill={true}
                priority={true}
            />
        </div>
        <div className={styles.cardContent}>
            
            <p>자연 속에서 힐링을 느껴보세요.</p>
        </div>
    </div>
    
    
)
}
