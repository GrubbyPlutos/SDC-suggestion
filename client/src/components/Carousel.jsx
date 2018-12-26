import React from 'react';
import SuggestionListEntry from './SuggestionListEntry.jsx';
import styles from './style.css.js';

const Carousel = (props) =>  {
  const style = 'list' + props.active;
  const list = styles[style];
  return (
    <div style={styles.carousel}>
      {props.active === 0
        ? null
        : <div style={styles.leftArrow} onClick={props.back}>&lt;</div>
      }
      <div style={styles.carouselBody}>
        <div style={list}>
          {props.restaurants.map((restaurant, index) => {
            return <SuggestionListEntry restaurant={restaurant[0]} active={props.active} index={index} />;
          })}
        </div>
      </div>
      {props.active === 3
        ? null
        : <div style={styles.rightArrow} onClick={props.next}>&gt;</div>
      }
    </div>
  );
};

export default Carousel;
