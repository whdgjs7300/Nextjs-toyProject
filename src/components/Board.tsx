import styles from '../CSS/Footer.module.css';
import CardInfo from './CardInfo';

export default function Board() {

return (
    <div className={styles.board_container}>
        <div>
            <CardInfo/>
        </div>
    </div>
)
}
