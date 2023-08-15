import Image from 'next/image'
import styles from '../CSS/Home.module.css';
import HomeImageCard from './HomeImageCard';

const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'



async function getOceanData() {
    const res = await fetch(`https://apis.data.go.kr/B551011/GoCamping/searchList?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&keyword=바다&_type=json`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    
    const data = await res.json();
    return data.response.body.items.item;
}

export default async function OceanBanner() {
    const oceanData = await getOceanData()
    
return (
    <div className={styles.middle_container}>
        <h1>바다 별 캠핑 데이터 컴포넌트(슬라이더 구현)</h1>
            {
                
            }
            <HomeImageCard item={oceanData}/>
            
        
    </div>
)
}
