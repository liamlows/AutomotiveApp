import React from 'react';
import {Car} from '../models/car'
import { Button, Form, Modal, Card, Carousel, Image } from "react-bootstrap";


export const CarList = (props) => (
    <Carousel className = "carous">
        {
            props.cars.map((x,i) =>(
            
                <Carousel.Item key = {i}>
                    <div className = "logo">
                    <Image
                    className="d-block w-100 float-left"
                    src="http://www.car-brand-names.com/wp-content/uploads/2015/05/Mercedes-Benz-logo.png"
                    alt="First slide"
                    thumbnail
                    />
                    </div>
                    <h3>Make: {x.make}</h3>
                    <h3>Model: {x.model}</h3>
                    <h3>Year: {x.year}</h3>
                    <h3>Mileage: {x.mileage}</h3>
                    <Button>Edit Car</Button>
                </Carousel.Item>
            
            ))
        }
    </Carousel>
);

export default CarList