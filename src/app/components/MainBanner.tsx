import Image from 'next/image'
import styles from '../CSS/Home.module.css';

export default function MainBanner() {

return (
    <div className={styles.banner}>
        <h1 > 배너 넣자 !</h1>
        <Image 
        alt='Main Banner' 
        src='/banner2.jpg'
        layout='fill'
        objectFit='cover'
        />
    </div>
)
}
