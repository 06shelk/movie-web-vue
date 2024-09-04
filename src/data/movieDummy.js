import axios from 'axios';

export async function getMovieData() {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=b91f1d6e4a9522497deb2df1da76a3f9&language=ko&page=1&region=KR');
    return response.data; 
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return { results: [] }; 
  }
}
