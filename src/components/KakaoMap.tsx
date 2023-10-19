'use client'
import React, { useEffect, useRef } from 'react';
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
  handlePageChange: (selectedPage: any) => void;
};

export default function KaKaoMap({ searchList, currentPage = 0, handlePageChange }: DataProps) {
  const itemsPerPage = 10;
  const mapRef = useRef(null);

  // 카카오 Map
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById('map');
        var options = {
          center: new window.kakao.maps.LatLng(37.7278127, 127.5112565),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);

        const markers = [];

        // 데이터 배열을 반복하여 마커 생성 및 추가
        searchList?.forEach((campingData, index) => {
          const markerPosition = new window.kakao.maps.LatLng(campingData.mapY, campingData.mapX);
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
        mapRef.current = map;
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
  }, [searchList]);

  // 콜백 함수: 카드를 클릭하면 호출됩니다.
  const handleCardClick = (item) => {
    if (mapRef.current) {
      // 클릭한 카드의 위치 정보를 가져옵니다.
      const position = new window.kakao.maps.LatLng(item.mapY, item.mapX);
      // 지도의 중심을 클릭한 위치로 이동합니다.
      mapRef.current.setCenter(position);
    }
  };

  return (
    <div className={styles.map_container}>
      <div id='map' style={{ width: "70%", height: "700px" }} ref={mapRef}></div>
      <div className={styles.mapcard}>
        {searchList
          ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((searchData, i) => (
            <MapCard item={searchData} key={i} onCardClick={handleCardClick} />
          ))}
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
    </div>
  );
}