import Spinner from '../asset/spinner.gif'
import Image from 'next/image'
import styles from '../CSS/LodingSpinner.module.css';


export default function LoadingSpinner() {
    
    return (
        <div className={styles.spinner_container}>
            <Image
                src={Spinner}
                alt="Loading Spinner"
                width={80}
                height={80}
                priority={true}
                className={styles.spinner_image}
            />
            <p>현재 정보를 불러오는 중입니다.</p>
    </div>
    )
    
}