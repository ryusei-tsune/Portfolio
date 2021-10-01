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
    <PageFooter></PageFooter>
  </v-app>
</template>

<script>
import AppBar from "~/components/layout/AppBar.vue";
import NavigationDrawer from "~/components/layout/NavigationDrawer.vue";
import PageFooter from "~/components/layout/PageFooter.vue";
export default {
  head: {},
  components: { AppBar, NavigationDrawer, PageFooter },
  data() {
    return {
      isOpenDrawer: false,
      menuItem: [
        { title: "Top", to: "/" },
        { title: "About", to: "/about" },
        { title: "Hobby", to: "/hobby" },
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
