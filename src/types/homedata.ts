// 키워드 별 캠핑 데이터 타입 선언

type ItemsData<T> = {
    items: {item : T[]};
    numOfRows: number;
    pageNo: string;
    totalCount: number;

    
};

type CampingData = {
    addr1: string;
    addr2: string;
    animalCmgCl: string;
    brazierCl: string;
    caravAcmpnyAt: string; // 카라반 유무
    clturEventAt: string;
    contentId: string;
    createdtime: string;
    doNm: string;           // 도 이름(ex- 강원도)
    eqpmnLendCl: string;
    exprnProgrmAt: string;
    facltDivNm: string;      // 민간
    facltNm: string;
    featureNm: string;      // 캠핑장 설명
    fireSensorCo: string;
    firstImageUrl: string;
    homepage: string;     // 홈페이지 url
    industry: string;
    manageSttus: string;
    mangeDivNm: string;
    mapX: string;
    mapY: string;
    lineIntro : string
    modifiedtime: string;
    operDeCl: string;
    operPdCl: string;
    lctCl: string;
    prmisnDe: string;
    induty : string;
    sigunguNm: string;          // 구/군 이름
    posblFcltyCl : string;
    tel: string;
    themaEnvrnCl: string;
    toiletCo: string;
    posblFcltyEtc : string;
    trlerAcmpnyAt: string;
    intro : string;
    sbrsCl : string;
    siteMg1Width: string;
    siteMg1Vrticl : string;
    siteBottomCl2 : string;
    sitedStnc : string;
    sbrsEtc : string;
    length : number;
};

type LocationCampingData = {
    addr1: string;
    addr2: string;
    allar: string;
    animalCmgCl: string;
    autoSiteCo: string;
    bizzrno: string;
    brazierCl: string;
    induty : string;
    
    caravAcmpnyAt: string;
    caravInnerFclty: string;
    caravSiteCo: string;
    clturEvent: string;
    clturEventAt: string;
    contentId: string;
    createdtime: string;
    direction: string;
    doNm: string;
    eqpmnLendCl: string;
    exprnProgrm: string;
    exprnProgrmAt: string;
    extshrCo: string;
    facltDivNm: string;
    facltNm: string;
    featureNm: string;
    fireSensorCo: string;
    firstImageUrl: string;
    frprvtSandCo: string;
    frprvtWrppCo: string;
    glampInnerFclty: string;
    glampSiteCo: string;
    gnrlSiteCo: string;
    homepage: string;
    hvofBgnde: string;
    hvofEnddle: string;
    industry: string;
    indvdlCaravSiteCo: string;
    insrncAt: string;
    intro: string;
    lctCl: string;
    lineIntro: string;
    manageNmpr: string;
    manageSttus: string;
    mangeDivNm: string;
    mapX: string;
    mapY: string;
    mgcDiv: string;
    modifiedtime: string;
    operDeCl: string;
    operPdCl: string;
    posblFcltyCl: string;
    posblFcltyEtc: string;
    prmisnDe: string;
    resveCl: string;
    resveUrl: string;
    sbrsCl: string;
    sbrsEtc: string;
    sigunguNm: string;
    siteBottomCl1: string;
    siteBottomCl2: string;
    siteBottomCl3: string;
    siteBottomCl4: string;
    siteBottomCl5: string;
    siteMg1Co: string;
    siteMg1Vrticl: string;
    siteMg1Width: string;
    siteMg2Co: string;
    siteMg2Vrticl: string;
    siteMg2Width: string;
    siteMg3Co: string;
    siteMg3Vrticl: string;
    siteMg3Width: string;
    sitedStnc: string;
    swrmCo: string;
    tel: string;
    themaEnvrnCl: string;
    toiletCo: string;
    tooltip: string;
    tourEraCl: string;
    trlerAcmpnyAt: string;
    trsagntNo: string;
    wtrplCo: string;
    zipcode: string;
    
    length : number;
  };

type DetailImageData = {
    contentId: string;
    createdtime: string;
    imageUrl: string;
    modifiedtime: string;
    serialNumber: string;
};