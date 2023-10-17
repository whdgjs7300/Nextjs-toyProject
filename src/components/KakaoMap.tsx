'use client'
import Image from 'next/image'
import styles from '../CSS/Modal.module.css';
import { useEffect, useState } from 'react';


// window 전역 객체에 kakao 속성 추가
declare global {
    interface Window {
      kakao: any; // 또는 필요한 타입으로 지정
    }
}


type ModalProps = {
    
};

export default function KaKaoMap() {


    // 카카오 Map
    useEffect(() => {
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`
        document.head.appendChild(kakaoMapScript)
        
        const onLoadKakaoAPI = () => {
            window.kakao.maps.load(() => {
                var container = document.getElementById('map')
                var options = {
                center: new window.kakao.maps.LatLng(37.484086, 126.9572383),
                level: 3,
                }
        
                var map = new window.kakao.maps.Map(container, options)
            })
            }
            

            kakaoMapScript.addEventListener('load', onLoadKakaoAPI)

        }, [])
    

    return (
        
        <div className="map_container">
            <div id='map'  style={{
                width: '500px', 
                height: '500px',
                margin: "auto"
                }}>
            </div>                


            </div>
        
    )
}