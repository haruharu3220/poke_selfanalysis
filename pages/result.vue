<template>
  <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="pa-4 text-center mx-auto mt-4"
  >
    <h2 class="text-h5 mb-6">ポケモン自己診断 結果発表</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">
      あなたをポケモンに例えると...
      <!-- {{ $store.state.point }} -->
    </p>
    <v-divider class="mb-4"></v-divider>
    <p>{{ this.name }}です。</p>
    <div class="text-center"></div>
    <img :src="pokemonImage" />

    <br />

    <v-btn
      class="text-none ma-2"
      color="#1da1f2"
      rounded
      variant="flat"
      width="200"
      @click="twitterShare"
    >
      シェアする
    </v-btn>
  </v-sheet>
</template>
<style>
.custom-link {
  text-decoration: none;
  color: black;
}
</style>
<script lang="js">
const options = {
    method: 'GET',
}

export default {
    data () {
        return {
            name:'',
            pokemonImage:'',
            finalResultPoint: 1,
            url:'',

    };
  },
  methods: {
    normalizePoint() {
        const point = this.$store.state.point; // $store.state.point を変数 point に代入
        const normalizedPoint = Math.floor((point / 9) * 150) + 1;
        console.log(normalizedPoint);
        this.finalResultPoint = normalizedPoint;
        this.url = `https://pokeapi.co/api/v2/pokemon/${this.finalResultPoint}`;
    },
    async getPokemonImage(){
        const response = await fetch(this.url,options)
        .then(response => response.json());
        console.log(response);
        this.pokemonImage = response.sprites.front_default;

        // ポケモン種族情報取得.
        const speciesUrl = response.species.url;
        console.log(speciesUrl);
        const responseSpecies = await fetch(speciesUrl,options)
        .then(response => response.json());
        console.log("★★★★★★");

        console.log(responseSpecies);

        // 名前.
        const names = responseSpecies.names;
        const name = names.find((v) => v.language.name == "ja").name;

        this.name = name;
        // this.pokemonImage = response;
    },
    twitterShare(){
        //シェアする画面を設定
        var shareURL = 'https://twitter.com/intent/tweet?text=' + "ポケモン自己診断っぽいものを作ってみました。" + "あなたをポケモンに例えると。。。"+'&url=' + this.pokemonImage ;
        //シェア用の画面へ移行
        location.href = shareURL
        }
  },
  created() {
    this.normalizePoint();
    this.getPokemonImage();
  },
}
</script>
