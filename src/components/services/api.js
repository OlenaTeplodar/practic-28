import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9fae0fdf266213c68361ca578a95b948';

axios.defaults.baseURL = BASE_URL;
export const fetchApiMovies = page => {
  return axios('/trending/movie/day', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};
