<template>
  <div id="overlay" @click="close()">
    <div id="content">
      <v-card>
        <img
          class="pt-2 px-2 popBack"
          style=" height:100%; width:100%; object-fit: contain;"
          :src="imagesrc[tab][index]"
        />
        <v-card-text v-if="imagesrc[tab][index] == 'no-image.jpg'">
          只今画像を準備中です。
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    tab: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      imagesrc: [
        ["no-image.jpg", "no-image.jpg", "no-image.jpg"],
        ["about4.jpg", "about5.jpg", "about6.jpg"],
        ["no-image.jpg", "about8.jpg", "about9.jpg"]
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
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
#overlay {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 1001;
  width: 50%;
  padding: 1em;
  background: #fff;
  justify-content: center;
}
</style>
