'use client'
import Image from 'next/image'
import styles from '../CSS/Home.module.css';
import SearchBox from './SearchBox';
import { useState,useEffect } from 'react';

export default function MainBanner() {

    const [imageIndex, setImageIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
          // 3초마다 이미지 인덱스 업데이트
            setImageIndex((prevIndex) => (prevIndex % 4) + 1);
        }, 5000);
    
        return () => {
          // 컴포넌트 언마운트 시 clearInterval
            clearInterval(interval);
        };
    }, []);
    
      // 현재 이미지 인덱스에 따라 이미지 경로 설정
    const getImageSrc = () => {
        return `/banner${imageIndex}.jpg`;
    };

return (
    <div className={styles.banner}>
        <Image 
        alt='Main Banner' 
        src={getImageSrc()}
        fill={true} // 상위 태그 크기에 채우기 
        priority = {false}
        />
        <div className={styles.textOverlay}>
                <h1 className={styles.overlayText}>
                    "캠핑"
                </h1>
                <p>가실 준비가 되셨나요 ?</p> 
                
                
        </div>
        <div className={styles.textOverlay2}>
        <p>"CAMPHUB"에는 관광사업자에 등록된 3686개의 캠핑장 정보가 있습니다.</p>
        </div>
        
        <SearchBox/>
    </div>
)
}
