import React, { Component, lazy, Suspence } from "react";
import {Switch, Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppBar from './components/UserMenu/AppBar'

const  Homepage= lazy(()=>import('./views/HomePage'))
const  Login= lazy(()=>import('./views/Login'))
const  Register= lazy(()=>import('./views/Register'))


class App extends Component {
  render() {
    return (
      <div className="App">

        <Suspence fallback={<p>Загружаем...</p>}>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
        </Suspence>
      </div>
    );
  }
}

export default App;
