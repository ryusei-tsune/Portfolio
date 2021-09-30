<template>
  <v-dialog v-model="isOpen" :fullscreen="$vuetify.breakpoint.xsOnly">
    <template v-slot:activator="{ on, attrs }">
      <slot name="activator" v-bind:on="on" v-bind:attrs="attrs"></slot>
    </template>
    <v-card tile>
      <div class="d-flex align-center">
        <v-card-title class="text-subtitle-1 text-sm-h6 font-weight-medium">
          <span>{{ title }}</span>
        </v-card-title>
        <v-spacer />
          <v-btn large icon tile @click="isOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
      </div>
      <slot></slot>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    title: {
      type: String,
      required: false,
      default: "名称未設定"
    }
  },
  data() {
    return {
      isOpen: false
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
<style scoped></style>
