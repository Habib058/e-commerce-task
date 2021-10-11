import React from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../Subtotal/StateProvider';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)
    return (
        <div>
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">Product</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Price</th>
                            <th className="text-secondary" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    key={item.key}
                                    name={item.name}
                                    img={item.img}
                                    price={item.price}
                                />
                            ))
                        }
                    </tbody>
                </table>


            </div>

        </div>
    );
};

export default Checkout;