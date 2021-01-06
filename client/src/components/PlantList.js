import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getPlants, deletePlant} from '../actions/plantActions';
import PropTypes  from 'prop-types' ;



class PlantList extends Component{

    
    componentDidMount(){
        this.props.getPlants();
    }

    onDeleteClick=(_id)=>{
        this.props.deletePlant(_id);
    }

    openPlants=(e)=>{        
        var x = document.getElementById("home");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }

        x = document.getElementById("plants");        
            x.style.display = "block";
        
    };

    openHome=(e)=>{        
        var x = document.getElementById("plants");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }

        x = document.getElementById("home");        
            x.style.display = "block";
        
    };



    render(){
        const {plants}= this.props.plant;
        return(
            


            <Container>
                <div id="home">
                 <Container>
                <h1>Mental Power Test</h1>
                This is a mental power test. We will write some words about the test here for the user 
                 <br/>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                 <br/>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                
                <Button onClick={this.openPlants}>
                Take the Test
                </Button>
                </Container>
                </div>


                <div id="plants" style={{display:"none"}}>

                <ListGroup>
                    <TransitionGroup className='plant-group'>
                        {plants.map(({_id, name})=> 
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem> 
                                    <Button 
                                    className="remove-btn"  color="danger" size="sm" 
                                        onClick={this.onDeleteClick.bind(this, _id)}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </ListGroup>
                <Button onClick={this.openHome}>
                Cancel Test
                </Button>
                </div>
            </Container>
        );
    }
}

PlantList.propTypes = {
    getPlants: PropTypes.func.isRequired  ,
    deletePlant:PropTypes.func.isRequired, 
    plant: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
plant: state.plant

});

export default connect(mapStateToProps, { getPlants, deletePlant})(PlantList);

