import $ from 'jquery';
import { useEffect, useState } from 'react';
import '../styles/Cart.scss';

import CartProduct from './CartProduct.js'

function Cart() {

    return(
        <div className="cartContainer disabled">
            <div className="cartBackground">
                cartHere
            </div>
            <div className="myCart">
                <div className="myCartTitle">My Cart</div>
                <div className="emptyCart">
                    <img src={process.env.PUBLIC_URL + "../../images/shopping-cart-question.svg"} />
                    <h4>Your Cart Is Empty</h4>
                </div>
                <div className="fullCart">
                    <div className="cartSummary">Cart Summary</div>                    

                    {/* {this.props.dataFromParent} */}
                    {/* <CartProduct /> */}
                    
                    <Cart />

                    <div className="cartTotalPrice">Total: 19,999 LE</div>
                    <div className="cartActions">
                        <button className="reviewCartButton">Review Cart</button>
                        <button className="completeCheckoutButton">Complete Checkout</button>
                    </div>
                </div>
            </div>
            <div className="closeCartButton">
                <img  src={process.env.PUBLIC_URL + "../../images/x.svg"} />
            </div>
        </div>
    );
}

export default Cart;