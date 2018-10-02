var Search = () => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text"/>
    <button className="btn hidden-sm-down" onClick={Search.results}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// Search.searchResults = function(searchEntry) {
//   console.log(searchEntry);
// };

Search.results = function() {
  //document.getElementByClassName("btn hidden-sm-down").onclick = function() {
  console.log($('.form-control').val());
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


//$('.form-control').val()