import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export class IconModal extends React.Component {

    onClick(){
        this.props.onClose();
    }
    
    render(){
        return(
            <div>
                <Modal>
            <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>test</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={e => this.onSubmit()}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </Modal>
            </div>
        );
        }
}

export default IconModal;