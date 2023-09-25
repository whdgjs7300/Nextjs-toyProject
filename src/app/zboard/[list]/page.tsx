'use client';
import Spinner from '../asset/spinner1.gif'
import Image from 'next/image'
import styles from '../CSS/LodingSpinner.module.css';
import {useSearchParams} from 'next/navigation';
import Board from '@/components/Board';

export default function Zboard() {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    console.log(code)

    return (
        <div >
            
        </div>
    )
    
}