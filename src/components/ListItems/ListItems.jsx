import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './listItems.module.css';

const ListItems = ({ movies }) => {
  const elements = movies.map(({ id, title, original_name }) => (
    <li key={id} className={s.item}>
      {title && <Link to={`/movies/${id}`}>{title}</Link>}
      {!title && <Link to={`/movies/${id}`}>{original_name}</Link>}
    </li>
  ));
  return <>{Boolean(movies.length) && <ul>{elements}</ul>}</>;
};

export default ListItems;

ListItems.dafaultProps = {
  movies: [],
};

ListItems.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_name: PropTypes.string,
    })
  ),
};
