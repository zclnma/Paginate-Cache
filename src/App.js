import React, { Component} from 'react';

import Tickets from 'containers/Tickets/Tickets.jsx';

import style from './App.css';

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
