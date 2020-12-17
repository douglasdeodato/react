import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = (props) => (
    <div classname={classes.pizzaImage}>
        <img src={PizzaImage}  classname={classes.PizzaImg}/>
    </div>
);

export default pizzaImage;