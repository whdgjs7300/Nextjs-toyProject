'use client'
import axios from 'axios';
import styles from '../CSS/Home.module.css';
import ForestCard from './ForestCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from 'react';




const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'

export default function ForestBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };
    
    const [foreCampingData, setForeCampingData] = useState<CampingData[]>();


    useEffect(() => {
        async function loadData() {
            try {
                const response = await axios.get(`https://apis.data.go.kr/B551011/GoCamping/searchList?serviceKey=${API_KEY}&numOfRows=17&pageNo=1&MobileOS=ETC&MobileApp=AppTest&keyword=%EC%88%B2&_type=json`);
                const data = response.data;
                setForeCampingData(data.response.body.items.item);
            } catch (error) {
                console.error(error);
            }
        }
        loadData();
    }, []);



return (
    <>
        <div className={styles.bannerContainer}>  
        <div className={styles.forest_middle_container}>
            <h1 >힐링을 위한 상쾌한 산림 캠핑</h1>
            <p>""에서 추천하는 이달의 캠핑 </p>
        </div>
        
        <Slider {...settings}>
            {foreCampingData?.map((item, i) => {
                if (item.firstImageUrl) {
                    return <ForestCard item={item} key={i} />;
                }
                return null; // Skip rendering for items without firstImageUrl
            })}
        
            
        </Slider>
        
    </div>
    </>
    
)
}
