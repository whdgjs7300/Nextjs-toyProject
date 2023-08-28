'use client'

import Board from "@/components/Board";
import LoadingSpinner from "@/components/LodingSpinner";
import axios from 'axios';
import { useState, useEffect } from "react";

const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'


export default  function CampBoard() {

    const [locationCamp, setLocationCamp] = useState<ItemsData<LocationCampingData>>({
        items: { item: [] },
        numOfRows: 0,
        pageNo: "1",
        totalCount: 0
    });
    const [isLoading, setIsLoading] = useState(true); 

    const locationData = sessionStorage.getItem('location');

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
                        `https://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&mapX=${lon}&mapY=${lat}&radius=20000&_type=json`
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
    }, [lat, lon]);
    console.log(locationCamp)
    


    

    if (isLoading) {
        return <LoadingSpinner />; 
    }
    return (
        <div>
            <div>
                <h1>총 <span>{locationCamp.totalCount}개</span>의 주변 캠핑장이 검색되었습니다.</h1>
            </div>
            
            <Board item={locationCamp}/>
        </div>

    
    )
}