import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem,  Progress } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types' ;
import { getcounts} from '../actions/questionActions';





class Prog extends Component{
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question
          };
   }
    
  
    componentDidMount(){
        
     this.props.getcounts()
     //this.setState({current : nextProps.question.current}); 
     //   this.setState({total : nextProps.question.total});   
    }

    //componentDidReceiveProps(nextProps){           
     //   this.setState({current : nextProps.question.current}); 
      //  this.setState({total : nextProps.question.total});   
       // }
      
 

    render(){
        let { current, total }= this.props.question;

        current = 
            current > total ?
            total :
            current
            
        return(
            <Container >
                

                <ListGroup  style={{width:"100%" ,textAlign:"center", border:"hidden"}}> 
                    <TransitionGroup className='plant-group'>
                    
                            <CSSTransition key={current} timeout={0} classNames="fade" >                                  
                                  
                                <ListGroupItem style={{color:"dee7f1"}}>                                     
                                    <div className="text-center">{current} of {total}</div>
                                    <Progress value={current} max={total} />
                                </ListGroupItem> 
                
                            </CSSTransition>
                    
                      
                    </TransitionGroup>
                </ListGroup>





                            
            </Container>            


        );
    }
}

Prog.propTypes = {    
    question: PropTypes.object.isRequired,
  //  current: PropTypes.object.isRequired,
   // total: PropTypes.object.isRequired,
    getcounts: PropTypes.func.isRequired,
    
    

}

const mapStateToProps = (state) => ({
total: state.question.total,
current: state.question.current,
question: state.question


});

export default connect(mapStateToProps, {getcounts })(Prog);


