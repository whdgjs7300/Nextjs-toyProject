import styles from '../CSS/Detail.module.css';

type DataProps = {
    item : CampingData,
} 


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
                <i><span>{service.trim()}</span></i>
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
        </div>

    </div>
)
}
