<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <div class="ma-0">
      <v-row no-gutters>
        <v-col cols="12" md="6" :class="{border:$vuetify.breakpoint.mdAndUp}">
          <v-window v-model="tab">
            <v-window-item v-for="(imsrc, index) in imsrcs" :key="index">
              <div class="backgroundImage">
                <v-card>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-card-text class="mb-0 backcolor">
                      <img class="resizeimage" :src="imsrc" />
                    </v-card-text>
                  </v-row>
                </v-card>
              </div>
            </v-window-item>
          </v-window>
          <v-card-actions class="justify-space-between backcolor">
            <v-btn text @click="prev">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-item-group v-model="tab" class="text-center" mandatory>
              <v-item
                v-for="n in imsrcs.length"
                :key="`btn-${n}`"
                v-slot="{ active, toggle }"
              >
                <v-btn :input-value="active" icon @click="toggle">
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
            <v-btn text @click="next">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
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
                  <v-card-text>{{ item }}</v-card-text>
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
        "兵庫県たつの市で生まれる",
        "ソフトテニスを9年間続けた",
        "大学から硬式テニスを始める"
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
    next() {
      this.tab =
        this.tab + 1 === this.imsrcs.length ? 0 : this.tab + 1;
    },
    prev() {
      this.tab =
        this.tab - 1 < 0 ? this.imsrcs.length - 1 : this.tab - 1;
    }
  }
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
.backcolor {
  background: white;
}
.border {
  border-right:1px solid green;
}
</style>
