import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '473bf57b6e795f74966a4b9785ccc38f',
  },
});

export const fetchTrending = async () => {
  const { data } = await instance.get('/trending/all/day', {
    params: {
      page: 1,
    },
  });

  return data;
};

export const fetchMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};

export const fechMovieByQuery = async query => {
  const { data } = await instance.get(`search/movie/`, {
    params: {
      query,
    },
  });
  return data;
};
