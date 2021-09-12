<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <div class="ma-0">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-carousel v-model="tab" hide-delimiter-background>
            <v-carousel-item v-for="(imsrc, index) in imsrcs" :key="index">
              <img class="resizeimage" :src="imsrc" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <v-card flat tile height="100%">
            <v-tabs v-model="tab">
              <v-tabs-slider color="blue"></v-tabs-slider>
              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in text" :key="item">
                <v-card flat>
                  <v-card-text>{{item}}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: "",
      bodyAttrs: { class: "body-for-color" }
    };
  },
  layout: "default",
  components: {},
  middleware: [],
  data() {
    return {
      imsrcs: ["/childhood.jpg", "/adolescence.jpg", "/index.jpg"],
      tab: null,
      items: ["幼少期", "青年期", "成人期"],
      text: [
        "兵庫県たつの市で生まれる", "ソフトテニスを9年間続けた", "大学から硬式テニスを始める"
      ]
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
<style>
.body-for-color .v-main__wrap {
  background-color: #e8f0f3;
}
</style>
<style scoped>
.resizeimage {
  width: 100%;
}
</style>
