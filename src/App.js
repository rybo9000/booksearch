import React from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import Results from './Results/Results.js';

class App extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      showResults: false,
      books: null,
      printType: "books",
      bookType: "ebooks"
    }

  }
  
  // Build Search Query String For Fetch API
  buildSearchQuery = () => {
    const modifiedSearch = (document.querySelector("#searchText").value).replace(/ /g, "+");
    return modifiedSearch;
  }
  
  onSearch = (e) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.buildSearchQuery()}`)
    .then (response => response.json())
    .then (response => {
      this.setState({
        showResults: true,
        books: response
      })
    });
  }
  
  render() {
    return (
      <main className="App">
        <Header />
        <Search onSearch={this.onSearch} printType={this.state.printType} bookType={this.state.bookType} />
        <Results showResults={this.state.showResults} books={this.state.books}/>
      </main>
    )
  }

}

export default App;