import React from 'react';
import PropTypes from 'prop-types';


/*
-
-Render a list of items

*/

function List(props) {
    const {items } = props;
    if(!items.length){
        return <span className="empty-message">No Items in List</span>
    }

    return (
    <ul className="list-items">
           {items.map(item => <li key={items} className="item">{item}</li>)}
    </ul>
    );
}

List.propTypes = {
    items: PropTypes.array,
};

List.defaultProps = {
    items: [],
};

export default List;