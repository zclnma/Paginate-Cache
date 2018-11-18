import React, { Component} from 'react'
import {connect} from 'react-redux';

import style from './Tickets.module.scss';

import * as actions from '../../store/actions/index';
import Ticket from 'components/Ticket/Ticket';
import Spinner from 'components/Spinner/Spinner';
  
class Tickets extends Component {

  componentDidMount = () => {
      this.props.onInitialFetch()
  }

  pageHandler = (type) => {
    if(type === 'back'){
        this.props.onBack()
    }
    if(type === 'next'){
        this.props.onNext()
    }
  }

  render() {

    let ticketArea = <div className={style.ticketArea}><Spinner /></div>
    if (!this.props.loading){
      ticketArea = 
      <div className={style.ticketArea}>
        { this.props.tickets[this.props.currentPage].map((ticket,index) => (
          <Ticket key={index} coreData={ticket.coreData} serviceData={ticket.serviceData}/>
        ))} 
      </div>
    }

    let pager = (
      <div className={style.container}>
        <div className={style.item}>
          <button 
            disabled={this.props.currentPage === 0 || this.props.loading} 
            onClick={() => this.pageHandler('back')}>Back</button>
          </div>
        <div className={style.item}> 
          Page {this.props.currentPage + 1} of {this.props.totalPage + 1}
        </div>
        <div className={style.item}>
          <button 
            disabled={this.props.totalPage === this.props.currentPage|| this.props.loading} 
            onClick={() => this.pageHandler('next')}>Next</button>
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
    counter: state.counter,
    tickets: state.tickets,
    loading: state.loading,
    currentPage: state.currentPage,
    totalPage: state.totalPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitialFetch: () => dispatch(actions.initialFetch()),
    onNext: () => dispatch(actions.pageIncrement()),
    onBack: () => dispatch(actions.pageDecrement())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tickets);