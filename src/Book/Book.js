import React from 'react';
import './Book.css';

class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <div className="bookImage">
                    <img src={this.props.image} alt="" />
                </div>
                <div className="bookInfo">
                    <h1>{this.props.title}</h1>
                    <p>Author: {this.props.author}</p>
                    <p>Description: {this.props.description}</p>
                </div>

            </div>
        )
    }
}

export default Book;