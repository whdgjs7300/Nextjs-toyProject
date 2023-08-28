'use client'

import Board from "@/components/Board";



export default  function CampBoard() {
   // https://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey=9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&mapX=126.9572198&mapY=37.4841055&radius=20000

    const locationData = sessionStorage.getItem('location');

    // locationData 값이 있는 경우에만 파싱하여 lat와 lon 값을 가져오기
    let lat = null;
    let lon = null;
    if (locationData) {
        const { lat: storedLat, lon: storedLon } = JSON.parse(locationData);
        lat = storedLat;
        lon = storedLon;
    }



    // 여기에 게시판 틀 하나 컴포넌트 (재사용) 만들어야함
    // 공통사용할 카드 만들어야함 (페이지 네이션)
    // 내일 다해야함 씨발

    return (
        <div>
            <div>
                <h1>총 <span>?개</span>의 주변 캠핑장이 검색되었습니다.</h1>
            </div>
            
            <Board/>
        </div>

    
    )
}