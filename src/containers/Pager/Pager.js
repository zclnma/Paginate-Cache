import React, { Component } from 'react'
import {connect} from 'react-redux';

import style from './Pager.module.scss';
import * as actions from '../../store/actions/index';

class Pager extends Component {

    pageHandler = (type) => {
        if(type === 'back'){
            this.props.onBack()
        }
        if(type === 'next'){
            this.props.onNext()
        }
    }
  render() {
    return (
        
    <div className={style.container}>
        <div className={style.item}><button disabled={this.props.currentPage === 1} onClick={() => this.pageHandler('back')}>Back</button></div>
        <div className={style.item}> Page {this.props.currentPage} of {this.props.totalPage}</div>
        <div className={style.item}><button disabled={this.props.totalPage === this.props.currentPage}onClick={() => this.pageHandler('next')}>Next</button></div>
     </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        currentPage: state.pager.currentPage,
        totalPage: state.pager.totalPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNext: () => dispatch(actions.pageIncrement()),
        onBack: () => dispatch(actions.pageDecrement())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pager);