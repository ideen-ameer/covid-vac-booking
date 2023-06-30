import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
      setSearchQuery(searchQuery);
if(searchQuery === centrename){

       console.log(centrename);
}

  };

  return (
    <div>
      <h2>Search Vaccination Centre</h2>
      <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {/* Display search results */}
    </div>
  );
};

export default Search;
