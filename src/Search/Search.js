import React from 'react';
import './Search.css';

class Search extends React.Component {
    render() {
        return (
            <section className="search">
                <form onSubmit={e => this.props.onSearch(e)}>
                    <div className="searchtop">
                        Search: <input type="text" className="formItems" id="searchText"></input> <button type="submit" className="formItems">Search</button>
                    </div>
                    <div className="searchbottom">
                        Print Type: 
                        <select className="formItems">
                            <option value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                        Book Type: 
                        <select className="formItems">
                            <option value="noFilter">No Filter</option>
                            <option value="partial">Partial</option>
                            <option value="free-ebooks">Free Ebooks</option>
                            <option value="paid-ebooks">Paid Ebooks</option>
                            <option value="ebooks">Ebooks</option>
                        </select>
                    </div>
                </form>
            </section>

        )
    }
}

export default Search;