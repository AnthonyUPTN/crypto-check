import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ReviewsItems from './ReviewsItems';

import { fetchMovieReviews } from 'shared/services/moviesAPI';

function ReviewsPage() {
  const [reviewsData, setReviewsData] = useState({
    reviews: [],
    loading: false,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setReviewsData(prev => ({
        ...prev,
        loading: true,
      }));
      try {
        const data = await fetchMovieReviews(id);

        setReviewsData(prev => ({
          ...prev,
          loading: false,
          reviews: data.results,
        }));
      } catch (err) {
        setReviewsData(prev => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
      }
    };
    fetchReviews(id);
  }, [id]);

  const { reviews, loading, error } = reviewsData;

  return (
    <>
      {loading && <p>...Loading</p>}
      <ReviewsItems reviews={reviews} />
      {error && <p>{error}</p>}
    </>
  );
}

export default ReviewsPage;
