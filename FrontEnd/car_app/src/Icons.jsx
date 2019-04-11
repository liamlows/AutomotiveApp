import React from 'react';
import IconModal from './IconModal.jsx';
import {Card} from 'react-bootstrap';

export default class Icons extends React.Component {
  state = {
    showModal: false,
    name: 'name',
    des: 'des'
  }

  renderIcons(obj) {
    return (
      <Card style={{margin: '2em 2em'}}>
        <Card.Header>{obj.title}</Card.Header>
        <Card.Body>
          <div className="icons">
            {
              obj.imgs.map(img => {
                return(<div> 
                  <img src={img[0]} alt="pic" onClick={(e) => this.onClickIcon(img[1])}></img>
                </div>);
              })
            }
            </div>
        </Card.Body>
      </Card>
    );
  }

  onClickIcon(n) {
    this.setState({showModal: true, name: 'name'})
  }

  onClose(){
    this.setState({
      showModal: false,
      name: '',
      des: ''
    })
  }

  render() {
    return (
      <div className="gallery">
        <h1>Dashboard Symbols</h1>
          {
            this.props.images.map(obj => this.renderIcons(obj))
          }
        {this.state.showModal && <IconModal name={this.state.name} onClose={c => this.onClose()}/>}
      </div>
    );
  }
}