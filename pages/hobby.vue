<template>
  <v-container class="pa-0" style="min-height:100%;" fluid>
    <div
      class="div-cover"
      :style="{ height: divHeight }"
      style="background-image: url('/adolescence.jpg');"
    ></div>
    <div class="div-message" :style="{ height: divHeight }">
      <div class="div-inner-message">
        <div style="display:inline-block;text-align:left;">
          <div class="hobbytext">Tennis</div>
          <div style="color: #4775ff; font-size: 3vmin;">
            1歳からはじめました45歳の今でもやっています。
          </div>
        </div>
      </div>
    </div>
    <div
      class="blue div-cover"
      :style="{ height: divHeight }"
      style="background-image: url('/index.jpg')"
    >
    </div>
    <div class="div-message" :style="{ height: divHeight }">
      <div class="div-inner-message">
        <div style="display:inline-block;text-align:left;">
          <div class="hobbytext">Anime</div>
          <div style="color: #4775ff; font-size: 3vmin;">
            お勧めはギルティクラウンです。
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
.div-cover {
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
  color: deepskyblue;
  font-size: 15vmin;
  font-family: "Tangerine", cursive;
}
</style>
