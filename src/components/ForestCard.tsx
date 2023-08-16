
import Image from 'next/image'
import styles from '../CSS/Home.module.css';
import { useRouter } from 'next/navigation';


type DataProps = {
    item : CampingData,
} 

export default function HomeImageCard({item}: DataProps) {
    const router = useRouter();

return (
        <div className={styles.imageCard}>
        <div onClick={()=>router.push(`/detail/${item.contentId}`)}
        className={styles.imageContainer}>
                <img
                    alt='Forest Image'
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
