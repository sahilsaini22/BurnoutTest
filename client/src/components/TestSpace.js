import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getQuestions, next, score} from '../actions/questionActions';
import { getAnswers} from '../actions/answerActions';
import PropTypes  from 'prop-types' ;


class TestSpace extends Component{
  
    componentDidMount(){
        this.props.getQuestions();
        this.props.getAnswers();
    }


    onButClick=(value)=>{ 
        this.props.next(this.props.question.current);
        this.props.score(this.props.question.score + value);               
    }
    

    render(){
        let {current}= this.props.question;
        let {answers }= this.props.answer;

       

        const ans = 
           answers.filter(x => x.aqid === current)
        return(
            


            <Container>
                


               



                <div id="answers" style={{display:"Block"}}>

                <ListGroup>
                    <TransitionGroup className='plant-group'>
                    
                        {                                                                                    
                            ans.map(({_id,  aqid, aid, atext, value})=> 

                            <CSSTransition key={_id} timeout={0} classNames="fade">  
                                                        
                                <ListGroupItem color="white" > 
                                    <Button 
                                     color="white" size="sm" 
                                        onClick={this.onButClick.bind(this, value)}                                                                                
                                        style={{width:"100%" ,textAlign:"left"}}>
                                       
                                        {atext}
                                    </Button>
                                    
                                </ListGroupItem>
                            </CSSTransition>
                        )}
                    
                      
                    </TransitionGroup>
                </ListGroup>
                <Button style={{marginTop:"2rem"}} onClick={this.openHome} block>
                Cancel Test
                </Button >
                </div>
            </Container>
        );
    }
}

TestSpace.propTypes = {
    getQuestions: PropTypes.func.isRequired  ,   
    getAnswers: PropTypes.func.isRequired  ,   
    next: PropTypes.func.isRequired  ,   
    score: PropTypes.func.isRequired  , 
    question: PropTypes.object.isRequired,
    answer: PropTypes.object.isRequired,
    
    


}

const mapStateToProps = (state) => ({
question: state.question,
answer: state.answer,
current: state.current,
score: state.score

});

export default connect(mapStateToProps, { getQuestions, getAnswers, next, score})(TestSpace);

