import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import store from './store';
import {Provider} from 'react-redux';
import { Container,  Button } from 'reactstrap';



class End extends Component {
  render(){
    return (
      <Provider store={store}>

      <div className="Start">
        <AppNavbar>

        </AppNavbar>


        <Container>
                
                 <Container>
                <h1>Thanks for taking the test!</h1>
                <br/>
                Here's your code: 
                XXXXXXXXXXXXXXXXXXXXXXXXXX
                <br/><br/>
                Kindly share the code with the doctor to get your report!
                 <br/>
                
                <Button href={"http://localhost:3001/"} style={{marginTop:"2rem"}} block >
                Go to Homepage
                </Button>
                
              </Container>
          </Container>

        


        
      </div>

      </Provider>

    );

  }

}

export default End;
