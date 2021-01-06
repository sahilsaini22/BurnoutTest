import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TestSpace from './components/TestSpace';
import Quest from './components/Quest';
import Prog from './components/Prog';
import store from './store';
import {Provider} from 'react-redux';



class App extends Component {
  render(){
    return (
      <Provider store={store}>

      <div className="App">
        <AppNavbar>

        </AppNavbar>


          <Prog/>
          <Quest/>
          <TestSpace/>

        


        
      </div>

      </Provider>

    );

  }

}

export default App;
