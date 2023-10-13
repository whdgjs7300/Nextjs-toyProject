'use client'
import { useState, useEffect } from 'react';
import styles from '../CSS/Board.module.css';
import ReactPaginate from 'react-paginate';
import BoardCard from './BoardCard';

type DataProps = {
    code : string | undefined | null,
    title : string,
    handlePageChange: (selectedPage: any) => void,
} 

export default function Board({code, title,handlePageChange } : DataProps) {
    
    console.log(title)
    
return (
    <div>
        <div>
            <i>아이콘</i><h1>{title}</h1>
        </div>
        
        
        <BoardCard />

        
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        
        pageRangeDisplayed={5}
        pageCount={1}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination_container}
        pageClassName={styles.pagination_page}
        activeClassName={styles.pagination_active}
        previousClassName={styles.pagination_previous}
        nextClassName={styles.pagination_next}
        previousLinkClassName={styles.pagination_link}
        nextLinkClassName={styles.pagination_link}
        disabledClassName={styles.pagination_disabled}
        disabledLinkClassName={styles.pagination_disabled_link}
        forcePage={1}
        />
    </div>
)
}
