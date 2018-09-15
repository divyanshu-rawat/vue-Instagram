

<template>
  <div class="filter-type">
    <p>{{filter.name}}</p>
    <div class="img"
      :class="filter.name"
      :style="{ backgroundImage: 'url(' + image + ')' }">
    </div> 
  </div>
</template>

<script>
export default {
  name: "FilterType",
  props: {
    filter: Object,
    image: String
  }
};
</script>

<style lang="scss" src="../styles/filter-type.scss">
// Styles from stylesheet
</style>

<style lang="scss"> @import '../styles/cssgram.min.css' </style>