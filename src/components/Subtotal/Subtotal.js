import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'



const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            <b>Subtotal</b> ({basket.length} items):<strong style={{paddingLeft:'200px'}}>BDT {value}</strong>
                        </p>
                        <p>
                            <b>Tax (0%)</b> ({basket.length} items) :<strong style={{paddingLeft:'200px'}}>BDT  0</strong>
                        </p>
                        <p>
                            <b>Total</b> ({basket.length} items):<strong style={{paddingLeft:'200px'}}>BDT {value}</strong>
                        </p>
                        <button>Pay</button>
                        
                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}

            />
        </div>
    );
};

export default Subtotal;