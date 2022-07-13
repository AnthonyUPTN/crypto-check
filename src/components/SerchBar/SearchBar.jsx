import PropTypes from 'prop-types';

import s from "./searchBar.module.css";

function SearchBar({ setQuery }) {
  const handleChange = (e) => {
    setQuery((prev) => ({
      ...prev,
      query: e.target.value,
    }));
  };
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Search a currency</h1>
      <input
        className={s.input}
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired
}