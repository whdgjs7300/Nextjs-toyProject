import Image from 'next/image'
import styles from '../CSS/Home.module.css';
import OceanCard from './OceanCard';

const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'



async function getOceanData() {
    const res = await fetch(`https://apis.data.go.kr/B551011/GoCamping/searchList?serviceKey=${API_KEY}&numOfRows=17&pageNo=1&MobileOS=ETC&MobileApp=AppTest&keyword=해수욕&_type=json`)
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
    const imageStyle = {
        zIndex: -1,
        
    }

return (
    <div className={styles.ocean_middle_container}>

        <Image
            src='/banner3.jpg'
            alt="Background Image"
            fill={true}
            priority={true}
            style={imageStyle}
                />
        
        
        <h1>바다 별 캠핑 데이터 컴포넌트</h1>
        <div className={styles.ocean_cardContainer}>
        {oceanData.map((item: CampingData, i: number) => {
                if (item.firstImageUrl) {
                    return <OceanCard item={item} key={i}/>;
                }
                return null; 
            })}
        </div>
        
            
            
        
    </div>
)
}
