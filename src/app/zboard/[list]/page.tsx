'use client';
import Spinner from '../asset/spinner1.gif'
import Image from 'next/image'
import styles from '../CSS/LodingSpinner.module.css';
import {useSearchParams} from 'next/navigation';
import Board from '@/components/Board';


export default function Zboard() {
    // code별로 렌더되는 컴포넌트 내용 다르게 짜야함
    
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    console.log(code)

    return (
        <div >
            <Board/>
        </div>
    )
    
}