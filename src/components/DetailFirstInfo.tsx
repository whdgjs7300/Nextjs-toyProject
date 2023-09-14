import styles from '../CSS/Detail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faWifi, faFire, faTemperatureHigh,faShoppingCart, faStore, faTint
,faFutbol,faPlayCircle, faHiking, faPlay, faPersonFalling } from '@fortawesome/free-solid-svg-icons';

type DataProps = {
    item : CampingData,
} 

const serviceIcons = {
    전기: faBolt,
    무선인터넷: faWifi,
    장작판매: faFire,
    온수: faTemperatureHigh,
    마트: faShoppingCart,
    편의점: faStore,
    물놀이장 : faTint,
    운동시설 : faFutbol,
    놀이터 : faPlayCircle,
    산책로 : faHiking,
    운동장 : faPlay,
    트렘폴린 : faPersonFalling,
} as any;

export default function DetailFirstInfo({item}: DataProps) {

    console.log(item)
return (
    <div className={styles.firstInfo_container}>
        <div className={styles.firstInfo_intro}>
            {item.intro}
            <p>최종 정보 수정일 : {item.modifiedtime} </p>
        </div>
        <div className={styles.firstInfo_place}>
            <h2>캠핑장 시설정보</h2>
            {
                    item.sbrsCl ?
                        <div className={styles.iconinfo}>
                            <ul>
                                {item.sbrsCl.split(',').map((service, i) => (
                                    <li key={i}>
                                        <i>
                                            <span><FontAwesomeIcon icon={serviceIcons[service.trim()] || faShoppingCart } />{service.trim()}</span>
                                        </i>
                                    </li>
                                ))}
                            </ul>
                        </div> : null
                }
        </div>

        <div className={styles.firstInfo_textbox}>
            <h2>기타주요 시설</h2>
            <ul>
                <li>주요시설 <span>{item.induty || "주요시설 정보 없음"}</span></li>
                <li>기타 정보 <span>{item.sbrsEtc || "정보 없음"}</span></li>
                <li>기타 부대시설 <span>{item.lctCl}/{item.facltDivNm}</span></li>
                <li>사이트 간격 <span>{item.sitedStnc + "M" || "정보 없음"}</span></li>
                <li>바닥형태 (단위:면) <span>파쇄석({item.siteBottomCl2 || "정보 없음"})</span></li>
                <li>사이트 크기 <span>{item.siteMg1Width}X{item.siteMg1Vrticl}: {Number(item.siteMg1Width) * Number(item.siteMg1Vrticl)+"개" || "정보 없음"}</span></li>
                <li>캠핑장비대여 <span>{item.eqpmnLendCl || "정보 없음"}</span></li>
                <li>화로대 <span>{item.brazierCl || "정보 없음"}</span></li>
                
            </ul>
            <p>* 등록된 정보는 현장상황과 다소 다를 수 있으니 <span>반려동물 동반 여부, 부가 시설물, 추가차량</span> 등 원활한 캠핑을 위해 꼭 필요한 사항은 해당 캠핑장에 미리 확인하시기 바랍니다.</p>
        </div>

    </div>
)
}
