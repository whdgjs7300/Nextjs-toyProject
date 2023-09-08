'use client'
import styles from '@/CSS/SearchList.module.css';
import Image from 'next/image';
import LoadingSpinner from "@/components/LodingSpinner";
import axios from 'axios';
import { useState, useEffect } from "react";
import SearchBox from '@/components/SearchBox';
import Board from '@/components/Board';
import {useSearchParams} from 'next/navigation';
import { data } from 'autoprefixer';

const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'


export default function SearchList() {

    // SearchParams get으로 쿼리로 보낸 url 데이터를 가져와야함
    const searchParams = useSearchParams();
    const selectedDoName = searchParams.get('selectedDoName');
    const selectedTheme = searchParams.get('selectedTheme');
    const keyWord = searchParams.get('keyWord');

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchList, setSearchList] = useState<CampingData[]>([]);

    console.log(selectedDoName, selectedTheme, keyWord);
    console.log(searchList)
    useEffect(()=>{
        // 여기에 이미지 api 불러와야함
        async function loadData() {
            try {
                const searchResponse = await axios.get(`https://apis.data.go.kr/B551011/GoCamping/searchList?serviceKey=${API_KEY}&numOfRows=3686&pageNo=1&MobileOS=ETC&MobileApp=AppTest&keyword=${keyWord}&_type=json`);                
                const data = searchResponse.data.response.body;
              //  setDetailData(detailData.data.response.body.items.item);
                setSearchList(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        }
        loadData();
    },[keyWord, selectedDoName, selectedTheme])

return (
    <div className={styles.search_container}>
        <Image 
        src='/banner4.jpg' 
        alt='detail banner'
        fill={true}
        ></Image>
        
        
        <SearchBox/>
        
    </div>
)
}
