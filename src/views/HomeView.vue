<template>
  <div class="home">
    <!-- <HeaderCom /> -->
    <div class="movie-container-list">
      <MovieContainer
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
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
      const movieData = await getMovieData();
      this.movies = movieData.results || [];
    } catch (error) {
      console.error('Error loading movie data:', error);
      this.movies = [];
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
