import React, { Component } from 'react'

import style from './Info.module.scss';
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
            page 1 of 414
            <button>Next</button>
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