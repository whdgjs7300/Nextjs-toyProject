import styles from './CSS/Home.module.css';
import MainBanner from './components/MainBanner';
import Footer from './components/Footer';
import ForestBanner from './components/ForestBanner';
import OceanBanner from './components/OceanBanner';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>캠핑 정보 홈페이지</h1>
      <MainBanner/>

      <ForestBanner/>
      <OceanBanner/>
      <Footer/>
    </div>
  )
}
