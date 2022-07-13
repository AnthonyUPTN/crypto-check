import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';

import { fetchMovieById } from 'shared/services/moviesAPI';

import s from './movieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [data, setData] = useState({
    movie: {},
    loading: false,
    error: null,
  });
  const { id } = useParams();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location?.state?.from || '/';

  const goBack = () => navigate(-1);

  useEffect(() => {
    const fetchMovie = async () => {
      setData(prev => ({
        ...prev,
        loading: true,
      }));
      try {
        const data = await fetchMovieById(id);
        setData(prev => ({
          ...prev,
          movie: data,
          loading: false,
        }));
      } catch (err) {
        setData(prev => ({ ...prev, loading: false, error: err.message }));
      }
    };
    fetchMovie();
  }, [id]);

  const { movie, loading, error } = data;

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <button className={s.goBack} onClick={goBack}>
        &#8617; Go back
      </button>
      {loading && <p>...Loading</p>}
      {movie && (
        <>
          <div className={s.wrapper}>
            <img src={IMG_URL + poster_path} alt={title} className={s.img} />
            <div className={s.about}>
              <h2>{title}</h2>
              <p className={s.score}> User score: {vote_average * 10}%</p>
              <h3>Overview</h3>
              <p className={s.overwiev}>{overview}</p>
              <h3 className={s.genresTitle}>Genres</h3>
              <p>
                {genres &&
                  genres.map(el => (
                    <span className={s.genresItem} key={el.id}>
                      {el.name}
                    </span>
                  ))}
              </p>
            </div>
          </div>
          <div className={s.links}>
            <h3 className={s.info}>Aditional information</h3>
            <Link className={s.link} to={`/movies/${id}/cast`}>
              Cast
            </Link>
            <Link className={s.link} to={`/movies/${id}/reviews`}>
              Reviews
            </Link>
          </div>
          <div>
            <Outlet />
          </div>
        </>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default MovieDetailsPage;
