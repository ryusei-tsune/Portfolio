<template>
  <v-row no-gutters>
    <v-col cols="12" md="3">
      <v-card-text class="pb-0 pt-4 text-md-right font-weight-bold">
        {{ header }}
      </v-card-text>
    </v-col>
    <v-col cols="12" md="9">
      <v-card-text class="pt-0 pt-md-4">
        <slot></slot>
      </v-card-text>
    </v-col>
  </v-row>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    header: {
      type: String,
      required: false,
      default: "名称未設定"
    }
  },
  data() {
    return {};
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
