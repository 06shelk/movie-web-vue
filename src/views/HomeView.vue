<template>
  <div class="home">
    <div class="movie-container-list">
      <MovieContainer
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @movie-clicked="goToDetailPage"
      />
    </div>
  </div>
</template>

<script>
import MovieContainer from '@/components/MovieContainer.vue';
import { getMovieData } from '@/data/movieDummy.js';

export default {
  name: 'HomeView',
  components: {
    MovieContainer
  },
  
  data() {
    return {
      movies: []
    };
  },
  async mounted() {
    try {
      const movieData = await getMovieData(); // API 호출
      this.movies = movieData.results || []; // 데이터의 results 필드가 존재하는지 확인
    } catch (error) {
      console.error('Error loading movie data:', error);
      this.movies = []; // 오류 발생 시 빈 배열로 초기화
    }
  },
   methods: {
    goToDetailPage(movieId) {
      this.$router.push({
        path: `/movie/detail/${movieId}`
      });
    }
  }
}
</script>

<style scoped>
  .movie-container-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;

  }
</style>
