<template>
  <div class="movie-container">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" />
    <div class="movieInfo">
        <h4>{{ movie.title }}</h4>
        <p>{{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  }
}
</script>

<style scoped>
    .movie-container {
        width: 250px;
        margin: 16px;
        background-color: #373b69;
        color: white;
        border-radius: 5px;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    }

    .movie-container img {
        max-width: 100%;
    }

    .movieInfo {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        align-items: center;
    }

    .movieInfo h4 {
        margin: 0;
        color: white;
        text-decoration-line: none;
    }

    .movieInfo p {
        margin-left: 3px;
        color: white;
    }
</style>
