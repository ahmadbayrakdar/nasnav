import './App.css';

import TopNav from './components/TopNav';
import SearchBarContainer from './components/SearchBarContainer';
import Varities from './components/Varities';
import Footer from './components/Footer';
import Cart from './components/Cart';

import ProductContent from './components/ProductContent';
import { useEffect } from 'react';

import $ from 'jquery';

function App() {

  useEffect(()=>{
    $('.displayCartButton').click(()=>{
      $('.cartContainer').removeClass('disabled')
    })
    $('.closeCartButton').click(()=>{
      $('.cartContainer').addClass('disabled')
    })
    function setCookie(cname, cvalue, exdays){
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    var cookieId = 0;

    if(getCookie("cookie id").length){
      // console.log("exists");
      cookieId = parseInt(getCookie("cookie id"));
      $('.cartContainer .myCart .emptyCart').hide();
    }else{
      $('.cartContainer .myCart .fullCart').hide();
    }
    document.cookie = "cookie id =" + cookieId;

    // console.log(getCookie("cookie id"))

    $('.searchBarParent .searchBarContainer .searchBarActions .searchBarActionItem .cartIcon .cartItemsCount').text(cookieId);
    // console.log(cookieId);

    // fill cart with products from cookies
    function fillCart() {
      let cartProducts = [];
      for(let i = 1; i <= cookieId; i++){
        cartProducts.push({
          name: getCookie("productName" + i),
          image: getCookie("productImage" + i),
          size: getCookie("productSize" + i),
          quantity: getCookie("productQuantity" + i),
          color: getCookie("productColor" + i),
          price: getCookie("productPrice" + i)
        })
      }
      console.log(cartProducts)
    }
    
    fillCart();

    function getCookie(cname) {
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

    $('.addToCartButton').click(()=>{
      cookieId = cookieId + 1 ;
      document.cookie = "cookie id =" + cookieId;
      $('.searchBarParent .searchBarContainer .searchBarActions .searchBarActionItem .cartIcon .cartItemsCount').text(cookieId);
      // console.log(cookieId);
      // set product id
      // console.log(productId);

      var productNameCookie = "productName" + cookieId,
          productImageCookie = "productImage" + cookieId,
          productSizeCookie = "productSize" + cookieId,
          productQuantityCookie = "productQuantity" + cookieId,
          productColorCookie = "productColor" + cookieId,
          productPriceCookie = "productPrice" + cookieId;

      // set product id
      // var productId = cookieId;
      console.log(cookieId);
      // setCookie(productIdCookie, productId, 7);

      // set product name
      var productName = $('.ProductTopSection .ProductInfo h3.productName').text()
      console.log(productName);
      setCookie(productNameCookie, productName, 7);

      // set product image
      var productImage = $('.ProductTopSection .productImages .mainImageContainer .mainImage').attr('src')
      console.log(productImage);
      setCookie(productImageCookie, productImage, 7);

      // set product size
      var productSize = $('.ProductTopSection .ProductInfo .sizeContainer .sizesRow .sizeElement.active').text()
      console.log(productSize);
      setCookie(productSizeCookie, productSize, 7);

      // set product quantity
      var productQuantity = $('.ProductTopSection .ProductInfo .quantityContainer .addRemoveProduct .quantityNumber').text()
      console.log(productQuantity);
      setCookie(productQuantityCookie, productQuantity, 7);

      // set product color
      var productColor = $('.ProductTopSection .ProductInfo .colorContainer .colorsRow .colorElement.active').attr('name')
      console.log(productColor);
      setCookie(productColorCookie, productColor, 7);

      // set product price
      var productPrice = $('.ProductTopSection .ProductInfo .priceContainer .mainPrice').text() + " " 
      + $('.ProductTopSection .ProductInfo .priceContainer .mainCurrency').text()
      console.log(productPrice);
      setCookie(productPriceCookie, productPrice, 7);
    })
  }, [])

  return (
    <div className='appContainer'>
      <TopNav />
      <SearchBarContainer />
      <Varities />
      <ProductContent />
      <Footer />
      <Cart />
    </div>
  );
}

export default App;
