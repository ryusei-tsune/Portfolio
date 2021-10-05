<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(item, index) in items"
        :key="index"
      >
        <DetailsDialog :title="item.title">
          <template v-slot:activator="{ on, attrs }">
            <v-card v-bind="attrs" v-on="on">
              <div class="pa-2">
                <img :src="item.thumbnail" style="width:100%;" />
              </div>
              <v-divider></v-divider>
              <v-card-text class="pa-2">
                {{ item.title }}
              </v-card-text>
            </v-card>
          </template>
          <v-divider></v-divider>
          <v-carousel
            hide-delimiter-background
            :height="$vuetify.breakpoint.xsOnly ? 200 : 500"
          >
            <v-carousel-item
              v-for="(url, urlIndex) in item.headerImages"
              :key="`item-${index}-header-images-${urlIndex}`"
              :src="url"
              eager
              contain
              class="grey lighten-4"
            ></v-carousel-item>
          </v-carousel>
          <v-divider></v-divider>
          <v-container class="px-1 px-sm-3">
            <DetailsRow header="タイトル">
              {{ item.title }}
            </DetailsRow>
            <DetailsRow header="概要">
              <div
                v-for="(line, lineIndex) in item.summaries"
                :key="`item-${index}-summary-${lineIndex}`"
                v-text="line"
              />
            </DetailsRow>
            <DetailsRow header="使用言語">
              {{ item.language }}
            </DetailsRow>
            <DetailsRow header="URL" v-if="item.urls.length != 0">
              <div
                v-for="(url, urlIndex) in item.urls"
                :key="`item-${index}-url-${urlIndex}`"
              >
                <a :href="url" target="_blank" rel="noopener noreferrer">{{
                  url
                }}</a
                ><v-icon color="grey" small class="ml-1"
                  >mdi-open-in-new</v-icon
                >
              </div>
            </DetailsRow>
          </v-container>
        </DetailsDialog>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import DetailsDialog from "~/components/works/DetailsDialog.vue";
import DetailsRow from "~/components/works/DetailsRow.vue";
export default {
  components: { DetailsDialog, DetailsRow },
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
      url: [
        "https://ccf-gotohlab.herokuapp.com/",
        "https://household-account-book.glitch.me/",
        ""
      ],
      image: [
        ["/CCF-home.png", "/CCF-import.png", "/CCF-export.png"],
        ["/h-login.png", "/h-create.png", "/h-input.png", "/h-history.png"],
        [
          "/Portfolio-index.png",
          "/Portfolio-about.png",
          "/Portfolio-hobby.png",
          "/Portfolio-work.png"
        ]
      ],
      popim: ["/CCF-home.png", "/h-history.png", "/Portfolio-index.png"]
    };
  },
  watch: {},
  computed: {
    items() {
      return [
        {
          title: "CCF (Create CSV File)",
          thumbnail: "/CCF-home.png",
          headerImages: ["/CCF-home.png", "/CCF-import.png", "/CCF-export.png"],
          summary: `CCFは私が所属する後藤研究室で利用するためのWebアプリケーションです。
研究室のホームページでメンバー情報を公開する際に、事前準備として情報を記入したCSVファイルを作成します。
これまでは手入力でCSVファイルを作成しており、手間であったため、このアプリケーションを利用することでその手間を少しでも減らせればと思い作成しました。
今後研究室のホームページを編集するのが楽になればと思っています！！！`,
          language: "HTML, CSS, JavaScript, Vue.js, Node.js",
          urls: ["https://ccf-gotohlab.herokuapp.com/"]
        },
        {
          title: "Household-Account-Book",
          thumbnail: "/h-history.png",
          headerImages: [
            "/h-login.png",
            "/h-create.png",
            "/h-input.png",
            "/h-history.png"
          ],
          summary: `Household-Account-Bookは私が家計簿をつけるためのWebアプリケーションです。
私が以前使っていた家計簿アプリはiOS、Androidにしか対応しておらず、PCで使うことが出来ませんでした。最近ではマネーフォワード等の携帯端末だけでなくWebで利用することが出来るアプリがありますが、今回はWebのみでよりシンプルに利用することが出来るアプリケーションを作成しようと思いました。
今回実装した機能はアカウント作成機能、ログイン機能、支出入の登録、登録情報の参照を実装しました。
まだまだ改善の余地ありな家計簿です！！！`,
          language: "HTML, CSS, JavaScript, Vue.js, Node.js",
          urls: ["https://household-account-book.glitch.me/"]
        },
        {
          title: "Portfolio",
          thumbnail: "/Portfolio-index.png",
          headerImages: [
            "/Portfolio-index.png",
            "/Portfolio-about.png",
            "/Portfolio-hobby.png",
            "/Portfolio-work.png"
          ],
          summary: `Portfolioは今ご覧頂いているページです。
Portfolioは私自身について少しでも知って頂けたらと思い作成しています。今の自分が作れる最高のページを！！
制作物は今後もっと増やして行きたいと考えています。また、自身の技術力の向上に伴い都度都度このページも編集していきたいと思います。
目指せ最高のポートフォリオ！！！`,
          language: "HTML, CSS, JavaScript, Vue.js, Node.js",
          urls: ["https://ryusei-portfolio.herokuapp.com/"]
        }
      ].map(item => ({ ...item, summaries: item.summary.split("\n") }));
    }
  },
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
  //   openPop(index) {
  //     this.select = index;
  //     this.onboarding = 0;
  //   },
  //   next() {
  //     this.onboarding =
  //       this.onboarding + 1 === this.image[this.select].length
  //         ? 0
  //         : this.onboarding + 1;
  //   },
  //   prev() {
  //     this.onboarding =
  //       this.onboarding - 1 < 0
  //         ? this.image[this.select].length - 1
  //         : this.onboarding - 1;
  //   }
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
.title {
  text-align: right;
}
.titlemargin {
  text-align: left;
  padding-top: 0px;
  padding-bottom: 0px;
}
.smargin {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
