<template>
  <v-dialog v-model="isOpen" width="800">
    <template  v-slot:activator="{ on, attrs }">
      <v-card-title style="font-size:3vmin;">
        常友　琉成
      </v-card-title>
      <v-card-text>
        Tsunetomo Ryusei
      </v-card-text>
      <v-card-text>
        岡山大学大学院自然科学研究科　修士課程1年
      </v-card-text>
      <v-btn  v-bind="attrs" v-on="on" @click="isOpen=true">
        <v-icon>mdi-check-bold</v-icon>詳しくはこちらを！
      </v-btn>
    </template>
    <v-card>
      <v-card-title>PLOFILE</v-card-title>
      あああああああ
      <v-divider></v-divider>
      <v-card-title>学歴</v-card-title>
      いいいいいいいいい
      <v-card-title>プログラミング</v-card-title>
      うううううううううう
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    prop1: {
      type: Number,
      required: false,
      default: 100,
    },
    prop2: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>
<style scoped>
.name {
  font-family: "Tangerine", cursive;
}
</style>