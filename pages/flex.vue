<template>
  <v-container>
    <div class="d-flex cover">
      <div class="blue">長い長い長い長い長い長い</div>
      <div class="child red">2</div>
      <div class="child green">3</div>
      <div class="child yellow">4</div>
      <div class="child purple">5</div>
    </div>
    <div class="cover">
      <div class=" blue">長い長い長い長い長い長い</div>
      <div class="child red">2</div>
      <div class="child green">3</div>
      <div class="child yellow">4</div>
      <div class="child purple">5</div>
    </div>
  </v-container>
</template>
<style scoped>
.child {
  display: inline-block;
}
.cover {
  justify-content: space-between;
}

/* 
@media screen and (max-width: 479px) {
  .child {
    background-color: green;
  }
}
.child {
  background-color: red;
}
@media screen and (min-width: 480px) and (max-width: 767px) {
  .child {
    background-color: yellow;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .child {
    background-color: purple;
  }
}
@media screen and (min-width: 1024px) {
  .child {
    background-color: orange;
  }
} */
</style>
