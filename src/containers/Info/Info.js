import React, { Component } from 'react'

import style from './Info.module.css';

import InfoCard from 'components/InfoCard/InfoCard';

const coreData = {
    id: "1",
    number: "INCXXX",
    sta: "New",
    shortDescription: "This is a Description",
    application:"Application",
    assigness: "Assigness"
  }
  
  const moreData = {
    assignedTo: '123',
    shortDescription: 'another description',
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
            <span>Back</span>
            <span>page 1 of 414</span>
            <span>Next</span>
        </div>
    </div>

    return (
      <div className={style.container}>
            {infoArea}
      </div>
    )
  }
}

export default Info;