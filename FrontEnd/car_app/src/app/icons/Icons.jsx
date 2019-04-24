import React from 'react';
import {Card, Modal, Button} from 'react-bootstrap';
import './Icons.css'

export default class Icons extends React.Component {
  state = {
    showModal: false,
    name: '',
    path: '',
    des: ''
  }

  renderIcons(obj) {
    return (
      <Card style={{margin: '2em 2em'}}>
        <Card.Header>
            <h5>{obj.title}</h5>
        </Card.Header>
        <Card.Body>
          <div className="icons row justify-content-around">
            {
              obj.imgs.map((img,i) => {
                return(
                <div key={i} style={{margin: '.5em 1em 1em .5em'}}> 
                  <img src={img[0]} alt="pic" onClick={(e) => this.onClickIcon(img[0], img[1], img[2])}></img>
                </div>);
              })
            }
            </div>
        </Card.Body>
      </Card>
    );
  }

  onClickIcon = (p, n, d) => {
    //alert("hello");
    this.setState(
      {
        showModal: true, 
        path: p, 
        name: n, 
        des: d
      });
  }

  onClose(){
    this.setState({
      showModal: false,
      name: '',
      des: '',
      path: ''
    });
  }

  render() {
    return (
      <div className="" style={{fontFamily:'Arial',marginTop:'3em'}}>
        {/* <h1>Dashboard Symbols</h1> */}
          {
            this.props.images.map(obj => this.renderIcons(obj))
          }
        <Modal show={this.state.showModal} onHide={this.onClose}>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {this.state.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={this.state.path} alt="pic" style={{float: 'left', margin: '0 2em 0 0'}}></img>
                <p>{this.state.des}</p>
                <div style={{clear: 'left'}}></div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={e => this.onClose()}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
}