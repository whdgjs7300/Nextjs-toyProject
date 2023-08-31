"use client"
import { useEffect, useState } from 'react';
import styles from '../CSS/Home.module.css';
import axios from 'axios';
import { useParams, useRouter } from "next/navigation";

const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'


export default function Detail() {
    
    const {id} = useParams();
    console.log(id)
    const [detailData,setDetailData] = useState<CampingData[]>();
    const router = useRouter();
    
    useEffect(()=>{
        // 여기에 이미지 api 불러와야함
        async function loadData() {
            try {
                const response = await axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&numOfRows=3647`);
                const data = response.data;
                
                setDetailData(data.response.body.items.item);
            } catch (error) {
                console.error(error);
            }
        }
        loadData();
    },[])

    const matchingData = detailData?.find(item => item.contentId === id);
    console.log()

return (
    <div >
        <h1>상세페이지</h1>
        <p>{matchingData?.addr1}</p>
    </div>
)
}
