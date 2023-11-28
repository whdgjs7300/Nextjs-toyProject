## CAMP HUB (전국 테마별 캠핑장 정보 확인 서비스)
<img width="984" alt="스크린샷 2023-10-15 오후 2 17 20" src="https://github.com/whdgjs7300/Nextjs-toyProject/assets/112137464/5c111962-2122-482f-be48-de9ed6788d43">

## 프로젝트 설명

캠핑, 야영에 대한 관심이 오르면서 전국에 있는 모든 캠핑에 대한 다양한 정보를 제공하는 웹사이트를 개발하고 싶었다. 마침 공공데이터 API에 관련 데이터가 비교적 상세하게 제공하고있어 바로 개발을 시작하였다. 

프로젝트 명은 **CAMPHUB**이며,

웹사이트 내에서 대표적인 산림 캠핑장, 해변 캠핑장, 사용자 위치기반 근처 캠핑장, 교통, 날씨, 안전수칙, 캠핑용품 등을 확인할 수 있고, 키워드 별, 상세검색 별, 지도 별, 관리자가 제공하는 캠핑소식, 고객센터 등 다양한 정보들을 제공받을 수 있다. 

### **■ 웹사이트 동작**

1. Home 페이지 내에 Main Banner는 4개의 이미지로 5초 주기로 바뀌어 동작하며 상세검색창으로 사용자가 바로 원하는 캠핑장 정보를 확인할 수 있다.
2. Home 페이지는 MainBanner, 위치기반 캠핑장조회, 해변캠핑장 TOP5, 산림캠핑장 TOP10, 캠핑장 이용전 정보확인 등으로 구성되어있고 산림캠핑장 TOP10은 슬라이더 라이브러리를 활용하여 윈도우 넓이 별로 정해진 데이터 수로 출력된다.
3. 캠핑장 이미지, 타이틀을 클릭하면 해당 캠핑장의 상세페이지로 이동하여 상세정보, 이미지 모달, 사용자 리뷰, 위치기반 지도, 해당 캠핑장 홈페이지 이동 등 다양한 시설 등 상세한 정보를 확인할 수 있다.
4. 검색페이지 내에선 지역별, 테마별, 사용자 검색 키워드를 정하여 클릭하면 관련된 데이터를 필터하여 사용자는 확인 할 수 있다.
5. 캠핑소식, 고객센터 페이지 내에선 관리자의 공지, 사용자의 개선사항 등 다양한 의견을 확인 및 작성 할 수 있다.
6. 진행중

---

### **■ 웹사이트 기능**

- 메인 아이콘 클릭시 Home 이동
- App Router를 이용한 페이지 이동
- 현재 사용자의 위치별 데이터 필터
- 슬라이더를 이용한 카드 이동
- 페이지네이션을 통한 페이지별 데이터 출력
- 데이터 필터 기능구현
- 데이터 상세검색 기능구현
- 카카오 Map API를 이용한 상세페이지 데이터 위치 출력
- 백엔드 서버 ,MongoDB에 고객문의 데이터, 리뷰, 찜, 관리자의 공지 데이터 등 요청 및 응답
- 진행중

## 진행하는 과정에 어려웠던 점


### 진행을 하면서 느낀 점
