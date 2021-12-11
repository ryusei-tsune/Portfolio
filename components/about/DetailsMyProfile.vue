<template>
  <v-dialog v-model="isOpen" :fullscreen="$vuetify.breakpoint.xsOnly">
    <template v-slot:activator="{ on, attrs }">
      <div>
        <v-card-title style="font-size:3vmin;">
          常友　琉成
        </v-card-title>
        <v-card-text class="py-0">
          Tsunetomo Ryusei
        </v-card-text>
        <v-card-text class="pb-0">
          岡山大学大学院 自然科学研究科　修士課程1年
        </v-card-text>
        <v-card-text class="pb-0">
          生年月日　　　:　1998年12月26日生まれ
        </v-card-text>
        <v-card-text class="pb-0">
          出身地　　　　:　兵庫県
        </v-card-text>
        <v-card-text class="pb-0">
          所属サークル　:　テニスサークル
        </v-card-text>
        <!-- <v-card-text class="pb-0">
          マイブーム　　:　読書、料理
        </v-card-text> -->
        <v-btn
          v-bind="attrs"
          v-on="on"
          @click="isOpen = true"
          class="ml-2 my-3"
          color="orange lighten-3"
        >
          詳しくはこちらを！<v-icon>mdi-check-bold</v-icon>
        </v-btn>
      </div>
    </template>
    <v-card tile>
      <v-container>
        <div class="d-flex align-center" style="border-bottom: 2px solid aqua;">
          <v-card-text class="Profile">PROFILE</v-card-text>
          <v-spacer />
          <v-btn large icon tile @click="isOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div>
          <v-card-text>
            <span class="Subtitle">
              学歴
            </span>
          </v-card-text>
          <div v-for="(back, i) in backGround" :key="`list-background-${i}`">
            <v-card-text style="font-size:20px;">
              <v-icon color="black" small class="pr-2 mb-1">
                mdi-circle
              </v-icon>
              {{ back }}
            </v-card-text>
          </div>

          <v-card-text>
            <span class="Subtitle">
              研究
            </span>
          </v-card-text>
          <v-card-text style="font-size:20px;" class="font-weight-bold">
            ARマーカとSLAMを用いた屋内向けARナビゲーションシステムに関する研究
          </v-card-text>

          <v-card-text class="mb-3">
            <span class="Subtitle">
              Programing Skills
            </span>
          </v-card-text>
          <div>
            <v-row v-for="(item, j) in skills" :key="`item-skill-${j}`">
              <v-col cols="12" md="3" style="text-align: center;">
                <v-btn
                  text
                  plain
                  style="text-transform: none; font-size:20px;"
                  @click="chengeSkill(j)"
                >
                  <span class="btn-horizontal-border">
                    {{ item.language }}
                  </span>
                </v-btn>
              </v-col>
              <v-col cols="12" md="9">
                <v-progress-linear
                  :value="item.skill"
                  :color="item.color"
                  height="40"
                >
                  <strong>{{ Math.ceil(item.skill) }}%</strong>
                </v-progress-linear>
                <br />
              </v-col>
            </v-row>
          </div>
          <v-row justify="center" class="pb-4">
            <v-col cols="12" md="9">
              <v-card>
                <v-card-title style="font-size:20px;">{{ details[select].name }}</v-card-title>
                <v-card-text style="font-size:20px;" >{{ details[select].comment }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-card-text>
            <span class="Subtitle">
              好きなセリフ
            </span>
          </v-card-text>
          <v-card-text style="font-size:20px;" class="font-weight-bold pb-0">
            「オレが知りてーのは楽な道のりじゃねェ　険しい道の歩き方だ」
          </v-card-text>
          <v-card-text style="font-size:10px;" class="text-right gray pt-1" >
            By うずまきナルト「NARUTO-ナルト-　疾風伝　605話より」
          </v-card-text>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {},
  data() {
    return {
      isOpen: false,
      backGround: [
        "2014年4月　兵庫県立龍野高等学校普通科　入学",
        "2017年3月　兵庫県立龍野高等学校普通科　卒業",
        "2017年4月　岡山大学工学部情報系学科　入学",
        "2021年3月　岡山大学工学部情報系学科　卒業",
        "2021年4月　岡山大学大学院自然科学研究科電子情報システム工学専攻　入学"
      ],
      skills: [
        { language: "C", color: "red", skill: 70 },
        { language: "C#", color: "green", skill: 50 },
        { language: "HTML5/CSS3", color: "orange", skill: 50 },
        { language: "JavaScript", color: "yellow", skill: 40 },
        { language: "Vue.js", color: "lime", skill: 40 },
        { language: "Node.js", color: "cyan", skill: 40 },
        { language: "Python", color: "blue", skill: 40 },
        { language: "Julia", color: "purple", skill: 10 }
      ],
      details: [
        {
          name: "C",
          comment:
            "大学の授業で使用してきました。一番使い慣れたプログラミング言語です。画像処理や通信を行うプログラムを作成したことがあり、調べながらであれば自分一人で記述が出来るレベルです。"
        },
        {
          name: "C#",
          comment:
            "現在研究でUnityと一緒に使用しています。ほぼ毎日触れているので、今一番身近な言語と言えます。まだまだ知識が足りず、日々調べながら学んでいます。"
        },
        {
          name: "HTML5/CSS3",
          comment:
            "最近力を入れて学んでいます。思い通りのデザインを作成するのが難しく悪戦苦闘しています。"
        },
        {
          name: "JavaScript",
          comment:
            "HTML/CSSと一緒に学んでいます。Webアプリケーションを実際に作成しながら勉強中です。"
        },
        {
          name: "Vue.js",
          comment:
            "フロントエンドのフレームワークとして勉強しています。まだまだ使いこなせていないため、もっと利用していこうと思います。"
        },
        {
          name: "Node.js",
          comment:
            "GETやPOSTの処理、データベースの利用などで使用してきました。もっとサーバサイドの記述が出来るように勉強していきます。"
        },
        {
          name: "Python",
          comment:
            "現在AtCoderに参加する際に使用しています、レートはまだまだ低いです！！また、OpenCV等の画像処理を中心に勉強しています。"
        },
        {
          name: "Julia",
          comment:
            "最近勉強し始めました。今後、機械学習を行う際に利用したいと考えています。"
        }
      ],
      select: 0
    };
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    chengeSkill(index) {
      this.select = index;
    }
  }
};
</script>
<style scoped>
.Profile {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
}
.Subtitle {
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(transparent 50%, lightgreen 50%);
}
.btn-horizontal-border {
  position: relative;
  display: inline-block;
  padding: 12px 0 8px;
  color: black;
  transition: 0.4s;
}

.btn-horizontal-border:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 4px;
  top: 100%;
  left: 0;
  border-radius: 3px;
  background: #67c5ff;
  transition: 0.2s;
}

.btn-horizontal-border:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 4px;
  top: 0;
  left: 0;
  border-radius: 3px;
  background: #67c5ff;
  transition: 0.2s;
}

.btn-horizontal-border:hover:before {
  top: -webkit-calc(100% - 3px);
  top: calc(100% - 3px);
}

.btn-horizontal-border:hover:after {
  top: 3px;
}
</style>
