<template>
  <nav>
    <router-link to="/" class="logo">MOVIEWEB</router-link>
    <div class="searchIconWrapper">
      <Search :onSearch="handleSearch" />
    </div>
  </nav>
</template>

<script>
import Search from './SearchContainer.vue';

export default {
  name: 'HeaderContainer',
  components: {
    Search
  },
  setup(props, { emit }) {
    const handleSearch = async (query) => {
      emit('search', query); // Emit search query to parent
    };

    return { handleSearch };
  }
}
</script>

<style scoped>
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