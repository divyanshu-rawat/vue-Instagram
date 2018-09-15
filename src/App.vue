<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_gram_logo_cp.png" />
      </div>
      <phone-body :posts = 'posts' :filters = 'filters' :step = 'step' :image="image" :selectedFilter="selectedFilter"
        v-model="caption"/>
      <div class="phone-footer">
       <div class="home-cta">
        <i class="fa fa-home fa-lg"></i>
       </div>
       <div class="upload-cta">

         <input type="file"
            name="file"
            id="file"
            class="inputfile"
            @change="uploadImage"/>
          <label for="file">
            <i class="fa fa-plus-square fa-lg"></i>
          </label>

       </div>
      </div>
    </div>
  </div>
</template>


<script>
import PhoneBody from "./components/phone-body"
import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'
import posts from "./data/posts";
import filters from "./data/filters";

export default {
  name: 'app',

  data(){
    return{
      posts,filters, step : 1,
      image: "",
      selectedFilter: "",
      caption: ""
    }
  },
  methods:{
    uploadImage(evt) {
      
      const files = evt.target.files;

      if (!files.length) return;
      const reader = new FileReader();
      
      reader.readAsDataURL(files[0]); // async reading      
      reader.onload = evt => {
        this.image = evt.target.result;
        this.step = 2;
      };
      // To enable reuploading of same files in Chrome
      document.querySelector("#file").value = "";
    }
  },
  components: {
    "phone-body": PhoneBody
  }
}
</script>

<style lang="scss" src="./styles/app.scss"></style>

