import FilmsList from 'components/FilmsList';

import s from './homePage.module.css';

function HomePage() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Trending today</h2>
      <FilmsList />
    </div>
  );
}

export default HomePage;
