import s from './movieDetailsPage.module.css';

function MovieInfo({ title, vote_average, overview, genres } = []) {
  return (
    <>
      {/* <h2>{title}</h2>
      <p className={s.score}> User score: {vote_average * 10}%</p>
      <h3>Overview</h3>
      <p className={s.overwiev}>{overview}</p>
      <h3 className={s.genresTitle}>Genres</h3>
      <p>{genres && genres.map(el => <span key={el.id}>{el.name}</span>)}</p> */}
    </>
  );
}

export default MovieInfo;
