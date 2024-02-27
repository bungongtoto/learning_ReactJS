import React from 'react';
import PropTypes from "prop-types";
import LineItem from './LineItem';

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <div>
        <ul>
          {items.map((item) => (
            <LineItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete}  />
          ))}
        </ul>
    </div>
  )
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default ItemList