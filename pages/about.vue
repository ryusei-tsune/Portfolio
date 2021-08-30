<template>
  <v-container>
    <div class="ma-0" align="center">
      <v-row justify="center">
        <v-col cols="6">
          <v-carousel v-model="model">
            <v-carousel-item v-for="(color, i) in colors" :key="color">
              <v-sheet :color="color" height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-h2">Slide {{ i + 1 }}</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="6">
          bbbbbbbbbbbbbbbb
        </v-col>
      </v-row>
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
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
