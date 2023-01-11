import '../styles/TopNav.scss';

function TopNav() {
    return(
        <div className="topNavBodyContainer">
            <div className="topNavBody">
                <img src={process.env.PUBLIC_URL + "/images/Group 770.svg"}/>
                <img src={process.env.PUBLIC_URL + "/images/Group 769.svg"}/>
                <div className="topNavParagraph">
                    <img src={process.env.PUBLIC_URL + "/images/Path 347.svg"}/>
                    <div>Valentine’s Day Offers! Buy Two Get One Free <a href="#">Shop Now</a> </div>
                    <img src={process.env.PUBLIC_URL + "/images/Path 346.svg"}/>
                </div>
                <div className="topNavContactInfo">
                    <div className="contactInfoItem">
                        <img src={process.env.PUBLIC_URL + "/images/Group 756.svg"}/>
                        <div className="contactInfoTitle">Contact Us</div> 
                    </div>
                    <div className="contactInfoItem">
                        <img src={process.env.PUBLIC_URL + "/images/Group 758.svg"}/>
                        <div className="contactInfoTitle">Track Order</div> 
                    </div>
                    <div className="contactInfoItem">
                        <img src={process.env.PUBLIC_URL + "/images/Group 753.svg"}/>
                        <div className="contactInfoTitle">Find A Store</div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;