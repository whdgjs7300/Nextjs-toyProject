'use client';
import Spinner from '../asset/spinner1.gif'
import Image from 'next/image'
import styles from '../CSS/LodingSpinner.module.css';
import {useSearchParams} from 'next/navigation';
import Board from '@/components/Board';
import { useState } from 'react';


export default function Zboard() {
    // code별로 렌더되는 컴포넌트 내용 다르게 짜야함
    
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    const [isLoading, setIsLoading] = useState(true); 

    const [currentPage, setCurrentPage] = useState<number>(0);
    
    const handlePageChange = (selectedPage: any) => {
        
        setCurrentPage(selectedPage.selected );
    };
    
    
    console.log(code)

    
    return (
        <div >
            {code === 'notice' && <Board code={code} title="공지사항" handlePageChange={handlePageChange} />}
            {code === 'campNews' && <Board code={code} title="캠핑소식" handlePageChange={handlePageChange} />}
            {code === 'campSafe' && <Board code={code} title="안전한 캠핑즐기기" handlePageChange={handlePageChange} />}
            {code === 'campRequest' && <Board code={code} title="문의 및 수정요청" handlePageChange={handlePageChange} />}
        </div>
    )
    
}