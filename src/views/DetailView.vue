<template>
 <div class="detailContainer">
    <div v-if="movie">
        <div class="movieImg">
            <img :src="`${IMG_BASE_URL}${movie.poster_path}`" :alt="movie.title" />
        </div>
        <div class="texts">
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.overview }}</p>
        </div>
    </div>
    <p v-else>영화를 로드할 수 없습니다.</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default {
  name: 'DetailView',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const movie = ref(null);

    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=b91f1d6e4a9522497deb2df1da76a3f9&language=ko`);
        movie.value = response.data;
      } catch (error) {
        console.error('Error fetching movie data:', error);
        movie.value = null; 
      }
    };

    onMounted(() => {
      fetchMovie();
    });

    return { movie, IMG_BASE_URL };
  }
}
</script>

<style scoped>
    .detailContainer {
        width: 100%;
        height: 100%;
        height: 50rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .detailContainer div {
        display: flex;
        justify-content: center;
        align-items: center;  
        height: 100%;
        width: 80%;
    }

 
    .movieImg img {
        width: 300px; 
        max-width: 300px;
        border-radius: 5px;
        margin-bottom: 20px;
        
    }

    .texts {
        display: flex;
        flex-direction: column;
        width: 70%;
        text-align: center;
        padding: 0 20px; 
    }

    .texts h2 {
        margin: 20px 0;
        text-align: center; 
    }

    .texts p {
        max-width: 100%;
        text-align: center; 
    }

    @media (max-width: 768px) {
        
        .detailContainer {
            margin-top: 30px;
        }

        .detailContainer  div {
          flex-direction: column;
        }
    }
</style>
