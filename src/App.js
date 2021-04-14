import React, { Component, lazy, Suspense } from "react";
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import AppBar from './components/UserMenu/AppBar'

const  Homepage= lazy(()=>import('./views/HomePage'))
const  Login = lazy(()=>import('./views/Login'))
const  Register = lazy(()=>import('./views/Register'))


class App extends Component {
  render() {
    return (
      <div className="App">
         <AppBar/>
        <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route  path="/login" component={Login}/>
          <Route  path="/register" component={Register}/>
        </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
