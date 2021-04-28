import React, { Component } from 'react'
import Header from '../header';
import Sidebar from '../sidebar';
import DashRenderer from '../dash-renderer';

class Dashboard extends Component {
  render() {
    return (
      <div>
          <h4>Dash Home</h4>
          <Header />
          <DashRenderer />
          <Sidebar />
      </div>
    )
  }
}

export default Dashboard;
