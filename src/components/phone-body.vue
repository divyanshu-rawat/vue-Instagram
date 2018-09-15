
<template>
  <div class="phone-body">
    <div class="feed">
      <vuegram-post v-for="post in posts"
        :post="post"
        :key="posts.indexOf(post)">
      </vuegram-post>
    </div>
  </div>
</template>

<script>

import VuePost from "./vue-post";

export default {
  name: "PhoneBody",
  props: {
    posts: Array,
    filters: Array // prop validation requirement
  },
  components:{
  	"vuegram-post": VuePost
  }
};
</script>

<style lang="scss" src="../styles/phone-body.scss">

</style>