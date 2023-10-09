"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '@/CSS/Detail.module.css';
import axios from 'axios';
import { useParams, useRouter } from "next/navigation";
import LoadingSpinner from '@/components/LodingSpinner';
import CampImage from '@/components/CampImage';
import BasicInfo from '@/components/BasicInfo';
import DetailTag from '@/components/DetailTag';

const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'


export default function Detail() {
    
    const {id} = useParams();
    
    const [detailData,setDetailData] = useState<CampingData[]>();
    const [detailImages,setDetailImages] = useState<DetailImageData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true); 

    
    

    const router = useRouter();
    console.log(router)
    
    useEffect(()=>{
        // 여기에 이미지 api 불러와야함
        async function loadData() {
            try {
                const detailResponse = await axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&numOfRows=3647`);
                const imageListResponse = axios.get(`https://apis.data.go.kr/B551011/GoCamping/imageList?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${id}&_type=json`);
                
                const [detailData, imageListData] = await Promise.all([detailResponse, imageListResponse]);
                
                setDetailData(detailData.data.response.body.items.item);
                setDetailImages(imageListData.data.response.body.items.item);
                
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        }
        loadData();
    },[])
    // 공공데이터 오픈 api 요청 파라미터값에 id 값이 없음 ...ㅠㅠㅠ 
    const matchingData = detailData?.find(item => item.contentId === id);
    console.log(detailImages)
    console.log(matchingData)

    if (isLoading) {
        return <LoadingSpinner />; 
    }
return (
    <>
    <div className={styles.detail_container}>
        <Image 
        src={matchingData?.lctCl === '해변' ? '/detailbanner1.jpg' : '/detailbanner2.jpg'} 
        alt='detail banner'
        fill={true}
        ></Image>
        <div className={styles.text_overlay}>
            <h1>{matchingData?.facltNm}</h1>
            <p>{matchingData?.lineIntro}</p>
        </div>
        <div>
            
        </div>
        
    </div>
    {matchingData && <BasicInfo item={matchingData} />}
    {matchingData && <DetailTag item={matchingData}/> }
        <CampImage item={detailImages}/>
    </>
    
)
}
