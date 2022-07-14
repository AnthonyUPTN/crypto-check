import PropTypes from 'prop-types';

import s from './reviewsItems.module.css';

function ReviewsItems({ reviews }) {
  const elements = reviews.map(el => (
    <li key={el.id} className={s.item}>
      <h3 className={s.author}>Author: {el.author}</h3>
      <p>{el.content}</p>
    </li>
  ));
  return (
    <>{Boolean(reviews.length) && <ul className={s.list}>{elements}</ul>}</>
  );
}

export default ReviewsItems;

ReviewsItems.dafaultProps = {
  reviews: [],
};

ReviewsItems.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
