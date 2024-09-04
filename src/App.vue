<template>
  <nav>
    <router-link to="/" class="logo">MOVIEWEB</router-link>
    <div class="searchIconWrapper">
      <Search :onSearch="handleSearch" />

    </div>
  </nav>
  <router-view/>
</template>
<script>
import Search from './components/SearchContainer.vue';
import { ref } from 'vue';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default {
  name: 'App',
  components: {
    Search
  },
  setup() {
    const movies = ref([]);
    const loading = ref(false);
    const error = ref('');
    
    const handleSearch = async (query) => {
      if (query.trim().length === 0) {
        movies.value = [];
        return;
      }

      loading.value = true;
      error.value = '';
      
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b91f1d6e4a9522497deb2df1da76a3f9&language=ko&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        movies.value = data.results || [];
      } catch (err) {
        error.value = '검색 오류';
        console.log(error.value);
      } finally {
        loading.value = false;
      }
    };

    return { movies, loading, error, handleSearch, IMG_BASE_URL };
  }
}
</script>
<style>
#app {
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    background-color: #22254b;
    margin: 0;
    
}

nav {
  padding: 12px 10px;
  display: flex;
  height: 26px;
  justify-content: space-between;
  align-items: center;
  background-color: #373b69;
  z-index: 100;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1em;
  font-weight: 600;
  color: white;
  margin: 0 20px;
  text-decoration: none;
  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.searchIconWrapper {
  display: flex;
  align-items: center;
  color: white;
  margin-right: 10px;
}


</style>
