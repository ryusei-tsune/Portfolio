<template>
  <v-container class="pa-0" style="min-height:100%;" fluid>
    <div
      class="div-cover"
      :style="{ height: divHeight }"
      style="background-image: url('/hobby-Tennis.jpg');"
    ></div>
    <div class="div-message" :style="{ height: divHeight }">
      <div class="div-inner-message">
        <div style="display:inline-block;text-align:left;">
          <div class="hobbytext px-2">Tennis</div>
          <div style="color:slateblue; font-size: 3vmin; text-shadow:0px 0px 4px white;" class="px-4">
            I try to play tennis at least once a week. However, due to the Coronavirus, <br>
            I have not been able to play tennis lately, and I feel that I am not getting enough exercise.
          </div>
        </div>
      </div>
    </div>
    <div
      class="div-cover"
      :style="{ height: divHeight }"
      style="background-image: url('/hobby-Anime.jpg')"
    >
    </div>
    <div class="div-message" :style="{ height: divHeight }">
      <div class="div-inner-message">
        <div style="display:inline-block;text-align:left;">
          <div class="hobbytext px-2">Anime</div>
          <div style="color:darkturquoise; font-size: 3vmin; text-shadow:0px 0px 2px black;" class="px-4">
            I've loved anime since I was in elementary school. The first time I got into anime was Fairy Tail. <br>
            Currently, the anime I recommend is Guilty Crown. <br>
            I can't tell you what to look out for or how I feel about it, so please watch it.<br>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: ""
    };
  },
  layout: "default",
  components: {},
  middleware: [],
  data() {
    return {
      innerHeight: window.innerHeight
    };
  },
  watch: {},
  computed: {
    divHeight() {
      return this.innerHeight - this.$store.state.appbar.height + "px";
    }
  },
  created() {},
  beforeMount() {},
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize(e) {
      this.innerHeight = window.innerHeight;
    }
  }
};
</script>
<style scoped>
.div-cover{
  background-size: cover;
  filter: blur(6px);
  width: 100%;
  position: absolute;
}
.div-message {
  position: relative;
}
.div-inner-message {
  position: absolute;
  top: 50%;
  margin-top: -0.5em;
  left: 0;
  right: 0;
  text-align: center;
}
.hobbytext {
  color: magenta;
  font-size: 15vmin;
  font-family: "Tangerine", cursive;
}
</style>
