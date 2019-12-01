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
                            <option value="All">All</option>
                        </select>
                        Book Type: 
                        <select className="formItems">
                            <option value="noFilter">No Filter</option>
                        </select>
                    </div>
                </form>
            </section>

        )
    }
}

export default Search;