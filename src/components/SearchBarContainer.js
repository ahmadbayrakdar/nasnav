import '../styles/SearchBarContainer.scss';

function SearchBarContainer(){
    return(
        <div className="searchBarContainer">
            <img src={process.env.PUBLIC_URL + "/images/Path 774.svg"} />
            <div>Search</div>
        </div>
    );
}

export default SearchBarContainer;