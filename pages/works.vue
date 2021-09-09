<template>
  <v-container class="px-0" fluid style="max-width: 1400px">
    <div class="ma-0">
      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          width="800"
          v-for="(item, index) in Names"
          :key="index"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Click Me
              </v-btn> -->
            <v-col cols="12" md="4" lg="3" class="text-center">
              <v-card v-bind="attrs" v-on="on">
                <v-card-text>
                  {{ item }}
                </v-card-text>
              </v-card>
            </v-col>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              {{ item }}
            </v-card-title>

            <v-card-text>
              aaaaaaaaaaaa
            </v-card-text>

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
    };
  }
};
</script>
