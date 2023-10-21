'use client'
import { useState } from 'react';
import styles from '../CSS/Detail.module.css';
import DetailFirstInfo from './DetailFirstInfo';
import KaKaoMap from './KakaoMap';
import Board from './Board';
import Facility from './Facility';


type DataProps = {
    item : CampingData,
} 
const campTag = [{
    id: 0,
    name : "캠핑장 소개"
} , {id : 1,
    name : "시설정보"
},  {id : 2,
    name : "위치/주변정보"
},
    {id : 3,
        name : "캠핑/여행후기"
    }
];


export default function DetailTag({item}: DataProps) {
    
    const [activeComponent, setActiveComponent] = useState("캠핑장 소개");
    const handleItemClick = (item: string) => {
        setActiveComponent(item);
    };

return (
    <>
        <div className={styles.detail_navtag}>
        {
            campTag.map((tag,i)=>(
                <button key={i}
                className={activeComponent === tag.name ? styles.activeButton : ""}
                onClick={()=>handleItemClick(tag.name)}>{tag.name}</button>
            ))
        }
        
        </div>
        {activeComponent === "캠핑장 소개" &&  <DetailFirstInfo item={item}/>}
        {activeComponent === "시설정보" &&  <Facility item={item}/>}
        {activeComponent === "위치/주변정보" &&  <KaKaoMap/> } 
        {activeComponent === "캠핑/여행후기" &&  <Board/>}
    </>
    
)
}
