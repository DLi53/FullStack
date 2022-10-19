import { useState } from "react";

const SearchBar = () => {
    const [search, setSearch] = useState('')

    return ( 
        <form className="search">
            <i id='search' className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className="searchInput" 
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search - Future Feature"/>

        </form>
     );
}
 
export default SearchBar;