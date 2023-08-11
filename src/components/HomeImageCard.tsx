'use client'
import Image from 'next/image'
import styles from '../CSS/Home.module.css';

type ImgProps = {
    item : string
} 

export default function HomeImageCard({item}: ImgProps) {
    

return (
        <div className={styles.imageCard}>
        <div className={styles.imageContainer}>
                <img
                    alt='Forest Image'
                    src={item}
                    className={styles.image} // Adjust class name as needed
                />
        </div>
        <div className={styles.cardContent}>
            
            <p>자연 속에서 힐링을 느껴보세요.</p>
        </div>
    </div>
    
    
)
}
