import styles from '../CSS/Footer.module.css';
import DetailFirstInfo from './DetailFirstInfo';


type DataProps = {
    item : CampingData,
} 

export default function DetailTag({item}: DataProps) {
    const campTag = [{
        id: 0,
        name : "캠핑장 소개"
    } , {id : 1,
        name : "이용안내"
    }
];

return (
    <div >
        <DetailFirstInfo item={item}/>
    </div>
)
}
