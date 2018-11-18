import React, { Component} from 'react'
import {connect} from 'react-redux';

import style from './Tickets.module.scss';

import { initialFetch } from 'store/actions/tickets';
import Ticket from 'components/Ticket/Ticket';
  
class Tickets extends Component {

  componentDidMount = () => {
      this.props.onInitialFetch()
  }

  render() {

    let TicketArea = <div>Loading...</div>
    if (!this.props.loading){
      TicketArea = 
      <div className={style.TicketArea}>
        { this.props.tickets.test.map((ticket,index) => (
          <Ticket key={index} coreData={ticket.coreData} />
        ))} 
      </div>
    }
    return (
      <>
        {TicketArea}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.tickets.counter,
    tickets: state.tickets.tickets,
    loading: state.tickets.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTest: () => dispatch(test()),
    onInitialFetch: () => dispatch(initialFetch())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tickets);