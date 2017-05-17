/*just a component for list of books
import React, { Component } from 'react';

export default class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}*/

//to make react and redux together containers needs, because react and redux is two separate libraries,
//a container/smart component has direct connection to redux

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//take our application state to props
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // Inside of BookList
    return {
        books: state.books
    };
}

//anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, sleectBook. Make it available as prop.
// Glue the component and the stateToProps -> connect(mapStateToProps)(BookList);
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
