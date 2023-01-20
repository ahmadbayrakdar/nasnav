import $ from 'jquery';
import { useEffect, useState } from 'react';
import '../styles/Cart.scss';

import CartProduct from './CartProduct.js'

function Cart(props) {

    const [idsArray, setIdsArray] = useState([]);
    const [deletedItemsArray, setDeletedItemsArray] = useState([]);

    useEffect(() => {
        let cookieIdsArray = [];
        let deletedItems = [];
        let deletedItemsString = props.getCookiesFunction("cartDeletedItems").split(',');

        deletedItemsString.forEach(element => {
            deletedItems.push(element);
        })
        
        setDeletedItemsArray(deletedItems);

        for(let i = 0; i < props.cartItems; i++){
            if(!deletedItemsArray.includes(i.toString())){
                cookieIdsArray.push(i);
            }
        }
        setIdsArray(cookieIdsArray);
        props.setIdArrayInParent(cookieIdsArray);
    }, [props.cartItems])

    function deleteThisItem(cid) {
        $("#cartElement"+cid).hide();
        let deletedItems = deletedItemsArray;
        let currentItems = props.getCookiesFunction("cookie id array").split(",");

        var index = currentItems.indexOf(cid.toString());
        if(index > -1){
            currentItems.splice(index, 1);
            props.setCookiesFunction("cookie id array", currentItems, 7);
            props.setItemsInCartFunction(currentItems.length);
        }

        cid = cid - 1;
        if(!deletedItems.includes(cid.toString())){
            deletedItems.push(cid.toString());
            setDeletedItemsArray(deletedItems);
            props.setCookiesFunction("cartDeletedItems", deletedItems, 7);
        }

        if(!props.getCookiesFunction("cookie id array")){
            $('.cartContainer .myCart .fullCart').hide();
            $('.cartContainer .myCart .emptyCart').show();
        }
    }

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
                    
                    {idsArray.map((item) => (
                        <CartProduct
                            key = {item}
                            itemIdInCart = {item + 1}
                            getCookies = {(cname) => props.getCookiesFunction(cname)}
                            deleteCookies = {(cname, cid) => {
                                props.deleteCookiesFunction(cname)
                                deleteThisItem(cid)
                            }}
                        />
                    ))}

                    <div className="cartTotalPrice">Total: {props.total} LE</div>
                    <div className="cartActions">
                        <button className="reviewCartButton">Review Cart</button>
                        <button className="completeCheckoutButton">Complete Checkout</button>
                    </div>
                </div>
            </div>
            <div className="closeCartButton" onClick = {() => props.closeCartFunction()}>
                <img  src={process.env.PUBLIC_URL + "../../images/x.svg"} />
            </div>
        </div>
    );
}

export default Cart;