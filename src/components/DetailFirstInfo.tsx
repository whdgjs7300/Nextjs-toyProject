import styles from '../CSS/Detail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faWifi, faFire, faTemperatureHigh,faShoppingCart, faStore, faTint
,faFutbol,faPlayCircle, faHiking, faPlay, faPersonFalling } from '@fortawesome/free-solid-svg-icons';

type DataProps = {
    item : CampingData,
} 

const serviceIcons = {
    전기: { icon: faBolt, color: 'yellow' },
    무선인터넷: { icon: faWifi, color: 'blue' },
    장작판매: { icon: faFire, color: 'red' },
    온수: { icon: faTemperatureHigh, color: 'orange' },
    마트: { icon: faShoppingCart, color: 'green' },
    편의점: { icon: faStore, color: 'lightblue' },
    물놀이장: { icon: faTint, color: 'blue' },
    운동시설: { icon: faFutbol, color: 'green' },
    놀이터: { icon: faPlayCircle, color: 'pink' },
    산책로: { icon: faHiking, color: 'brown' },
    운동장: { icon: faPlay, color: 'red' },
    트렘폴린: { icon: faPersonFalling, color: 'purple' },
} as any;


export default function DetailFirstInfo({item}: DataProps) {

    console.log(item)
return (
    <div className={styles.firstInfo_container}>
        <div className={styles.firstInfo_intro}>
            {item.intro || "캠핑장 소개글이 없습니다."}
            <p>최종 정보 수정일 : {item.modifiedtime} </p>
        </div>
        <div className={styles.firstInfo_place}>
            <h2>캠핑장 부대시설</h2>
            {
                    item.sbrsCl ?
                        <div className={styles.iconinfo}>
                            <ul>
                                {item.sbrsCl.split(',').map((service, i) => (
                                    <li key={i}>
                                        <i>
                                            <span style={{fontSize:"20px", fontWeight:"800"}}
                                            className="service-icon"                                          
                                            ><FontAwesomeIcon 
                                            style={{ color: serviceIcons[service]?.color || 'lightslategray', marginRight: "5px", fontSize: "15px"}}
                                            icon={serviceIcons[service.trim()]?.icon || faShoppingCart }
                                            />{service.trim()}</span>
                                        </i>
                                    </li>
                                ))}
                            </ul>
                        </div> : null
                }
        </div>

        

    </div>
)
}
