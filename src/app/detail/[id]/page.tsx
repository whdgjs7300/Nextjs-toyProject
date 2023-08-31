"use client"
import { useEffect, useState } from 'react';
import styles from '../CSS/Home.module.css';
import axios from 'axios';
import { useParams, useRouter } from "next/navigation";
import LoadingSpinner from '@/components/LodingSpinner';
import CampImage from '@/components/CampImage';

const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'


export default function Detail() {
    
    const {id} = useParams();
    console.log(id)
    const [detailData,setDetailData] = useState<CampingData[]>();
    const [detailImages,setDetailImages] = useState<DetailImageData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true); 

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };



    const router = useRouter();
    //https://apis.data.go.kr/B551011/GoCamping/imageList?serviceKey=9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=3429
    
    useEffect(()=>{
        // 여기에 이미지 api 불러와야함
        async function loadData() {
            try {
                const detailResponse = await axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&numOfRows=3647`);
                const imageListResponse = axios.get(`https://apis.data.go.kr/B551011/GoCamping/imageList?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${id}&_type=json`);
                
                const [detailData, imageListData] = await Promise.all([detailResponse, imageListResponse]);
                
                setDetailData(detailData.data.response.body.items.item);
                setDetailImages(imageListData.data.response.body.items.item)
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


    if (isLoading) {
        return <LoadingSpinner />; 
    }
return (
    <div >
        <h1>상세페이지</h1>
        <p>{matchingData?.addr1}</p>

        <CampImage item={detailImages}/>
    </div>
)
}
