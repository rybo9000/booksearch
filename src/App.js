import React from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import Results from './Results/Results.js';

class App extends React.Component {
  
  // Build Search Query String For Fetch API
  buildSearchQuery = () => {
    const modifiedSearch = (document.querySelector("#searchText").value).replace(/ /g, "+");
    return modifiedSearch;
  }
  
  onSearch = (e) => {
    e.preventDefault();
    alert("Search Started!");
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.buildSearchQuery()}`)
    .then (response => response.json())
    .then (response => console.log(response));
  }
  
  render() {
    return (
      <main className="App">
        <Header />
        <Search onSearch={this.onSearch}/>
        <Results />
      </main>
    )
  }

}

export default App;