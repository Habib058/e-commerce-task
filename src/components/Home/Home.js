import React from 'react';
import products from '../../fakedata/data';
import Checkout from '../Checkout/Checkout';
import Product from '../Product/Product';
import SearchBox from '../SearchBox/SearchBox';
import Subtotal from '../Subtotal/Subtotal';
import './Home.css'

const Home = () => {
    return (
        <div className="containerPart">
            <div className="leftSide">
                <SearchBox/>
                <div className="row card-deck">
                    {
                        products.map(product=><Product key={product.key} product={product}></Product>)
                    }
                </div>
            </div>
            <div className="rightSide shadow-lg card">
                <Checkout/>
                <Subtotal className="mt-5"/>
            </div>
        </div>
    );
};

export default Home;