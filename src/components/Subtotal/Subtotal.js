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
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td><b>Subtotal</b> ({basket.length} items):</td>
                                    <td><strong>BDT {value}</strong></td>
                                </tr>
                                <tr>
                                    <td><b>Tax (0%)</b> :</td>
                                    <td><strong>BDT  0</strong></td>
                                </tr>
                                <tr>
                                    <td><b>Total : </b></td>
                                    <td><strong>BDT {value}</strong></td>
                                </tr>
                                <tr className="pay">
                                    <td><b>PAY</b></td>
                                    <td><b>BDT {value}</b></td>
                                </tr>

                                
                            </tbody>
                        </table>
                        

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