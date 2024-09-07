<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    <ul v-if="!loading && movies.length">
      <li v-for="movie in movies" :key="movie.id">
        <h3>{{ movie.title }}</h3>
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" />
        <p>{{ movie.overview }}</p>
      </li>
    </ul>
    <p v-if="!loading && !movies.length && !error">No results found.</p>
  </div>
</template>

<script>
export default {
  name: 'MovieListContainer',
  props: {
    movies: Array,
    loading: Boolean,
    error: String
  }
}
</script>