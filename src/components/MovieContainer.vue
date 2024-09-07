<template>
  <div class="movie-container"  @click="handleClick">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" />
    <div class="movieInfo">
        <h4>{{ movie.title }}</h4>
        <RatingContainer :movie="movie" />
    </div>
  </div>
</template>



<script>
import RatingContainer from './RatingContainer.vue';

export default {
  name: 'MovieContainer',
  components: {
    RatingContainer
  },
  props: {
    movie: Object
  },
  methods: {
    handleClick() {
      // 클릭 시 부모 컴포넌트에 이벤트 발생
      this.$emit('movie-clicked', this.movie.id);
    }
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
        overflow: hidden; 
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

    @media (max-width: 768px) {
        .movie-container {
            width: 80%
        }
    }
</style>
