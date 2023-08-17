"use client"
import Image from 'next/image'
import styles from '../CSS/Location.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoadingSpinner from './LodingSpinner';

    const saveLocationToSessionStorage = (lat:number, lon:number) => {
    const locationData = JSON.stringify({ lat, lon });
    sessionStorage.setItem('location', locationData);
    };

    const getLocationFromSessionStorage = () => {
    const locationData = sessionStorage.getItem('location');
    if (locationData) {
        const { lat, lon } = JSON.parse(locationData);
        return { lat, lon };
    }
    return null;
    };

    export default function Location() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        saveLocationToSessionStorage(lat, lon);
        setIsLoading(false);
        });
    }

    useEffect(() => {
        const savedLocation = getLocationFromSessionStorage();
        if (savedLocation) {
        setIsLoading(false);
        } else {
        getCurrentLocation();
        }
    }, [])

    return (
        <div className={styles.location_container}>
        <h1>현재 위치로 나만의 캠핑장 찾기</h1>
        <h2>"반경 20km 이내의 캠핑장을 확인해 보세요!"</h2>
        {isLoading ? (
            <div className={styles.spinner_wrapper}>
            <LoadingSpinner/>
            </div>
        ) : (
            <Link
            className={styles.btn}
            href={{
                pathname: '/campboard',
                query: getLocationFromSessionStorage()
            }}
            >
            확인하기
            </Link>
        )}
        </div>
    )
}