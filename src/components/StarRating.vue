<template>
  <div class="star-rating">
    <span class="star star--outlined" v-for="index in starLimit" :key="index"></span>
    <div class="star-rating__colored" :style="getRatingStyle">
      <span class="star star--colored" v-for="index in starLimit" :key="index"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StarRating',
    props: {
      rating: {
        type: Number,
        default: 0
      },
      starLimit: {
        type: Number,
        default: 5
      }
    },
    computed: {
      getRatingWidth(){
        return (this.rating / this.starLimit) * 100
      },
      getRatingStyle(){
        return `width: ${this.getRatingWidth}%;`
      }
    }
  }
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;
  display: inline-flex;

  &__colored {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}
.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;

  &:first-child {
    margin-left: 0;
  }
  &--colored {
    background: url('/public/img/star-yellow.svg') center no-repeat;
  }

  &--outlined {
    background: url('/public/img/star-outlined.svg') center no-repeat;
  }
}
</style>