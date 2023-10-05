'use client'
import { useState } from 'react';
import styles from '../CSS/Board.module.css';
import CardInfo from './CardInfo';
import ReactPaginate from 'react-paginate';

// 지저분한 컴포넌트 리팩토링 꼭해야함 !

type DataProps = {
    locationData? :  ItemsData<LocationCampingData> | undefined ,
    handlePageChange?: (selectedPage: any) => void,
    searchData? :  LocationCampingData[] | undefined,
    currentPage? : number,
} 

export default function Board({locationData,searchData, handlePageChange,currentPage = 0 } : DataProps ) {
    const itemsPerPage = 10;
    console.log(currentPage);
    

return (
    <div className={styles.board_container}>
        <div>
        {// searchData가 존재하면 10개씩 데이터를 잘라서 출력
                    (searchData
                        ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                        .map((data, i) => (
                            <div key={i}>
                                <CardInfo item={data} />
                            </div>
                        )))
                    ||
                    (locationData?.items?.item
                        ?.map((data, i) => (
                            <div key={i}>
                                <CardInfo item={data} />
                            </div>
                        )))
                }
            <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={locationData?.totalCount ? Math.ceil(locationData.totalCount / 10) : (searchData ? Math.ceil(searchData.length / 10) : 1)}
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
        forcePage={currentPage}
        />
        </div>
    </div>
)
}
