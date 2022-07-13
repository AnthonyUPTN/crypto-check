import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CastItems from './CastItems';
import { fetchMovieCast } from 'shared/services/moviesAPI';

function Cast() {
  const [castData, setСastData] = useState({
    cast: [],
    loading: false,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setСastData(prev => ({
        ...prev,
        loading: true,
      }));
      try {
        const data = await fetchMovieCast(id);

        setСastData(prev => ({
          ...prev,
          loading: false,
          cast: data.cast,
        }));
      } catch (err) {
        setСastData(prev => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
      }
    };
    fetchCast(id);
  }, [id]);

  const { cast, loading, error } = castData;

  return (
    <>
      {loading && <p>...Loading</p>}
      <CastItems cast={cast} />
      {error && <p>{error}</p>}
    </>
  );
}

export default Cast;
