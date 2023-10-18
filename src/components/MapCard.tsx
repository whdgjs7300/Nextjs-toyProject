import styles from '../CSS/Detail.module.css';

type DataProps = {
    item? : LocationCampingData,
    currentPage? : number,
} 


export default function MapCard({item}: DataProps) {

    
return (
        <div >
            <h3>[{item?.doNm} {item?.sigunguNm} {item?.facltNm}]</h3>
            <p>{item?.addr1 || item?.addr2}</p>
            <p>{item?.tel}</p>
        </div>


)
}
