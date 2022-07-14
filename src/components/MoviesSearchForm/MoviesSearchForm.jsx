import { useState } from 'react';
import PropTypes from 'prop-types';

const MoviesSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({ query: '' });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={state.query}
          name="query"
          onChange={handleChange}
          type="text"
          placeholder="Movie"
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default MoviesSearchForm;

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
