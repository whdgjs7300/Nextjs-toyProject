'use client'
import Image from 'next/image';
import CardBoard from "@/components/CardBoard";
import LoadingSpinner from "@/components/LodingSpinner";
import axios from 'axios';
import { useState, useEffect } from "react";
import styles from '@/CSS/SearchList.module.css';

const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'


export default  function CampBoard() {

    const [locationCamp, setLocationCamp] = useState<ItemsData<LocationCampingData>>({
        items: { item: [] },
        numOfRows: 0,
        pageNo: "1",
        totalCount: 0,
    });
    const [isLoading, setIsLoading] = useState(true); 

    const [currentPage, setCurrentPage] = useState<number>(0);
    
    const handlePageChange = (selectedPage: any) => {
        
        setCurrentPage(selectedPage.selected );
    };
    
    const locationData = sessionStorage.getItem('location');
    console.log(locationData);

    // locationData 값이 있는 경우에만 파싱하여 lat와 lon 값을 가져오기
    let lat: number | null = null;
    let lon: number | null = null;
    
    if (locationData) {
        const { lat: storedLat, lon: storedLon } = JSON.parse(locationData);
        lat = storedLat;
        lon = storedLon;
    }
    
    useEffect(() => {
        async function getCampData() {
            if (lat && lon) {
                try {
                    const response = await axios.get(
                        `https://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=${API_KEY}&numOfRows=10&pageNo=${currentPage+1}&MobileOS=ETC&MobileApp=AppTest&mapX=${lon}&mapY=${lat}&radius=20000&_type=json`
                    );

                    const data = response.data.response.body;
                    setLocationCamp(data);
                    setIsLoading(false);
                } catch (error) {
                    console.error(error);
                    setIsLoading(false);
                }
            }    
        }
        getCampData();
    }, [lat, lon, currentPage]);
    console.log(locationCamp)
    

    if (isLoading) {
        return <LoadingSpinner />; 
    }
    return (
        <div className={styles.search_container}>
            <img 
            className={styles.search_banner}
        src='/detailbanner1.jpg' 
        alt='searchList banner'
        
        ></img>
            <div className={styles.search_title}>
                <h1>총 <span>"{locationCamp.totalCount}개"</span>의 주변 캠핑장이 검색되었습니다.</h1>
            </div>
            
            <CardBoard 
            locationData={locationCamp}
            handlePageChange={handlePageChange}
            />
        </div>

    
    )
}