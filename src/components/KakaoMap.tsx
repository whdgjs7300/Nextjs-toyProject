'use client'
import Image from 'next/image'
import styles from '../CSS/Map.module.css';
import { useEffect, useState } from 'react';
import MapCard from './MapCard';
import ReactPaginate from 'react-paginate';


// window 전역 객체에 kakao 속성 추가
declare global {
    interface Window {
      kakao: any; // 또는 필요한 타입으로 지정
    }
}


type DataProps = {
    searchList? : LocationCampingData[] ,
    currentPage? : number,
    handlePageChange?: (selectedPage: any) => void,
};

export default function KaKaoMap({searchList,currentPage = 0, handlePageChange} : DataProps) {
    const itemsPerPage = 10;
    
    // 카카오 Map
    //  데이터 불러와야함 
    //  캠핑장 lat, lon 정보 가져와야함, 그이후 반복문으로 마커 지정
    //  
    useEffect(() => {
        const kakaoMapScript = document.createElement('script');
        kakaoMapScript.async = false;
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`;
        document.head.appendChild(kakaoMapScript);
    
        const onLoadKakaoAPI = () => {
            window.kakao.maps.load(() => {
                var container = document.getElementById('map');
                var options = {
                    // 초기값 첫번 쨰 캠핑 데이터
                center: new window.kakao.maps.LatLng(37.7278127, 127.5112565),
                level: 3,
                };
        
                var map = new window.kakao.maps.Map(container, options);
        
                // 데이터 배열을 반복하여 마커 생성 및 추가
                searchList?.forEach((campingData, index) => {
                const markerPosition = new window.kakao.maps.LatLng(campingData.mapY, campingData.mapX);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    map: map,
                    title: campingData.facltNm
                    ,
                });
                });
            });
            };
        
            kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
        }, [searchList]);
    

    return (
        
        <div className="map_container">
            <div id='map' style={{
                width : "600px",
                height : "700px",
            }}  >
            </div>

            
                
                {
                    searchList
                        ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                        .map((searchData, i) => (
                            <div key={i}>
                                <MapCard item={searchData} />
                            </div>
                        ))
                }
                        
                <ReactPaginate
                previousLabel="PREV"
                nextLabel="NEXT"
                pageRangeDisplayed={5}
                pageCount={searchList ? Math.ceil(searchList.length / 10) : 1}
                renderOnZeroPageCount={null}
                onPageChange={handlePageChange}
                forcePage={1}
                marginPagesDisplayed={1} // 현재 페이지 주변에 표시할 페이지 수
                breakLabel="..." // 현재 페이지 주변의 페이지 번호를 줄이는 라벨
                containerClassName="pagination" // 추가 CSS 클래스 (선택사항)
                
                />

                
            </div>
        
    )
}