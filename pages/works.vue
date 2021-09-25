<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <div class="ma-0">
      <v-dialog v-model="dialog" width="1000">
        <template v-slot:activator="{ on, attrs }">
          <v-row justify="center" class="px-2">
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="4"
              class="text-center"
              v-for="(item, index) in Names"
              :key="index"
            >
              <v-card v-bind="attrs" v-on="on" @click="openPop(index)">
                <div class="pa-2">
                  <img :src="popim[index]" style="width:100%;" />
                </div>
                <v-divider></v-divider>
                <v-card-text>
                  {{ item }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>

        <v-card>
          <v-card-title class="text-h5 popColor">
            {{ Names[select] }}
          </v-card-title>

          <v-card flat tile color="#F5F5F5">
            <v-window v-model="onboarding">
              <v-window-item v-for="(im, index) in image[select]" :key="index">
                <img class="resizeimage pt-2 px-2 popBack" :src="im" />
                <v-card-actions class="justify-space-between mb-3 py-2">
                  <v-btn text @click="prev">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-item-group
                    v-model="onboarding"
                    class="text-center"
                    mandatory
                  >
                    <v-item
                      v-for="n in length"
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
              </v-window-item>
            </v-window>
            <v-card>
              <!-- <v-row class="fill-height" align="center" justify="center"> -->
              <v-row>
                <v-col cols="4" sm="3" xl="3">
                  <v-card-text class="itemstr pr-2 text-right">
                    タイトル :
                  </v-card-text>
                </v-col>
                <v-col cols="8" sm="9" xl="9">
                  <v-card-text class="contentstr">
                    {{ Names[select] }}
                  </v-card-text>
                </v-col>
              </v-row>
              <v-row v-for="(item, index) in summery[select]" :key="index">
                <v-col cols="4" sm="3" xl="3" class="py-0 text-right">
                  <v-card-text v-if="index == 0" class="pb-0 itemstr pr-2">
                    概要:
                  </v-card-text>
                </v-col>
                <v-col cols="8" sm="9" xl="9" class="py-0">
                  <v-card-text class="pb-0 contentstr">
                    {{ item }}
                  </v-card-text>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" sm="3" xl="3" class=" text-right">
                  <v-card-text class="itemstr">
                    使用言語:
                  </v-card-text>
                </v-col>
                <v-col cols="8" sm="9" xl="9">
                  <v-card-text class="contentstr">
                    {{ usedLanguage[select] }}
                  </v-card-text>
                </v-col>
              </v-row>
              <!-- </v-row> -->
            </v-card>
          </v-card>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      Names: ["CCF (Create CSV File)", "Household-Account-Book", "Portfolio"],
      length: 3,
      onboarding: 0,
      select: 0,
      title: "",
      summery: [
        [
          "CCFは私が所属する後藤研究室で利用するためのWebアプリケーションです。",
          "研究室のホームページでメンバー情報を公開する際に、事前準備として情報を記入したCSVファイルを作成します。",
          "これまでは手入力でCSVファイルを作成しており、手間であったため、このアプリケーションを利用することでその手間を少しでも減らせればと思い作成しました。",
          "今後研究室のホームページを編集するのが楽になればと思っています！！！"
        ],
        [
          "Household-Account-Bookは私が家計簿をつけるためのWebアプリケーションです。",
          "私が以前使っていた家計簿アプリはiOS、Androidにしか対応しておらず、PCで使うことが出来ませんでした。最近ではマネーフォワード等の携帯端末だけでなくWebで利用することが出来るアプリがありますが、今回はWebのみでよりシンプルに利用することが出来るアプリケーションを作成しようと思いました。",
          "今回実装した機能はアカウント作成機能、ログイン機能、支出入の登録、登録情報の参照を実装しました。",
          "まだまだ改善の余地ありな家計簿です！！！"
        ],
        [
          "Portfolioは今ご覧頂いているページです。",
          "Portfolioは私自身について少しでも知って頂けたらと思い作成しています。今の自分が作れる最高のページを！！",
          "制作物は今後もっと増やして行きたいと考えています。また、自身の技術力の向上に伴い都度都度このページも編集していきたいと思います。",
          "目指せ最高のポートフォリオ！！！"
        ]
      ],
      usedLanguage: [
        "HTML, CSS, JavaScript, Vue.js, Node.js",
        "HTML, CSS, JavaScript, Vue.js, Node.js",
        "HTML, CSS, JavaScript, Vue.js, Node.js"
      ],
      image: [
        ["/CCF-home.png", "/import.png", "/export.png"],
        ["/CCF-home.png", "/import.png", "/export.png"],
        ["/Portfolio1.jpg", "/Portfolio2.jpg", "/Portfolio3.jpg"]
      ],
      popim: ["/CCF-home.png", "/CCF-home.png", "/Portfolio1.jpg"]
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    openPop(index) {
      this.select = index;
      this.onboarding = 0;
    },
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
};
</script>
<style scoped>
.resizeimage {
  width: 100%;
}
.popColor {
  background-color: #b3e5fc;
}
.itemstr {
  font-size: 3vmin;
}
.contentstr {
  font-size: 2vmin;
}
</style>
