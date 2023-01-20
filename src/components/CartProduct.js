import { useState, useEffect } from "react";

function CartProduct(props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');

    // fill cart with products from cookies
    function fillCart() {
        var name = props.getCookies("productName" + props.itemIdInCart),
            image = props.getCookies("productImage" + props.itemIdInCart),
            size = props.getCookies("productSize" + props.itemIdInCart),
            quantity = props.getCookies("productQuantity" + props.itemIdInCart),
            color = props.getCookies("productColor" + props.itemIdInCart),
            price = props.getCookies("productPrice" + props.itemIdInCart);
            setName(name);
            setImage(image);
            setSize(size);
            setQuantity(quantity);
            setColor(color);
            setPrice(price);
    }

    function deleteCookieFunction() {
        props.deleteCookies("productName" + props.itemIdInCart, props.itemIdInCart);
        props.deleteCookies("productImage" + props.itemIdInCart, props.itemIdInCart);
        props.deleteCookies("productSize" + props.itemIdInCart, props.itemIdInCart);
        props.deleteCookies("productQuantity" + props.itemIdInCart, props.itemIdInCart);
        props.deleteCookies("productColor" + props.itemIdInCart, props.itemIdInCart);
        props.deleteCookies("productPrice" + props.itemIdInCart, props.itemIdInCart);
    }

    useEffect(() => {
        fillCart();
    }, [])

    return(
        <div className="cartProduct" id={"cartElement" + props.itemIdInCart}>
            <img src={image}/>
            <div className="cartProductInfo">
                <h5>{name}</h5>
                <p>Quantity: {quantity}</p>
                <div className="cartProductPrice">
                    <div>{price}</div>
                    <div className="cartProductCurrency">LE</div>
                </div>
                <button className="removeFromCartButton" onClick={deleteCookieFunction}>Remove</button>
            </div>
        </div>
    );
}

export default CartProduct;