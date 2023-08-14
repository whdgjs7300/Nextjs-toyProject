
import styles from '../CSS/Home.module.css';
import MainBanner from '../components/MainBanner';
import ForestBanner from '../components/ForestBanner';
import OceanBanner from '../components/OceanBanner';
import { RecoilRoot, useRecoilValue } from 'recoil';

export default  function Home() {
  
  

  return (
        <div>
          
      
      <MainBanner/>
      <ForestBanner  />
      <OceanBanner/>
      
      

        </div>

    
  )
}
