
<template>
  <div class="phone-body">
    <div class="feed" v-if="step === 1">
      <vuegram-post v-for="post in posts"
        :post="post"
        :key="posts.indexOf(post)">
      </vuegram-post>
    </div>

    <div v-if="step === 2">
      <div class="selected-image" :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"></div>
      
       <div class="filter-container" v-dragscroll.x>
        <filter-type v-for="filter in filters"
          :filter="filter"
          :image="image"
          :key="filters.indexOf(filter)">
        </filter-type>
      </div>

    </div>


  </div>
</template>

<script>

import VuePost from "./vue-post"
import FilterType from "./FilterType"
import dragscroll from 'vue-dragscroll'

export default {
  name: "PhoneBody",
   directives: {
    'dragscroll': dragscroll
  },
  props: {
    posts: Array,
    filters: Array ,// prop validation requirement
    step : Number,
    image: String,
    selectedFilter: String
  },
  components:{
  	"vuegram-post": VuePost,
    "filter-type": FilterType
  }
};
</script>

<style lang="scss" src="../styles/phone-body.scss">

</style>