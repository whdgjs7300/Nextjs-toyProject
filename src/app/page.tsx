
import styles from '../CSS/Home.module.css';
import MainBanner from '../components/MainBanner';
import ForestBanner from '../components/ForestBanner';
import OceanBanner from '../components/OceanBanner';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Location from '@/components/Location';
import StoryBanner from '@/components/StoryBanner';


export default  function Home() {
  
  

  return (
        <div>
          
      
      <MainBanner/>
      <Location/>
      <OceanBanner/>
      <ForestBanner/>
      <StoryBanner/>
      


        </div>

    
  )
}
