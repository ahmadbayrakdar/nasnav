import './App.css';

import TopNav from './components/TopNav';
import SearchBarContainer from './components/SearchBarContainer';
import Varities from './components/Varities';
import Footer from './components/Footer';
import Cart from './components/Cart';

import ProductContent from './components/ProductContent';
import { useEffect, useState } from 'react';

import $ from 'jquery';

function App() {

  const [cookieId, setCookieId] = useState(0);
  const [cookieIdAr, setCookieIdAr] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let initialTotal = 0;
    if(getCookie("cookie id array")){
      getCookie("cookie id array").split(",").forEach(element => {
        initialTotal = initialTotal + parseInt(getCookie("productPrice" + element)) * parseInt(getCookie("productQuantity" + element));
      })
      setTotalPrice(initialTotal);
    }
  }, [itemsInCart])

  useEffect(() => {
    if(getCookie("cookie id array")){
      setItemsInCart(getCookie("cookie id array").split(",").length);
    }
  })  

  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  const deleteCookie = (cname) => {
    document.cookie = cname + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const displayCart = () => {
    $('.cartContainer').removeClass('disabled')
  }
  const closeCart = () => {
    $('.cartContainer').addClass('disabled')
  }

  useEffect(() => {

    if((getCookie("cookie id array"))){
      setCookieIdAr(parseInt(getCookie("cookie id array")));
      $('.cartContainer .myCart .emptyCart').hide();
      $('.cartContainer .myCart .fullCart').show();
    }else{
      $('.cartContainer .myCart .fullCart').hide();
      $('.cartContainer .myCart .emptyCart').show();
    }

    if(getCookie("cookie id")){
      setCookieId(parseInt(getCookie("cookie id")));
    }

    $('.searchBarParent .searchBarContainer .searchBarActions .searchBarActionItem .cartIcon .cartItemsCount').text(cookieId);
    
  }, [])

  function hideShowCartContent () {
    if(getCookie("cookie id array")){
      $('.cartContainer .myCart .emptyCart').hide();
      $('.cartContainer .myCart .fullCart').show();
    }else{
      $('.cartContainer .myCart .fullCart').hide();
      $('.cartContainer .myCart .emptyCart').show();
    }
  }

  const addToCart = () => {
    var newCookieId = cookieId + 1
    setCookieId(newCookieId);
    document.cookie = "cookie id =" + newCookieId;

    var newIdArray = [];
    if(getCookie("cookie id array")){
      newIdArray = getCookie("cookie id array").split(",");
    }
    newIdArray.push(newCookieId);
    setCookieIdAr(newIdArray);
    document.cookie = "cookie id array=" + newIdArray;

    var productNameCookie = "productName" + newCookieId,
        productImageCookie = "productImage" + newCookieId,
        productSizeCookie = "productSize" + newCookieId,
        productQuantityCookie = "productQuantity" + newCookieId,
        productColorCookie = "productColor" + newCookieId,
        productPriceCookie = "productPrice" + newCookieId;

    // set product name
    var productName = $('.ProductTopSection .ProductInfo h3.productName').text()
    setCookie(productNameCookie, productName, 7);

    // set product image
    var productImage = $('.ProductTopSection .productImages .mainImageContainer .mainImage').attr('src')
    setCookie(productImageCookie, productImage, 7);

    // set product size
    var productSize = $('.ProductTopSection .ProductInfo .sizeContainer .sizesRow .sizeElement.active').text()
    setCookie(productSizeCookie, productSize, 7);

    // set product quantity
    var productQuantity = $('.ProductTopSection .ProductInfo .quantityContainer .addRemoveProduct .quantityNumber').text()
    setCookie(productQuantityCookie, productQuantity, 7);

    // set product color
    var productColor = $('.ProductTopSection .ProductInfo .colorContainer .colorsRow .colorElement.active').attr('name')
    setCookie(productColorCookie, productColor, 7);

    // set product price
    var productPrice = $('.ProductTopSection .ProductInfo .priceContainer .mainPrice').text() + " " 
    + $('.ProductTopSection .ProductInfo .priceContainer .mainCurrency').text()
    setCookie(productPriceCookie, productPrice, 7);

    hideShowCartContent();
  }

  return (
    <div className='appContainer'>
      <TopNav />
      <SearchBarContainer cartItems = {itemsInCart} displayCartFunction = {() => displayCart()}/>
      <Varities />
      <ProductContent addToCartFunction = {() => addToCart()}/>
      <Footer />
      <Cart
        closeCartFunction = {() => closeCart()}
        cartItems = {cookieId}
        setCookiesFunction = {(cname, cvalue, exdays) => setCookie(cname, cvalue, exdays)}
        getCookiesFunction = {(cname) => getCookie(cname)}
        deleteCookiesFunction = {(cname) => deleteCookie(cname)}
        setItemsInCartFunction = {() => setItemsInCart()}
        total = {totalPrice}
        setIdArrayInParent = {() => setCookieIdAr()}
      />
    </div>
  );
}

export default App;
