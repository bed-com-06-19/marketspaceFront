// Item.jsx
import React from 'react';
import './Item.css';

const Item = (props) => {
  console.log('New Price:', props.new_price);
  console.log('Old Price:', props.old_price);

  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
      <div className="item-price-new">
          K{props.old_price}
        </div>
        <div className="item-price-old">
          K{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
