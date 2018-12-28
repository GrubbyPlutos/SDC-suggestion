import React from 'react';
import Stars from './Stars.jsx';
import Tooltip from './Tooltip.jsx';
import styles from './style.css.js';

const RestaurantEntry = (props) => {
  return (
  <div>
      <div className="restaurantCard" style={styles.listEntry}>
        <img style={styles.image} src={props.restaurant.picture} />
        <h3 style={Object.assign({}, styles.listInfoLeft, styles.title, styles.ellipsis)}>{props.restaurant.name}</h3>
        <div style={Object.assign({}, styles.listInfoLeft, { marginBottom: '10px' })}>
          <span>{props.restaurant.food.split(' ').slice(0, 2).join(', ').concat('...')}</span>
        </div>
        <div style={styles.lowerRow}>
          <div style={styles.listInfoLeft}>
            <span>
              <div style={{ color: 'black' }}>{props.restaurant.waiting_time} mins</div>
              <div>${props.restaurant.minimum} min</div>
            </span>
          </div>
          <div onMouseEnter={() => props.hoverIn(props.restaurant.id)} onMouseLeave={props.hoverOut}>
            <Stars style={styles.listInfoRight} stars={props.restaurant.review_summary.stars}/>
            <div>{props.restaurant.review_no} ratings</div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default RestaurantEntry;

// <div style={styles.tooltip}>
//   <Tooltip summary={props.restaurant.review_summary} review={props.restaurant.review}
//   hover={props.hover} id={props.restaurant.id} />
// </div>