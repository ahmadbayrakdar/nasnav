import $ from "jquery";
import { useState, useEffect } from "react";
import '../styles/ProductContent.scss';

import starOutline from '../images/starOutline.svg';
import starFilled from '../images/starFilled.svg';

function ProductContent() {
    
    const [quantity, setQuantity] = useState(1);
    
    const [productData, SetProductData] = useState({
        sizes: [
            {id: 1, value: 'Small'},
            {id: 2, value: 'Medium'},
            {id: 3, value: 'Large'},
            {id: 4, value: 'X Large'},
            {id: 5, value: 'XX Large'}
        ],
        colors: [
            {id: 1, value: 'Black', imageUrl: require('../images/Group 354@2x.png') },
            {id: 2, value: 'Red', imageUrl: require('../images/Group 356@2x.png')}
        ],
    })

    // const addObjectToArray = obj => {
    //     SetProductData(current => ({
    //         ...current,
    //         sizes: [...current.sizes, obj]
    //     }));
    // };
    
    const toggleActiveClass = function(e) {
        // $(e.target).each((p)=>{
        //     console.log(p)
        // })
        $(e.target).siblings('.active').removeClass('active')
        $(e.target).addClass('active')
        // console.log(e.target)
    }

    useEffect(() => {
        $('.sizeElement:first-of-type').addClass('active')
        $('.colorElement:first-of-type').addClass('active')
        // addObjectToArray( {id: 6, value: 'XXX Large', isActive: false} )
    }, [])

    // const updateObjectInArray = () => {
    //     SetProductData(current => ({
    //         ...current,
    //         sizes: [
    //             current.map((obj) => {
    //                 if (obj.id === 2) {
    //                 return {...obj, isActive: true};
    //             }
        
    //         ]
    //         return obj;
    //       }),
    //     );
    //     })
    //   };

    const productSizes = productData.sizes.map((size) =>
        <div data-value={size.id} className="sizeElement" key={size.id} onClick={toggleActiveClass}>
            {size.value}
        </div>
    );
    
    const productColors = productData.colors.map((color) =>
        <div data-value={color.id} className="colorElement" key={color.id} onClick={toggleActiveClass}>
            {/* <img src={require(`../images/${color.imageUrl}`)} /> */}
                <img src={color.imageUrl} />
        </div>
    );
    
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
                    <div className="mainImageContainer">
                        <img className="mainImage" src={require("../images/Blocked_Trefoil_Tee_Black_GR9740_21_model_2048x2048.jpg")} />
                        <img className="fullDegreeImage" src={process.env.PUBLIC_URL + "images/Group 338.svg"} />
                    </div>
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
                            {productSizes}
                        </div>
                    </div>
                    <div className="colorContainer">
                        <h3>color</h3>
                        <div className="colorsRow">
                            {productColors}
                        </div>
                    </div>
                    <div className="quantityContainer">
                        <h3>Quantity</h3>
                        <div className="addRemoveProduct">
                            <div onClick={() => {
                                if (quantity > 1){
                                    setQuantity(quantity - 1)
                                }else{
                                    
                                }
                            }} className="removeProduct">
                                <img src={process.env.PUBLIC_URL + "/images/minus.svg"} />
                            </div>
                            <div className="quantityNumber">{quantity}</div>
                            <div onClick={() => setQuantity(quantity + 1)} className="addProduct">
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