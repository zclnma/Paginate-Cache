import React from 'react'

import style from './Pager.module.scss';

const pager = (props) => {

    const {currentPage, totalPage, isLoading, isAllLoaded, backClicked, nextClicked} = props;

    let shouldPlus = !isLoading && !isAllLoaded && currentPage !== 0;

  return (
    <div className={style.page}>
    <div className={style.item}>
      <button 
        disabled={currentPage === 1 || isLoading} 
        onClick={backClicked}>Back</button>
      </div>
    <div className={style.item}> 
      Page {currentPage} of {totalPage} {shouldPlus ? '+' : null}
    </div>
    <div className={style.item}>
      <button 
        disabled={totalPage === currentPage - 7 || isLoading || (isAllLoaded && currentPage === totalPage)} 
        onClick={nextClicked}>Next</button>
    </div>
    </div>
  )
}

export default pager;
