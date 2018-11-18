import React, { Component} from 'react';

import Tickets from 'containers/Tickets/Tickets';

import style from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <Tickets />
      </div>
    );
  }
}

export default App;
