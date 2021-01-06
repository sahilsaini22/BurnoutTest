import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem,} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getQuestions} from '../actions/questionActions';
import PropTypes  from 'prop-types' ;





class Quest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question
          };
   }
    
/*   
   componentWillReceiveProps(nextProps){   
    console.log("rrr") 
    this.setState({current : nextProps.question.current});    
    }

    componentDidReceiveProps(nextProps){   
        console.log("rec") 
        this.setState({current : nextProps.question.current});    
        }

    componentWillMount(){
        
      //  this.setState({current : this.props.question.current});    
  }

  componentDidMount(nextProps){   
    this.setState({current : nextProps.question.current});    
    }

*/
      
 

    render(){
        let {questions, current, total}= this.props.question;

        const quest = 
            current > total ?
            questions.filter(x => x.qqid === total)
            : questions.filter(x => x.qqid === current)
        

        return(
            


            <Container>
                

                <ListGroup>
                    <TransitionGroup className='plant-group'>
                    
                        {                                                                                                                
                            quest.map(({_id, qtext})=> 

                            <CSSTransition key={_id} timeout={0} classNames="fade" >  
                                
                                <ListGroupItem>                                     
                                    {qtext}
                                </ListGroupItem>
                            </CSSTransition>
                        )}
                    
                      
                    </TransitionGroup>
                </ListGroup>





                            
            </Container>
        );
    }
}

Quest.propTypes = {
    getQuestions: PropTypes.func.isRequired  ,          
    question: PropTypes.object.isRequired,
    
    

}

const mapStateToProps = (state) => ({
question: state.question,
answer: state.answer,
current: state.question.current


});

export default connect(mapStateToProps, { getQuestions})(Quest);

