import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import store from './store';
import {Provider} from 'react-redux';
import { Container,  Button } from 'reactstrap';



class Start extends Component {
  render(){
    return (
      <Provider store={store}>

      <div className="Start">
        <AppNavbar>

        </AppNavbar>


        <Container>
                
                 <Container>
                <h1>Mental Power Test</h1>
                This is a mental power test. We will write some words about the test here for the user 
                 <br/>
                
                <Button href={"http://localhost:3001/test"} style={{marginTop:"2rem"}} block >
                Take the Test
                </Button>
                
              </Container>
          </Container>

        


        
      </div>

      </Provider>

    );

  }

}

export default Start;
