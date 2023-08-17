"use client"
import Image from 'next/image'
import styles from '../CSS/Location.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Location() {
    const [lat, setLat] = useState<number>();
    const [lon, setLon] = useState<number>();


        // 현재위치 호출 함수
    const getCurrentLocation= () => {
        // 자바스크립트 문서 참고 (현재위치 )
        navigator.geolocation.getCurrentPosition((positon)=>{
        let lat = positon.coords.latitude;
        let lon = positon.coords.longitude;
        setLat(lat);
        setLon(lon);
        });
}
useEffect(()=>{
    getCurrentLocation();
},[])


return (
    <div className={styles.location_container}>
        <h1>현재위치로 찾는 나만의 캠핑장 </h1>
        <h2>" 반경 20km 이내의 캠핑장을 확인해 보세요 ! "</h2>
        <Link className={styles.btn} href={{pathname : '/campboard', query : {lat: lat, lon : lon}  }}>확인하기</Link>
    </div>
)
}