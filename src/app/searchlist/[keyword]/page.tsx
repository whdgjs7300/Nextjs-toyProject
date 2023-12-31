'use client'
import styles from '@/CSS/SearchList.module.css';
import Image from 'next/image';
import LoadingSpinner from "@/components/LodingSpinner";
import axios from 'axios';
import { useState, useEffect } from "react";
import SearchBox from '@/components/SearchBox';
import CardBoard from '@/components/CardBoard';
import {useSearchParams, useParams} from 'next/navigation';
import KaKaoMap from '@/components/KakaoMap';
import ReactPaginate from 'react-paginate';


const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'


export default function SearchList() {

    // SearchParams get으로 쿼리로 보낸 url 데이터를 가져와야함
    const searchParams = useSearchParams();
    const selectedDoName = searchParams.get('selectedDoName');
    const selectedTheme = searchParams.get('selectedTheme');
    const keyWord = searchParams.get('keyWord');
    const map = useParams(); 
    console.log(map)

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchList, setSearchList] = useState<LocationCampingData[]>();
    const [currentPage, setCurrentPage] = useState<number>(0);
    
    const handlePageChange = (selectedPage: any) => {
        
        setCurrentPage(selectedPage.selected );
    };

    
    console.log(map.keyword) 
    useEffect(()=>{
        let apiUrl = '';

        if (keyWord) {
            apiUrl = `https://apis.data.go.kr/B551011/GoCamping/searchList?serviceKey=${API_KEY}&numOfRows=10&pageNo=${currentPage + 1}&MobileOS=ETC&MobileApp=AppTest&keyword=${keyWord}&_type=json`;
        }
        else {
            apiUrl = `https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${API_KEY}&numOfRows=3686&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`;
        }

        async function loadData() {
            try {
                const searchResponse = await axios.get(apiUrl);                
                const data = searchResponse.data.response.body;
                let filteredData = data.items.item;
                if (selectedDoName && selectedTheme) {
                    // selectedDoName과 selectedTheme이 모두 있는 경우
                    filteredData = filteredData.filter((item: LocationCampingData) => {
                        return item.doNm === selectedDoName && item.lctCl.includes(selectedTheme);
                    });
                } else if (selectedDoName) {
                    // selectedDoName만 있는 경우
                    filteredData = filteredData.filter((item: LocationCampingData) => item.doNm === selectedDoName);
                } else if (selectedTheme) {
                    // selectedTheme만 있는 경우
                    filteredData = filteredData.filter((item: LocationCampingData) => item.lctCl.includes(selectedTheme));
                }
                // 선택한 테마에 따라 필터링하는 코드를 추가하려면 여기에 추가하면 됩니다.
                console.log(filteredData);
                setSearchList(filteredData);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        }
        loadData();
    },[keyWord, selectedDoName, selectedTheme, currentPage])

return (
    <div className={styles.search_container}>
        <div className={styles.search_banner}>
        <img 
            
        src='/detailbanner1.jpg' 
        alt='searchList banner'/>
        </div>
        
        
        {   // 지도로 검색하기 창
            map.keyword ==="map" ?  <>
                <KaKaoMap 
                currentPage={currentPage}
                searchList={searchList}
                handlePageChange={handlePageChange}
                />
                <SearchBox paramMap={map.keyword}/>
                </> : 
            <>
            
        
        
        <SearchBox/>
        
        <CardBoard searchData={searchList} 
        currentPage={currentPage}
        handlePageChange={handlePageChange}/>
        </>
        }

    </div>
)
}
