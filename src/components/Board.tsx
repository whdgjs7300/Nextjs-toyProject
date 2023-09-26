'use client'
import { useState } from 'react';
import styles from '../CSS/Board.module.css';
import CardInfo from './CardInfo';
import ReactPaginate from 'react-paginate';

type DataProps = {
    item :  ItemsData<LocationCampingData> ,
    handlePageChange?: (selectedPage: any) => void,
    
} 

export default function Board({item,  handlePageChange } : DataProps ) {
    
    console.log(item.length)

return (
    <div className={styles.board_container}>
        <div>
            {   // 여기 수정해야함 , campboard랑, searchList에서 보내는 데이터가 틀림
                item && item.items?.item?.map((locationData,i)=> (
                    <div key={i}>
                        <CardInfo item={locationData}/>
                    </div>
                ))
            }
            <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(item.totalCount / 10) ||Math.ceil(item.length / 10) }
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
        
        />
        </div>
    </div>
)
}
