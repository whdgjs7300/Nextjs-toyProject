import styles from '../CSS/Footer.module.css';
import CardInfo from './CardInfo';

type DataProps = {
    item :  ItemsData<LocationCampingData>,
} 

export default function Board({item} : DataProps) {


return (
    <div className={styles.board_container}>
        <div>
            {
                item.items.item.map((locationData,i)=> (
                    <div key={i}>
                        <CardInfo item={locationData}/>
                    </div>
                ))
            }
            
        </div>
    </div>
)
}
