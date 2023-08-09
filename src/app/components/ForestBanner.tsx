'use client'
import Image from 'next/image'
import styles from '../CSS/Home.module.css';
import HomeImageCard from './HomeImageCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default function ForestBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
    };

return (
    <>
        <div className={styles.bannerContainer}>  
        <div className={styles.middle_Title}>
            <h1 >힐링을 위한 상쾌한 산림 캠핑</h1>
            <p>""에서 추천하는 이달의 캠핑 </p>
        </div>
        
        <Slider {...settings}>
        <HomeImageCard />
            <HomeImageCard />
            <HomeImageCard />
            <HomeImageCard />
            <HomeImageCard />
            <HomeImageCard />
        </Slider>
        
    </div>
    </>
    
)
}
