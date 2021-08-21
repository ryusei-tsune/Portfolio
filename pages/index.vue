<template>
      <div class="pt-10 mt-10 block-center">
        <h1 class="titletext">Ryusei's Portfolio</h1>
        <h2 class="text">Welcom to my portfolio site</h2>
        <canvas class="background"></canvas>
      </div>

    
</template>

<script>
import "~/plugins/particles.js";
export default {
  head: {},
  data() {
    return {
      particles: null
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    if (this.particles) this.particles.destroy();
  },

  methods: {
    init() {
      this.particles = this.$particles.init({
        selector: ".background",
        sizeVariations: 30,
        color: ["#0bd", "rgba(0,187,221,.5)", "rgba(0,187,221,.2)"]
      });
      console.log(this.particles);
    }
  }
};
</script>

<style scoped>
.titletext {
  text-align: center;
  color: black;
  font-size: 20vmin;
  font-family: "Tangerine", cursive;
}
.text {
  text-align: center;
  color: black;
  font-size: 5vmin;
}
.background {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.5;
}
</style>
