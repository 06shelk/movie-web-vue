<template>
  <div class="stars-wrapper">
    <!-- 채워진 별 -->
    <font-awesome-icon 
      v-for="n in fullStars" 
      :key="`full-${n}`" 
      icon="fa-solid fa-star" 
      color="white"
    />
    <!-- 반쪽 별 -->
    <font-awesome-icon 
      v-if="hasHalfStar" 
      icon="fa-solid fa-star-half-stroke"  
      color="white"
    />
    <!-- 빈 별 -->
    <font-awesome-icon 
      v-for="n in emptyStars" 
      :key="`empty-${n}`" 
      icon="fa-regular fa-star" 
      color="white"
    />
  
  </div>
</template>

<script>
export default {
  name: 'RatingContainer',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    maxStars() {
      return 5;
    },
    normalizedRating() {
      // 평점을 10점 만점에서 5점 만점으로 변환
      return this.movie.vote_average / 2;
    },
    fullStars() {
      // 채워진 별 개수
      return Math.floor(this.normalizedRating);
    },
    hasHalfStar() {
      // 반쪽 별이 있는지 여부
      return this.normalizedRating % 1 !== 0;
    },
    emptyStars() {
      // 빈 별 개수: 총 별 5개에서 채워진 별과 반쪽 별을 뺀 나머지
      return  Math.max(0, this.maxStars - this.fullStars - (this.hasHalfStar ? 1 : 0));
    }
  }
}
</script>

<style scoped>
.stars-wrapper {
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  color: white;
}

</style>
