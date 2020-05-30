import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

class ModalDelete extends Component {
    render() {
        return (
            <Modal isOpen={false}>
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    {"Delete " + this.props.todoItem + " ?"}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Do Something</Button>{' '}
                    <Button color="secondary">Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default connect()(ModalDelete)