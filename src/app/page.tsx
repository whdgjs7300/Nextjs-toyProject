"use client"
import styles from '../CSS/Home.module.css';
import MainBanner from '../components/MainBanner';
import ForestBanner from '../components/ForestBanner';
import OceanBanner from '../components/OceanBanner';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { fetchForestList } from '../recoil/HomedataList/selectors';
import { useEffect, useState } from 'react';


const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'
async function fetchData() {
  const res = await fetch(`https://apis.data.go.kr/B551011/GoCamping/searchList?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&keyword=%EC%88%B2&_type=json`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.response.body.items.item;
}



export default  function Home() {
  const [campingData, setCampingData] = useState([]);
  

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchData();
        setCampingData(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);
  console.log(campingData);

  return (
        <div>
          <h2></h2>
      <h1 className={styles.title}>캠핑 정보 홈페이지</h1>
      
      <MainBanner/>
      
      <ForestBanner forestList={campingData} />
      <OceanBanner/>
      
      

        </div>

    
  )
}
