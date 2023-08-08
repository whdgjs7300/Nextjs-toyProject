import Image from 'next/image'
import styles from './CSS/Home.module.css';
import MainBanner from './components/MainBanner';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>홈페이지 입니다.</h1>
      <MainBanner/>
    </div>
  )
}
