import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <p>Такой страницы не найдено</p>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default NotFoundPage;
