import React from 'react';
import './CheckoutProduct.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useStateValue } from '../Subtotal/StateProvider';

const CheckoutProduct = ({ img, name, price, key }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:key,
        })
    }
    return (
        <tr>
            <td><img src={img} style={{ height: '50px' }} alt="" /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td onClick={removeFromBasket}><DeleteForeverIcon style={{color:'red'}}></DeleteForeverIcon></td>
        </tr>
    );
};

export default CheckoutProduct;