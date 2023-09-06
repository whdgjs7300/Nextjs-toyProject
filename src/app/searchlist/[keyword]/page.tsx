'use client'
import styles from '@/CSS/SearchList.module.css';
import Image from 'next/image';
import LoadingSpinner from "@/components/LodingSpinner";
import axios from 'axios';
import { useState, useEffect } from "react";
import SearchBox from '@/components/SearchBox';
import Board from '@/components/Board';


export default function SearchList() {

return (
    <div className={styles.search_container}>
        <Image 
        src='/banner4.jpg' 
        alt='detail banner'
        fill={true}
        ></Image>
        
        
        <SearchBox/>
    </div>
)
}
