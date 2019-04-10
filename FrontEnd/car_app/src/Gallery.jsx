import React from 'react';
import Icon from './Icon.jsx';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {images: []};
    }

    render() {
        return 0;
    }
}

/* 
<head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
        </head>

    render() {
        return (
            <div>
                <h1>Dashboard Symbols</h1>
                <div className='theGallery'>
                    {
                        this.state.images.map((img, i) => <div>{img}</div>)
                    }
                </div>
            </div>
        );
    }
*/

//return (<Icon key={index} src={image.url} />);
export default Gallery;