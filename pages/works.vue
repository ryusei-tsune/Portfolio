<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <div class="ma-0">
      <!-- <v-dialog
          v-model="dialog"
          width="800"
          v-for="(item, index) in Names"
          :key="index"
        > -->
      <v-dialog v-model="dialog" width="800">
        <template v-slot:activator="{ on, attrs }">
          <v-row justify="center">
            <v-col
              cols="12"
              md="4"
              lg="3"
              class="text-center"
              v-for="(item, index) in Names"
              :key="index"
            >
              <v-card v-bind="attrs" v-on="on" @click="openPop(index)">
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
              <v-window-item
                v-for="(content, index) in Contents[select]"
                :key="index"
              >
                <img class="resizeimage pt-2 pb-3 popBack" :src="image[select][index]" />
                <v-divider></v-divider>
                <v-card>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-card-text class="mb-2">
                      {{ content }}
                    </v-card-text>
                  </v-row>
                </v-card>
              </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions class="justify-space-between">
              <v-btn text @click="prev">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-item-group v-model="onboarding" class="text-center" mandatory>
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
          </v-card>

          <!-- <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions> -->
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
      Names: ["CCF(Create csv File)", "Household-Account-Book", "Portfolio"],
      length: 3,
      onboarding: 0,
      select: 0,
      Contents: [
        ["aaaaaaaaaaaaa", "bbbbbbbbbbbb", "ccccccccccc"],
        ["ddddddddddd", "eeeeeeeeeeee", "fffffffffff"],
        ["ggggggggggg", "hhhhhhhhhhhhh", "iiiiiiiiiiii"]
      ],
      image: [
        ["/CCF1.jpg", "/CCF2.jpg", "/CCF3.jpg"],
        ["/CCF1.jpg", "/CCF2.jpg", "/CCF3.jpg"],
        ["Portfolio1.jpg", "Portfolio2.jpg", "Portfolio3.jpg"]
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
  background-color: #B3E5FC;
}
</style>
