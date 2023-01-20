import '../styles/SearchBarContainer.scss';

function SearchBarContainer(props){
    return(
        <div className="searchBarParent">
            <div className="searchBarContainer">
                {/* <img src={process.env.PUBLIC_URL + "/images/Path 774.svg"} /> */}
                <div className="searchBar">
                    <input type="search" />
                </div>
                <img src={process.env.PUBLIC_URL + "/images/Group 346.svg"} />
                <div className="searchBarActions">
                    <div className="searchBarActionItem displayCartButton" onClick = {() => props.displayCartFunction()}>
                        <div className="cartIcon">
                            <img src={process.env.PUBLIC_URL + "/images/Path 772.svg"}/>
                            <div className="cartItemsCount">{props.cartItems}</div>
                        </div>
                        <div className="contactInfoTitle">Cart</div> 
                    </div>
                    <div className="searchBarActionItem">
                        <img src={process.env.PUBLIC_URL + "/images/Path 771.svg"}/>
                        <div className="contactInfoTitle">Whishlist</div> 
                    </div>
                    <div className="searchBarActionItem">
                        <img src={process.env.PUBLIC_URL + "/images/Path 773.svg"}/>
                        <div className="contactInfoTitle">Login</div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBarContainer;