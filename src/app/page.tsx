
import styles from '../CSS/Home.module.css';
import MainBanner from '../components/MainBanner';
import ForestBanner from '../components/ForestBanner';
import OceanBanner from '../components/OceanBanner';
import { RecoilRoot, useRecoilValue } from 'recoil';

export default  function Home() {
  
  

  return (
        <div>
          <h2></h2>
      <h1 className={styles.title}>캠핑 정보 홈페이지</h1>
      
      <MainBanner/>
      
      <ForestBanner  />
      <OceanBanner/>
      
      

        </div>

    
  )
}
