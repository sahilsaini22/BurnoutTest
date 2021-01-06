import React, { Component } from 'react';
import { Container,  Button } from 'reactstrap';
import { connect } from 'react-redux';





class HomeData extends Component{
    state = {
        home: true
    };


    toggle = () => {
        this.setState({
            home: !this.state.home
        });
    };

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
        var x = document.getElementById("home");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    };


    render(){
        
        return(
        <div id="home">
            <Container>
                <h1>Mental Power Test</h1>
            This is a mental power test. We will write some words about the test here for the user 
            <br/>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            <br/>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                
            <Button onClick={this.onChange}>
                Take the Test
            </Button>
            </Container>
        </div>
            
            
        );
    }
}



const mapStateToProps = (state) => ({


});

export default connect(mapStateToProps, { })(HomeData);

