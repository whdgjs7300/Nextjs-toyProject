
import Image from 'next/image'
import styles from '../CSS/Home.module.css';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

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
            
            <h2>{item.facltNm}</h2>
            
            <FontAwesomeIcon icon={faTree} />
            
            
        </div>
    </div>
    
    
)
}
