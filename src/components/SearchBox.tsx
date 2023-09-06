import styles from '../CSS/SearchList.module.css';

export default function SearchBox() {

return (
    <div className={styles.box_container}>
        <h2>상세 검색</h2>
        <form>
            <div className={styles.searchbox_form}>
                <div className={styles.form1}>
                    <p>키워드 검색</p>
                    <input type='text' name='search_keyword'/>
                </div>
                <p>지역별</p>
                <div className={styles.form2}>
                    
                    <select>
                    <option value="1">전체/도</option>
                    <option value="1">서울시</option>
                    <option value="2">부산시</option>
                    </select>

                    <select>
                    <option value="1">전체/시/군</option>
                    <option value="1">서울시</option>
                    <option value="2">부산시</option>
                    </select>
                </div>
                    <p>테마별</p>
                <div className={styles.form3}>

                    <select>
                    <option value="1">전체테마</option>
                    <option value="1">서울시</option>
                    <option value="2">부산시</option>
                    </select>
                </div>
                <button type='submit'>캠핑장 검색</button>
            </div>
        
            
        </form>

                
    </div>
)
}
