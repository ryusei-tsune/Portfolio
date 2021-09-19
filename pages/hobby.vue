<template>
  <v-container class="grey lighten-2 pa-0" style="min-height:100%;" fluid>
    <div
      class="div-cover"
      :style="{ height: divHeight }"
      style="background-image: url('/adolescence.jpg');"
    ></div>
    <div class="div-message" :style="{ height: divHeight }">
      <div class="div-inner-message">
        <div style="display:inline-block;text-align:left;">
          <div style="font-size:64px;">テニス</div>
          <div style="font-size:32px; color:magenta;">
            1歳からはじめました45歳の今でもやっています。
          </div>
        </div>
      </div>
    </div>
    <div
      class="blue div-cover"
      :style="{ height: divHeight }"
      style="background-image: url('/childhood.jpg')"
    >
      bbbbbb
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
  filter: blur(5px);
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
</style>
