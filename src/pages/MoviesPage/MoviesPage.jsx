import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import ListItems from 'components/ListItems';
import MoviesSearchForm from 'components/MoviesSearchForm';

import { fechMovieByQuery } from 'shared/services/moviesAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmit = ({ query }) => setSearchParams({ query });
  const q = searchParams.get('query');

  useEffect(() => {
    const searchMovies = async () => {
      setMovies(prev => ({ ...prev, loading: true }));
      try {
        const result = await fechMovieByQuery(q);
        console.log(result.results);
        setMovies(prev => ({
          ...prev,
          loading: false,
          items: result.results,
        }));
      } catch (err) {
        setMovies(prev => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
      }
    };
    if (q) {
      searchMovies();
    }
  }, [q]);

  const { items, loading, error } = movies;

  return (
    <>
      <MoviesSearchForm onSubmit={onSubmit} />
      {loading && <p>Loading...</p>}
      <ListItems movies={items} />
      {error && <p>{error}</p>}
    </>
  );
};

export default MoviesPage;
