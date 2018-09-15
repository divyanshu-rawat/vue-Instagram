<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="https://banner2.kisspng.com/20180409/tiw/kisspng-computer-icons-youtube-logo-business-blog-instagram-5acbde5c6b2d38.836049801523310172439.jpg"  width="40" />
        <!-- <i class="fab fa-instagram"></i> -->


        <a class="cancel-cta"
           v-if="step === 2 || step === 3" 
           @click="goToHome">
            Cancel
        </a>

         <a class="next-cta"
           v-if="step === 2"
           @click="step++">
            Next
        </a>

        <a class="next-cta"
           v-if="step === 3"
           @click="sharePost">
            Share
        </a>



      </div>
      <phone-body :posts = 'posts' :filters = 'filters' :step = 'step' :image="image" :selectedFilter="selectedFilter " v-model="caption"
        />
      <div class="phone-footer">
       <div class="home-cta" @click="goToHome">
        <i class="fa fa-home fa-lg"></i>
       </div>
       <div class="upload-cta">

         <input type="file"
            name="file"
            id="file"
            class="inputfile"
            @change="uploadImage" :disabled="step !== 1"/>
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
import posts from "./data/posts"
import filters from "./data/filters"
import EventBus from "./event-bus.js"

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
    },
    goToHome() {
      this.image = "";
      this.selectedFilter = "";
      this.caption = "";
      this.step = 1;
    },

     sharePost() {
      const post = {
        username: "Anonymous",
        userImage:
          "https://scontent.fagr1-1.fna.fbcdn.net/v/t1.0-9/35757804_1790304394418233_5050951174400770048_n.jpg?_nc_cat=0&oh=424d62ce184c27e0debd196d9251121b&oe=5C1A8F19",
        postImage: this.image,
        likes: 0,
        caption: this.caption,
        filter: this.selectedFilter
      };
      this.posts.unshift(post);
      this.goToHome();
    }
  },
  components: {
    "phone-body": PhoneBody
  },
  created(){
    EventBus.$on("filter-selected", evt => {
      this.selectedFilter = evt.filter;
    });
  }
}
</script>

<style lang="scss" src="./styles/app.scss"></style>

