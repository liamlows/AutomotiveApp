import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export class IconModal extends React.Component {

    onClick(){
        this.props.onClose();
    }
    
    render(){
        return(
            <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
        );
    }
}

export default IconModal;


/*
<Modal {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter" 
            centered
            >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                    <Modal.Title>name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>test</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={e => this.onClick()}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
*/