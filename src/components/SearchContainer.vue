<!-- Search.vue -->
<template>
  <div class="search">
    <input
      type="text"
      placeholder="검색어를 입력하세요"
      v-model="query"
      @input="handleInput"
    />
    <font-awesome-icon 
      icon="fa-solid fa-search" 
      color="white"
      @click="handleSearchClick"
    />
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'SearchContainer',
  props: {
    value: {
      type: String,
      default: ''
    },
    onSearch: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const query = ref(props.value);
    let timeout;

    const handleInput = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        props.onSearch(query.value);
      }, 1000);
    };

    const handleSearchClick = () => {
      props.onSearch(query.value);
    };

    watch(() => props.value, (newValue) => {
      query.value = newValue;
    });

    return { query, handleInput, handleSearchClick };
  }
}
</script>

<style scoped>
.search {
  display: flex;
  align-items: center;
}

.search input {
  margin-right: 10px;
  padding: 5px;
  font-size: 14px; 
  border: none;
  outline: none;
  background-color: #373b69;
  border-bottom: 1px solid #888;
  color: white;
}

.search .fa-search {
  cursor: pointer;
}
</style>
