import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Icon extends React.Component {
  renderIcon(ic) {
    let str = "";
    if(ic[0] !== 0 && ic[0] !== 4 && ic[0] !== 26 && ic[0] !== 35){
      return (
        <div className={ic[0]} onClick={(e) => this.onClick(ic[0])}>
          <img src={ic[1]} alt="pic"></img>
        </div>
      );
    }

    else if(ic[0] === 0) {
      str = "Warning Symbols";
    }
    
    else if(ic[0] === 4) {
      str = "Safety Symbols";
    }

    else if(ic[0] === 26) {
      str = "Common Symbols";
    }

    else{
      str = "Advanced Feature Symbols";
    }

    return (
      <>
      <h3 className="headers">{str}</h3>
      <div className={ic[0]} onClick={(e) => this.onClick(ic[0])}>
        <img src={ic[1]} alt="pic"></img>
      </div>
      </>
    );
  }

  onClick(ind) {
    return(
      //alert(this.props.images[ind][2])
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.images[ind][2]}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
          </Modal.Footer>
      </Modal.Dialog>
    );
  }

  render() {
    return (
      <div className="gallery">
        <h1>Dashboard Symbols</h1>
        <div className="icons">
          {
            this.props.images.map(img => this.renderIcon(img))
          }
        </div>
      </div>
    );
  }
}