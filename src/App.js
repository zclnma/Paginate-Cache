import React, { Component} from 'react';

import Tickets from 'containers/Tickets/Tickets';
import Pager from 'containers/Pager/Pager';

import style from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <Tickets />
        <Pager />
      </div>
    );
  }
}

export default App;
