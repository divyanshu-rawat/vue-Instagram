
<template>
  <div class="vuegram-post">
    <div class="header level">
        <div class="level-left">
          <figure class="image is-32x32">
            <img :src="post.userImage" /> 
          </figure>
          <span class="username">{{post.username}}</span>
        </div>
    </div>
    <div class="image-container"
      :class="post.filter"
      :style="{ backgroundImage: 'url(' + post.postImage + ')' }">
    </div>
    <div class="content">
      <div class="heart">
        <i class="fa fa-heart fa-lg"></i>
      </div>
      <p class="likes">{{post.likes}} Likes</p>
      <p class="caption"><span>{{post.username}} :</span> {{post.caption}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuePost",
  props: {
    post: Object //property validation requirement 
  }
};
</script>

<style lang="scss" src="../styles/instagram-post.scss">
// Styles from stylesheet
</style>