import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import SideBar from './pages/SideBar'
import SalesCall from './pages/SalesCall';
import AddCustomer from './pages/AddCustomer';
import ViewCustomer from './pages/ViewCustomer';
import DeActivate from './pages/DeActivate';

function App() {
  return (
    <Router>
  
      <Route exact path = '/' component = {Login} />

      <Route exat path = '/' component = {SideBar} />
        <Route  path = '/AddCustomer' component = {AddCustomer} />
        <Route  path = '/ViewCustomer' component = {ViewCustomer} />
        <Route  path = '/DeActivate' component = {DeActivate} />
     
      
    </Router>
  );
}

export default App;
