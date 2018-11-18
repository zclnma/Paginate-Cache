import React, { Component } from 'react'
import {connect} from 'react-redux';

import style from './Info.module.scss';

import { test } from 'store/actions/action';
import InfoCard from 'components/InfoCard/InfoCard';

const coreData = {
    id: "1",
    number: "INCXXX",
    sta: "New",
    shortDescription: "This is a Description",
    application:"Application",
    assigness: "Assigness",
    moreData: {
        assignedTo: '123',
        shortDescription: 'another description',
    }
  }
  
class Info extends Component {
  render() {

    const infoArea = 
    <div className={style.infoArea}>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <InfoCard coreData={coreData}/>
        <div className={style.pageControl}>
           <button>Back</button>
            page {this.props.counter} of 414
            <button onClick={this.props.onTest}>Next</button>
        </div>
    </div>

    return (
      <div className={style.container}>
            {infoArea}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTest: () => dispatch(test())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info);