import Link from 'next/link';
import styles from '../CSS/CardInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faWifi, faFire, faTemperatureHigh,faShoppingCart, faStore, faTint
,faFutbol,faPlayCircle, faHiking, faPlay, faPersonFalling } from '@fortawesome/free-solid-svg-icons';


type DataProps = {
    item : LocationCampingData ,
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

export default function CardInfo({item}: DataProps) {

    
return (
    <div className={styles.card_container}>
        <div className={styles.info_box}>
            <p className={styles.firstp}>
                <span>{item.trsagntNo ? "관광사업자 등록업체" : null}</span>
            </p>
            <p className={styles.secundp}>
                <span>{item.resveCl ? item.resveCl : null}</span>
            </p>    
        </div>
    <div className={styles.info_container}>
        <div className={styles.cardimg_box}>
            <img src={item.firstImageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5R6QRNst_kdWB8R08hMQMSDNVflcIzrZwQQ&usqp=CAU"} alt="캠핑장 이름" />
        </div>
            

        <div className={styles.card_detail}>
            <h2>
                <Link className={styles.camp_title}
                href={`/detail/${item.contentId}`}>{item.facltNm}</Link>
            </h2>
            <p>일출과 바다 전망이 장관인 솔섬오토캠핑장</p>
            <p>{item.intro && item.intro.split('\n').slice(0, 2).map((line, index) => (
                <span key={index}>
                    {line}
                    {index !== 1 && <br />} 
                </span>
            ))}</p>

            <ul>
            <li>{item.addr1}</li>
            {item.tel ? <li>{item.tel}</li> : null}
            
            </ul>
        </div>
    </div>
        
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
)
}
