
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import {addPlant} from '../actions/plantActions'

import PropTypes  from 'prop-types' ;


class PlantModal extends Component {
    state = {
        modal: false, 
        name: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit=(e)=>{
        e.preventDefault();
        const newPlant ={
           
            name: this.state.name

        }

        this.props.addPlant(newPlant);

        this.toggle();
    };

    render()
    {
        return(
            <div>
                <Button color="dark" 
                style={{marginBottom:'2rm'}}
                onClick={this.toggle}>
                    Add Plant

                    
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add new plant
                    </ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="plant">
                                    Plant 
                                </Label>

                                <Input type="text" name="name" id="plant" placeholder="Add plant item" onChange={this.onChange}>
                                </Input>

                                <Button color="dark" style={{marginTop:'2rem'}} block>
                                    add plant
                                </Button>
                            </FormGroup>

                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }

}


PlantModal.propTypes = {
    addPlant: PropTypes.func.isRequired  ,    
    plant: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
plant: state.plant

});

export default connect(mapStateToProps, { addPlant})(PlantModal);


