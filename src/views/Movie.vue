<template>
  <div class="my-4 text-center">
    <h1 class="fs-1">The <strong>Movie</strong> DataBase</h1>
    <form class="mt-3" v-on:submit.prevent="handleSearch">
      <input type="search" class="form-control shadow m-auto" v-model.trim.lazy="search_query">


    </form>
  </div>

  <main class="">
    <div class="cards row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      <Card v-for="item in movieList "v-bind:aa="item"/>
    </div>
  </main>

</template>

<script setup>
import Card from '@/components/Card.vue';
import { ref } from 'vue';


const movieList = ref([]) //받아온 data를 moveList 객체에 array형식으로 넣어줌 

const search_query = ref('')

const handleSearch = async () => {
  movieList.value = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search_query.value}&page=1&include_adult=false&api_key=45fcb150351f5049358ecdb91b91b4e0`)
  .then(res => res.json())
  .then(data => data.results)  //위 then의 리턴값을 data로 받아옴 -> 그 중 results만 받아옴
  
}




/* 패이지 로딩되면 인기영화가 자동으로 들어옴

const popular = async () => {
  movieList.value = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=45fcb150351f5049358ecdb91b91b4e0')
  .then(res => res.json())
  .then(data => data.results)  //위 then의 리턴값을 data로 받아옴 -> 그 중 results만 받아옴
}

popular()

*/

</script>

<style scoped>
  .form-control { max-width: 600px; }

</style>