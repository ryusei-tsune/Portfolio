<template>
  <v-app-bar flat app color="light-blue lighten-5" :height="height">
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
    <v-btn color="light-blue lighten-2" class="d-sm-none" outlined @click="changeMenuStatus()">
      MENU
      <!-- <v-icon>mdi-menu</v-icon> -->
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
  watch: {},
  computed: {
    height() {
      return this.$vuetify.breakpoint.xsOnly ? undefined : 80;
    }
  },
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    changeMenuStatus(){
      this.$emit('toggle-drawer')
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
  font-size: 9vmin;
}
/* .bar-title {
  font-size: 60px;
} */
.bar-menu {
  font-size: 30px;
  margin-top: 6px;
}
</style>
