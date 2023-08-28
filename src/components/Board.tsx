import styles from '../CSS/Footer.module.css';
import CardInfo from './CardInfo';

type DataProps = {
    item :  ItemsData<LocationCampingData>,
} 

export default function Board({item} : DataProps) {
    

return (
    <div className={styles.board_container}>
        <div>
            <CardInfo item={item}/>
        </div>
    </div>
)
}
