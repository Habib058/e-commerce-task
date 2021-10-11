import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Subtotal/StateProvider';
import './Product.css'

const Product = (props) => {
    const { img, name, key, price } = props.product;

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                key: key,
                name: name,
                img: img,
                price: price,
            },
        });
    }
    return (
        <div className='col-md-2 mb-3'>
            <div className='card shadow-lg border'>
                <img style={{ height: '200px' }} className='img-fluid' src={img} alt="" />
                <p>{name}</p>
                <button className='button' onClick={addToBasket}>Add to basket</button>
            </div>
        </div>
    );
};

export default Product;