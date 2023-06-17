<template>
  <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="pa-4 text-center mx-auto mt-4"
  >
    <h2 class="text-h5 mb-6">ポケモン自己診断</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">
      ポケモン自己診断っぽいものを作ってみました！
      <br />
      遊んでね！
    </p>
    <!-- 罫線(不要なので外す)
      <v-divider class="mb-4"></v-divider> -->

    <div class="text-center">
      <v-btn
        class="text-none"
        color="yellow"
        rounded
        variant="flat"
        width="200"
        to="/questions"
      >
        　診断をはじめる
      </v-btn>
    </div>
  </v-sheet>
</template>
<style>
.custom-link {
  text-decoration: none;
  color: black;
}
</style>
<script lang="js">

export default {
  data () {
    return {
    }
  },
  methods: {
    startAnalysis () {

    }
  }
}
</script>
