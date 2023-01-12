import '../styles/ProductContent.scss';
import starOutline from '../images/starOutline.svg';
import starFilled from '../images/starFilled.svg';

function ProductContent() {
    return(
        <div>
            <div className="productPathContainer">
                <div className="productPath">
                    <a href="#">Men</a>
                    <span> / </span>
                    <a href="#">Clothing</a>
                    <span> / </span>
                    <a href="#">Tops</a>
                    <span> / </span>
                    <a href="#">Adidas</a>
                    <span> / </span>
                    <span>Adidas Black T-Shirt</span>
                </div>
            </div>
            <div className="ProductTopSection">
                <div className="productImages">
                    <img className="mainImage" src={require("../images/Blocked_Trefoil_Tee_Black_GR9740_21_model_2048x2048.jpg")} />
                    <div className="bottomImageCarousel">
                        <img className="carouselArrow" src={process.env.PUBLIC_URL + "/images/Path 347.svg"} />
                        <img className="bottomImage" src={require("../images/Blocked_Trefoil_Tee_Black_GR9740_21_model_2048x2048.jpg")} />
                        <img className="bottomImage" src={require("../images/Blocked_Trefoil_Tee_Black_GR9740_21_model_2048x2048.jpg")} />
                        <img className="bottomImage" src={require("../images/Blocked_Trefoil_Tee_Black_GR9740_21_model_2048x2048.jpg")} />
                        <img className="bottomImage" src={require("../images/Blocked_Trefoil_Tee_Black_GR9740_21_model_2048x2048.jpg")} />
                        <img className="carouselArrow" src={process.env.PUBLIC_URL + "/images/Path 346.svg"} />
                    </div>
                </div>
                <div className="ProductInfo">
                    <img src={process.env.PUBLIC_URL + "/images/Group 346.svg"} />
                    <h3>Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
                    <div className="subTitle">Men</div>
                    <div className="ratingStarsContainer">
                        <div className="ratingStars">
                            <img src={starFilled}/>
                            <img src={starFilled}/>
                            <img src={starFilled}/>
                            <img src={starFilled}/>
                            <img src={starOutline}/>
                        </div>
                        <div className="ratingValue">4.9 of 5</div>
                        <div className="ratingNumber">22 Rates</div>
                    </div>
                    <div className="priceContainer">
                        <div className="mainPrice">9,999</div>
                        <div className="mainCurrency">LE</div>
                        <div className="subPrice">
                            9,999 LE
                        </div>
                        <div className="offPercentage">30% off</div>
                    </div>
                    <div className="sizeContainer">
                        <h3>Size</h3>
                        <div className="sizesRow">
                            <div className="sizeElement">Small</div>
                            <div className="sizeElement">Medium</div>
                            <div className="sizeElement active">Large</div>
                            <div className="sizeElement">X Large</div>
                            <div className="sizeElement">XX Large</div>
                        </div>
                    </div>
                    <div className="colorContainer">
                        <h3>color</h3>
                        <div className="colorsRow">
                            <div className="colorElement active">
                                <img src={require("../images/Group 354@2x.png")} />
                            </div>
                            <div className="colorElement">
                                <img src={require("../images/Group 356@2x.png")} />
                            </div>
                        </div>
                    </div>
                    <div className="quantityContainer">
                        <h3>Quantity</h3>
                        <div className="addRemoveProduct">
                            <div className="removeProduct">
                                <img src={process.env.PUBLIC_URL + "/images/minus.svg"} />
                            </div>
                            <div className="quantityNumber">1</div>
                            <div className="addProduct">
                                <img src={process.env.PUBLIC_URL + "/images/plus.svg"} />
                            </div>
                        </div>
                        <div className="productActionsContainer">
                            <button className="addToCartButton">Add To Cart</button>
                            <button className="pickupFromStoreButton">Pickup From Store</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relatedProductsContainer">
                related products area
            </div>
        </div>
    );
}

export default ProductContent;