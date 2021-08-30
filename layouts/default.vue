<template>
  <v-app dark>
    <AppBar :items="menuItem" @toggle-drawer="toggleDrawer"></AppBar>
    <NavigationDrawer
      v-model="isOpenDrawer"
      :items="menuItem"
    ></NavigationDrawer>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "~/components/layout/AppBar.vue";
import NavigationDrawer from "~/components/layout/NavigationDrawer.vue";
export default {
  head: {},
  components: { AppBar, NavigationDrawer },
  data() {
    return {
      isOpenDrawer: false,
      menuItem: [
        { title: "Top", to: "/" },
        { title: "About", to: "/about" },
        { title: "Career", to: "/career" },
        { title: "Works", to: "/works" }
      ]
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    toggleDrawer() {
      this.isOpenDrawer = !this.isOpenDrawer;
    }
  }
};
</script>
