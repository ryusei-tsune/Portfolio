<template>
  <v-navigation-drawer
    app
    right
    :value="value"
    @input="change"
    disable-resize-watcher
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="drawer-menu">
          Menu
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        link
        exact
        :to="item.to"
      >
        <v-list-item-content>
          <v-list-item-title class="drawer-menu">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    value: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
      // [ { title: 'Top',  to: '/' }, ]
    }
  },
  data() {
    return {};
  },
  watch: {
    "$vuetify.breakpoint.xsOnly": {
      handler(v) {
        if (!v) this.change(false);
      }
    }
  },
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    change(e) {
      this.$emit("input", e);
    }
  }
};
</script>
<style scoped>
.drawer-menu {
  color: black;
  font-family: "Tangerine", cursive;
  font-size: 30px;
}
</style>
