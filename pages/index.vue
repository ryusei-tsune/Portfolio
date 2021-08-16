<template>
  <v-row>
    <v-col cols="2" class="hidden-sm-and-down"></v-col>
    <v-col cols="8" sm="12">
      <div class="pt-10 mt-10 block-center">
        <h1 class="titletext">Ryusei's Portfolio</h1>
        <h2 class="text">Welcom to my portfolio site</h2>
      </div>
    </v-col>
    <v-col cols="2" class="hidden-sm-and-down"></v-col>
    <canvas class="background"></canvas>
  </v-row>
</template>

<script>
export default {
  head: {
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
      }
    ]
  },

  methods: {
    window: (onload = function() {
      Particles.init({
        selector: ".background",
        sizeVariations: 30,
        color: ["#0bd", "rgba(0,187,221,.5)", "rgba(0,187,221,.2)"]
      });
    })
  }
};
</script>

<style scoped>
.titletext {
  text-align: center;
  color: black;
  font-size: 120px;
  font-family: "Tangerine", cursive;
}
.text {
  text-align: center;
  color: black;
  font-size: 30px;
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
