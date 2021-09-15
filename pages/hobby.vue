<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <div class="ma-0 px-2">
      <v-card flat tile color="#F5F5F5">
        <v-window v-model="onboarding">
          <v-window-item
            v-for="(hobby, index) in Hobbies"
            :key="index"
          >
            <v-card>
              <v-row class="fill-height" align="center" justify="center">
                <v-card-text class="mb-2 backcolor">
                  {{ hobby }}
                </v-card-text>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>

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
    </div>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: '',
    }
  },
  layout: 'default',
  components: {},
  middleware: [],
  data() {
    return {
      onboarding: false,
      Hobbies: ["Tennis", "Programing", "Anime"], 
      length: 3
    }
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
  },
}
</script>
<style scoped>
.backcolor {
  background-color: #F5F5F5;
}
</style>
