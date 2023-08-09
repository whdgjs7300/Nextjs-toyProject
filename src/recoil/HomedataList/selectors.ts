import { selector } from 'recoil';
import axios from 'axios'; 

const API_KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D'

export const fetchForestList = selector({
    key: 'fetchForestList',
    get: async() => {
        try {
            const response = await axios.get(`https://apis.data.go.kr/B551011/GoCamping/searchList?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&keyword=%EC%88%B2&_type=json`); 
            const data = response.data; // 가져온 데이터를 사용합니다.
            console.log('Fetched ForestList:', data);
            return data;
        } catch (error) {
            console.error('Error fetching ForestList:', error);
            return [];
        }
    },
});