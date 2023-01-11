import '../styles/Footer.scss';

function Footer() {
    return(
        <div className="footerContainer">
            <div className="footerTopSection">
                <div className="footerTopLeft">
                    <img className="footerLogo" src={process.env.PUBLIC_URL + "/images/Group 1436.svg"}/>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia</p>
                    <p>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit</p>
                </div>
                <div className="footerTopRight">
                    <h3>Subscribe to our newsletter</h3>
                    <div className="emailFieldContainer">
                        <input className="emailField" type="email" placeholder="Enter Your Email" />
                        <div className="subscribeButton">
                            <div>Subscribe</div>
                            <img src={process.env.PUBLIC_URL + "/images/Group 1431.svg"} />    
                        </div>
                    </div>
                    <div className="footerLinks">
                        <div className="pageLinks">
                            <div>About Us</div>
                            <div>Contact Us</div>
                            <div>Track Order</div>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                            <div>Sell With Us</div>
                            <div>Shipping And Returns</div>
                        </div>
                        <div className="socialMediaLinks">
                            <div>
                                <img src={process.env.PUBLIC_URL + "/images/Group 1432.svg"} />
                                <div>/YESHTERY</div>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + "/images/Group 1433.svg"} />
                                <div>/YESHTERY</div>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + "/images/Group 1434.svg"} />
                                <div>/YESHTERY</div>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + "/images/Group 1435.svg"} />
                                <div>/YESHTERY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottomSection">
                <div className="footerBottomThird">© 2021 yeshtery, all rights reserved.</div>
                <div className="footerBottomThird">
                    <img src={process.env.PUBLIC_URL + "/images/Rectangle 586@2x.png"} />
                    <img src={process.env.PUBLIC_URL + "/images/Group 1437@2x.png"} />
                    <img src={process.env.PUBLIC_URL + "/images/Group 1438@2x.png"} />
                </div>
                <div className="footerBottomThird">
                    <div>Powered By</div>
                    <img className="poweredByImage" src={process.env.PUBLIC_URL + "/images/Group 1439.svg"} />
                </div>
            </div>
        </div>
    );
}

export default Footer;