
import styles from '../CSS/Map.module.css';



type DataProps = {
  item: LocationCampingData;
  onCardClick: (item: LocationCampingData) => void;
};

export default function MapCard({ item, onCardClick }: DataProps) {
    // MapCard 내부에서 카드 클릭 시 onCardClick 함수를 호출
    return (
        <div className={styles.mapcard_info} onClick={() => onCardClick(item)}>
            <h3>[{item?.doNm} {item?.sigunguNm} {item?.facltNm}]</h3>
            <p>{item?.addr1 || item?.addr2}</p>
            <p>{item?.tel}</p>
        </div>
        );
    }