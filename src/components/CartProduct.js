function CartProduct() {
    return(
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
    );
}

export default CartProduct;