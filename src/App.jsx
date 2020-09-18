// css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import Menu from './components/template/Menu';

//Routas
import { BrowserRouter } from 'react-router-dom'
import Router from './config/Routes';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu></Menu>
        <Router />
      </div>
      <div>
        <MessengerCustomerChat
          pageId={process.env.REACT_APP_PAGE_ID}
          appId={process.env.REACT_APP_APP_ID}
          language='pt_PT'
        /></div>
    </BrowserRouter>

  );
}

export default App;
