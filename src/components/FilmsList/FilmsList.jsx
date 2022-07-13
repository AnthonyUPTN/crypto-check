import { useState, useEffect } from 'react';
import { fetchTrending } from 'shared/services/moviesAPI';

import ListItems from 'components/ListItems';

function FilmsList() {
  const [data, setData] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    setData(prev => ({
      ...prev,
      loading: true,
    }));
    const fetchTrendingMovies = async () => {
      try {
        const trendingFilms = await fetchTrending();

        setData(prev => ({
          ...prev,
          movies: trendingFilms.results,
          loading: false,
        }));
      } catch (err) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
      }
    };
    fetchTrendingMovies();
  }, []);

  const { movies, loading, error } = data;

  return (
    <>
      {loading && <p>...Loading</p>}
      <ListItems movies={movies} />
      {error && <p>{error}</p>}
    </>
  );
}

export default FilmsList;
