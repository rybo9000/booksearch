import React from 'react';
import './Results.css';
import Book from '../Book/Book';



class Results extends React.Component {
    
    render() {
        
        console.log(this.props);
        
        if(this.props.books !== null) {
        
            var books = (this.props.books.items).map((book) => {
                return <Book image={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} author={book.volumeInfo.authors[0]} description={book.volumeInfo.description}/>
            })

        }
        
        const showResults = this.props.showResults
        ? <div>{books}</div>
        : <div>Search for a book above</div>
        
        return (
            <section className="results">
                {showResults}
            </section>
        )
    }
}

export default Results;