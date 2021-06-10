import React from 'react';
import './App.css';
import Header from './component/Header';
import {Switch , Route} from 'react-router-dom';
import   Home from "./pages/Home";
import  Rooms  from "./pages/Rooms";
function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/rooms' component={Rooms}/>
    </Switch>
    
   </>
  );
}

export default App;
