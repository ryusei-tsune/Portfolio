<template>
  <v-app dark>
    <v-app-bar flat color="light-blue lighten-5" max-height="80px">
      <v-col cols="7" sm="9" md="7" class="mt-2">
        <v-toolbar color="light-blue lighten-5" flat>
          <nuxt-link class="tooltitle" to="/">Portfolio</nuxt-link>
        </v-toolbar>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" class="d-none d-sm-block">
        <v-toolbar color="light-blue lighten-5 pt-4" flat>
          <v-col cols="4">
            <nuxt-link class="bartext pa-1" to="/about">About</nuxt-link>
            <!-- <v-card-text class="bartext pa-1">About</v-card-text> -->
          </v-col>
          <v-col cols="4">
            <nuxt-link class="bartext pa-1" to="/career">Career</nuxt-link>
            <!-- <v-card-text class="bartext pa-1">Career</v-card-text> -->
          </v-col>
          <v-col cols="4">
            <nuxt-link class="bartext pa-1" to="/works">Works</nuxt-link>
            <!-- <v-card-text class="bartext pa-1">Result</v-card-text> -->
          </v-col>
        </v-toolbar>
      </v-col>
      <v-col cols="3" class="hidden-md-and-up"> </v-col>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
      }
    ]
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },

  methods: {
    
  }
};
</script>

<style scoped>
.tooltitle {
  color: black;
  font-size: 60px;
  text-decoration: none;
  font-family: "Tangerine", cursive;
}
.bartext {
  color: black;
  font-size: 30px;
  text-decoration: none;
  font-family: "Tangerine", cursive;
}
</style>
