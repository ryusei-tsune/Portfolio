<template>
  <v-dialog v-model="isOpen" width="800">
    <template v-slot:activator="{ on, attrs }">
      <div>
        <v-card-title style="font-size:3vmin;">
          常友　琉成
        </v-card-title>
        <v-card-text class="py-0">
          Tsunetomo Ryusei
        </v-card-text>
        <v-card-text>
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
      <div style="font-size:20px;">
        <v-card-text class="Profile">PLOFILE</v-card-text>
        <div class="ma-3">
          <v-card-text>
            <span class="Subtitle">
              学歴
            </span>
          </v-card-text>
          <div v-for="(back, i) in backGround" :key="`list-background-${i}`">
            <v-card-text>
              <v-icon color="black" small>
                mdi-circle
              </v-icon>
              {{ back }}
            </v-card-text>
          </div>

          <v-card-text>
            <span class="Subtitle">
              Programing Skills
            </span>
          </v-card-text>
          <div class="pb-6">
            <v-row v-for="(item, j) in skills" :key="`item-skill-${j}`">
              <v-col cols="12" md="3">
                {{ item.language }}
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
        </div>
      </div>
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
      skills: [{ language: "HTML5/CSS3", color: "red", skill: 50 }]
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
<style scoped>
.Profile {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  border-bottom: 2px solid aqua;
}
.Subtitle {
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(transparent 50%, lightgreen 50%);
}
</style>
