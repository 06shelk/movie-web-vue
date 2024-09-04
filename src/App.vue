<template>
  <nav>
    <router-link to="/" class="logo">MOVIEWEB</router-link>
    <div class="searchIconWrapper">
      <input placeholder="검색어를 입력하세요"/>
      <font-awesome-icon icon="fa-solid fa-search" color="white"/>
    </div>
  </nav>
  <router-view/>
</template>

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

input {
  margin-right: 10px;
  padding: 5px;
  font-size: 14px;
  border: none;
  outline: none;
  background-color: #373b69;
  border-bottom: 1px solid #888;
  color: white;
}

</style>
