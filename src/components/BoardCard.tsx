'use client'
import { useState, useEffect } from 'react';
import styles from '../CSS/Board.module.css';
import ReactPaginate from 'react-paginate';

type DataProps = {
    
} 

export default function BoardCard( ) {
    

    
return (
    <div className={styles.boardcard_container}>
        <table className={styles.table_list}>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록일</th>
                    <th>조회</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2023년 등록야영장 지원사업 추진계획</td>
                    <td>관리자</td>
                    <td>2023/10/12</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
        
    </div>
)
}
