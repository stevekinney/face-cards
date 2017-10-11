import React, { Component } from 'react';
import { fetchUsers } from './actions';

import CardList from './components/CardList';

let users = [];

class App extends Component {
  componentWillMount() {
     users = fetchUsers();
  }

  render() {
    return (
      <div className="App">
        <CardList users={users}/>
      </div>
    );
  }
}

export default App;
