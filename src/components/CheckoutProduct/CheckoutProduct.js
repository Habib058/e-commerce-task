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
            <td onClick={removeFromBasket} className='delete'> <DeleteForeverIcon style={{color:'red'}}/></td>
        </tr>
    );
};

export default CheckoutProduct;