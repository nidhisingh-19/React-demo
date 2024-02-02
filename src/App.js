import React, { Component } from "react";
import RobotGrid from "./components/RobotGrid";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RobotView from "./components/RobotView";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RobotGrid />} />
          <Route path="/view" element={<RobotView />} />        
        </Routes>
        
      </Router>
    );
  }
}

export default App;
