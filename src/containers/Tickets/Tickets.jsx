import React, { Component} from 'react'
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../service/axios/axiosTickets';
import Ticket from '../../components/Tickets/Ticket/Ticket';
import Spinner from '../../components/Tickets/Spinner/Spinner';
import Error from '../../components/Tickets/Error/Error';
import Pager from '../../components/Tickets/Pager/Pager';

import ErrorHandler from '../../components/Hoc/errorHandler';

import style from './Tickets.module.scss';

export class Tickets extends Component {

  //First time to reach the API endpoint
  componentDidMount = ()  => {
      this.props.onInitialFetch()
  }

  render() {

    const {isLoading, isFetching, isError, currentPage, totalPage, tickets, isAllLoaded} = this.props;
    
    let ticketArea = null;

    if (isLoading || isFetching) {
      // when loading data, show Spinner
      ticketArea = <Spinner />
    }

    
    else if (isError && (totalPage === 0 || (currentPage > totalPage))) {
      // when error occurs, show error page
      ticketArea = <Error clicked={() => this.props.onReload()}/>
    }
    else {
      // Other situations, show tickets
      ticketArea = 
      <>
        { tickets[currentPage - 1].map((ticket,index) => (
          <Ticket key={index} coreData={ticket.coreData} serviceData={ticket.serviceData}/>
        ))} 
      </>
    }

    return (
      <div className={style.container}>
        <div className={style.tickets}>
          {ticketArea}
        </div>
        <Pager 
          currentPage={currentPage} 
          totalPage={totalPage} 
          isLoading={isLoading} 
          isAllLoaded={isAllLoaded}
          backClicked={() => this.props.onBack()}
          nextClicked={() => this.props.onNext()}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isError: state.isError,
    isFetching: state.isFetching,
    isLoading: state.isLoading,
    isAllLoaded: state.isAllLoaded,
    tickets: state.tickets,
    currentPage: state.currentPage,
    totalPage: state.totalPage,
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

export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(Tickets, axios));