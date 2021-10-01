<template>
  <v-app-bar
    app
    class="shadow"
    color="light-blue lighten-5"
    :height="$store.state.appbar.height"
  >
    <nuxt-link class="button bar-title" to="/">Portfolio</nuxt-link>
    <v-spacer></v-spacer>
    <nuxt-link
      v-for="(item, index) in items"
      :key="index"
      class="button bar-menu px-2 mx-3 d-none d-sm-block"
      :to="item.to"
    >
      {{ item.title }}
    </nuxt-link>
    <v-btn
      color="light-blue lighten-2"
      class="d-sm-none"
      outlined
      @click="changeMenuStatus()"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  watch: {
    "$vuetify.breakpoint.name": {
      immediate: true,
      handler(name) {
        this.$store.commit("appbar/setHeight", name);
      }
    }
  },
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    changeMenuStatus() {
      this.$emit("toggle-drawer");
    }
  }
};
</script>
<style scoped>
.button {
  color: black;
  text-decoration: none;
  font-family: "Tangerine", cursive;
}
.bar-title {
  font-size: 10vmin;
}
/* .bar-title {
  font-size: 60px;
} */
.bar-menu {
  font-size: 5vmin;
  margin-top: 6px;
}
.shadow {
  box-shadow: 0 0 5px #aaaaaa !important;
}
</style>
