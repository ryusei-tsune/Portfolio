<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <div class="ma-0">
      <v-row justify="center">
        <!-- <v-dialog
          v-model="dialog"
          width="800"
          v-for="(item, index) in Names"
          :key="index"
        > -->
        <v-dialog
          v-model="dialog"
          width="800"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-col cols="12" md="4" lg="3" class="text-center">
              <v-card v-bind="attrs" v-on="on">
                <v-card-text>
                  aaaaaa
                  <!-- {{ item }} -->
                </v-card-text>
              </v-card>
            </v-col>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              aaaaa<!--{{ item }} -->
            </v-card-title>

            <v-card flat tile color="grey">
              <v-window v-model="onboarding">
                <v-window-item v-for="n in length" :key="`card-${n}`">
                  <v-card color="grey">
                    <v-row class="fill-height" align="center" justify="center">
                      <h1 style="font-size: 5rem;" class="white--text">
                        Slide {{ n }}
                      </h1>
                    </v-row>
                  </v-card>
                </v-window-item>
              </v-window>
              <v-card-actions class="justify-space-between">
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
            </v-card>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      Names: ["CCF(Create CSV File)", "Household-Account-Book", "Portfolio"],
      length: 3,
      onboarding: 0
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
