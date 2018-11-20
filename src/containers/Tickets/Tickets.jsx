import React, { Component} from 'react'
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../service/axios/axiosTickets';
import Ticket from '../../components/Tickets/Ticket/Ticket';
import Spinner from '../../components/Tickets/Spinner/Spinner';
import Error from '../../components/Tickets/Error/Error';
import ErrorHandler from '../../components/Shared/errorHandler';

import style from './Tickets.module.scss';


const buttonType = {
  BACK: 'back',
  NEXT: 'next',
}

class Tickets extends Component {

  componentDidMount = ()  => {
      this.props.onInitialFetch()
  }

  pageHandler = (type) => {
    if(type === buttonType.BACK){
        this.props.onBack()
    }
    if(type === buttonType.NEXT){
        this.props.onNext()
    }
  }

  render() {

    const {isLoading, isFetching, isError, currentPage, totalPage, tickets} = this.props;

    let ticketArea 

    if (isLoading || isFetching) {
      ticketArea = <div className={style.tickets}><Spinner /></div>
    }
    else if (isError && (totalPage === 0 || (currentPage > totalPage))) {
      ticketArea = <div className={style.tickets} ><Error clicked={() => this.props.onReload()}/></div>
    }
    else if (!isLoading && !isError){
      ticketArea = 
      <div className={style.tickets}>
        { tickets[currentPage - 1].map((ticket,index) => (
          <Ticket key={index} coreData={ticket.coreData} serviceData={ticket.serviceData}/>
        ))} 
      </div>
    }

    let pager = (
      <div className={style.page}>
        <div className={style.item}>
          <button 
            disabled={currentPage === 1 || isLoading} 
            onClick={() => this.pageHandler(buttonType.BACK)}>Back</button>
          </div>
        <div className={style.item}> 
          Page {currentPage} of {totalPage }
        </div>
        <div className={style.item}>
          <button 
            disabled={totalPage === currentPage - 1 || isLoading} 
            onClick={() => this.pageHandler(buttonType.NEXT)}>Next</button>
        </div>
    </div>
    )

    return (
      <>
        {ticketArea}
        {pager}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isError: state.isError,
    isFetching: state.isFetching,
    tickets: state.tickets,
    isLoading: state.isLoading,
    currentPage: state.currentPage,
    totalPage: state.totalPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitialFetch: () => dispatch(actions.initialFetch()),
    onReload: () => dispatch(actions.pageReload()),
    onNext: () => dispatch(actions.pageIncrement()),
    onBack: () => dispatch(actions.pageDecrement())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tickets);