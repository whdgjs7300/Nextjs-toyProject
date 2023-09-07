'use client'
import Link from 'next/link';
import styles from '../CSS/SearchList.module.css';
import {doName, theme} from '../data/searchBox';
import { useState } from 'react';

export default function SearchBox() {
    const [selectedDoName, setSelectedDoName] = useState(''); 
    const [selectedTheme, setSelectedTheme] = useState('');

    console.log(selectedDoName,selectedTheme)

    const handleFormSubmit = (e : React.FormEvent) => {
        e.preventDefault();
    
        // 선택한 값들을 이곳에서 사용하거나 서버로 보낼 수 있습니다.
        console.log('선택한 도:', selectedDoName);
        console.log('선택한 테마:', selectedTheme);
        // 나머지 폼 데이터를 처리하거나 서버로 전송하는 로직을 추가하세요.
    };
return (
    <div className={styles.box_container}>
        <form onSubmit={handleFormSubmit}>
            <div className={styles.searchbox_form}>
                <div className={styles.form1}>
                    <p>키워드 검색</p>
                    <input type='text' name='search_keyword'/>
                </div>
                <p>지역별</p>
                <div className={styles.form2}>
                    
                    <select value={selectedDoName} onChange={(e) => setSelectedDoName(e.target.value)}>
                    <option value="0">전체/도</option>
                    {
                        doName.map((doname, i) => (
                            <>
                                <option key={`doName_${i}`} value={doname.name}>{doname.name}</option>
                            </>
                            
                        ))
                    }
                    </select>

                </div>
                <p>테마별</p>
                <div className={styles.form3}>
                    
                    <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)}>
                    <option value="1">전체테마</option>
                        {
                            theme.map((tema,i)=>(
                                <>
                                    <option key={`theme_${i}`} value={tema.name}>{tema.name}</option>
                                </>
                            ))
                        }
                    </select>
                    <Link href={`searchlist/ff`}>캠핑장 검색</Link>
                </div>
                
            </div>
        
            
        </form>

                
    </div>
)
}
