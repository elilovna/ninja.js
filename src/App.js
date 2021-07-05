import React, { Component } from 'react';
import DataTable from './DataTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <DataTable rows={this.props.rows} locale="da" />
      </div>
    );
  }
}

export default App;
