import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Quiz from './components/Quiz'
import Form from './components/Form';
import Modal from './components/Modal'
import './assets/fonts/GothamMediumRegular.ttf'


function App() {
  return (
     <Router>
     <Switch>
       <Route exact path="/">
          <Home/>
       </Route>
       <Route exact path="/Quiz">
          <Quiz/>
       </Route>
       <Route exact path="/Form">
          <Form/>
       </Route>
       <Route exact path="/Modal">
          <Modal/>
       </Route>     
    </Switch>
    </Router>
  );
}

export default App;
