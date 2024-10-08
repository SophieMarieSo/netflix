import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpComingMovies = () => {
  return api.get(`/movie/upcoming`);
};

export const useUpComingMoviesQuery = () => {
  return useQuery({
    queryKey: ['upcoming-movies'],
    queryFn: fetchUpComingMovies,
    select: (result) => result.data,
  });
};
