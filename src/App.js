import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './components/pages/dashboard';
import ItemList from './components/pages/itemList';


export default class App extends Component{
  componentDidMount(){
    document.title = "jPAD"
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/items" element={<ItemList />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
