import './styles/searchBar.css';
function SearchBar() {
  return (
    <div className="searchBar">
      <form className="searchBar-form">
        <input type="text" placeholder="Enter Location">
          <span>Icon</span>
        </input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
