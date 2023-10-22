    'use client'
    import React, { useEffect, useRef, useState } from 'react';
    import styles from '../CSS/Map.module.css';
    import MapCard from './MapCard';
    import ReactPaginate from 'react-paginate';

    // window 전역 객체에 kakao 속성 추가
    declare global {
    interface Window {
        kakao: any; // 또는 필요한 타입으로 지정
    }
    }

    

    type DataProps = {
    searchList?: LocationCampingData[];
    currentPage?: number;
    handlePageChange?: (selectedPage: any) => void;
    item?: LocationCampingData,
    };

    export default function KaKaoMap({
    searchList,
    currentPage = 0,
    handlePageChange,
    item,
    }: DataProps) {

    const itemsPerPage = 10;
    const mapRef: React.RefObject<any> = useRef(null);
    
        console.log(mapRef)
    // 카카오 Map 초기화
    useEffect(() => {
        const kakaoMapScript = document.createElement('script');
        kakaoMapScript.async = false;
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`;
        document.head.appendChild(kakaoMapScript);

        const onLoadKakaoAPI = () => {
        window.kakao.maps.load(() => {
            var container = document.getElementById('map');
            var options = {
            // 초기값 첫번째 캠핑 데이터
            center: new window.kakao.maps.LatLng(item?.mapY || 37.7278127, item?.mapX || 127.5112565) ,
            level: 3,
            };

            var map = new window.kakao.maps.Map(container, options);

            const markers: { marker: any; campingData: LocationCampingData }[] = [];

            // 데이터 배열을 반복하여 마커 생성 및 추가
            searchList?.forEach((campingData, index) => {
            const markerPosition = new window.kakao.maps.LatLng(
                campingData.mapY,
                campingData.mapX
            );
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
                map: map,
                title: campingData.facltNm,
            });
            markers.push({ marker, campingData });
            });

            // MapCard를 클릭하면 해당 위치로 이동
            markers.forEach(({ marker, campingData }) => {
            window.kakao.maps.event.addListener(marker, 'click', () => {
                map.panTo(marker.getPosition());
            });
            });

            // 지도 참조 설정
            if (mapRef.current) {
                // 
            mapRef.current = map;
            }
        });
        };

        kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
    }, [searchList]);

    // 콜백 함수: 카드를 클릭하면 호출됩니다.
    const handleCardClick = (item: LocationCampingData) => {
        if (mapRef.current) {
        const position = new window.kakao.maps.LatLng(item.mapY, item.mapX);
        mapRef.current.setCenter(position);
        }
    };

    return (
        <div className={styles.map_container}>
            {
                item ? (
                    <div>
                        <div id="map" style={{ width: "700px", height: "700px" }} ref={mapRef}></div>
                        <div className="item-info">
                            <div>{item.facltNm}</div>
                            <div>{item.addr1}</div>
                            <div>{item.tel}</div>
                        </div>
                    </div>
                    ) : (
                    <div>
                <div id="map" style={{ width: "700px", height: "700px" }} ref={mapRef}></div>
                    <div className={styles.mapcard}>
                        {searchList
                        ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                        .map((searchData, i) => (
                            <MapCard
                            item={searchData}
                            key={i}
                            onCardClick={handleCardClick}
                            />
                        ))}
                        <ReactPaginate
                        previousLabel="PREV"
                        nextLabel="NEXT"
                        pageRangeDisplayed={5}
                        pageCount={searchList ? Math.ceil(searchList.length / 10) : 1}
                        renderOnZeroPageCount={null}
                        onPageChange={handlePageChange}
                        forcePage={1}
                        marginPagesDisplayed={1}
                        className="custom_pagination"
                        />
                    </div>
                </div>
                )
            }
        
        </div>
    );
    }