import '../styles/Cart.scss';

function Cart() {
    return(
        <div className="cartContainer disabled">
            <div className="cartBackground">
                cartHere
            </div>
            <div className="myCart">
                <div className="myCartTitle">My Cart</div>
                <div className="cartSummary">Cart Summary</div>
                <div className="cartProduct">
                    <img src={require("../images/Blocked_Trefoil_Tee_Black_GR9740_21_model_2048x2048.jpg")}/>
                    <div className="cartProductInfo">
                        <h5>Lorem ipsum dolor sit amet, consecte adipiscing elit.</h5>
                        <p>Quantity: 1</p>
                        <div className="cartProductPrice">
                            <div>9.999</div>
                            <div className="cartProductCurrency">LE</div>
                        </div>
                        <button className="removeFromCartButton">Remove</button>
                    </div>
                </div>
                <div className="cartTotalPrice">Total: 19,999 LE</div>
                <div className="cartActions">
                    <button className="reviewCartButton">Review Cart</button>
                    <button className="completeCheckoutButton">Complete Checkout</button>
                </div>
            </div>
            <div className="closeCartButton">
                <img  src={process.env.PUBLIC_URL + "../../images/x.svg"} />
            </div>
        </div>
    );
}

export default Cart;