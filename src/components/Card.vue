<template>
  <div class="p-3">
    <article class="card shadow" >
      <a :href="'https://www.themoviedb.org/movie/' + aa.id" target="_blank">
        <img v-if="aa.poster_path" :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + aa.poster_path" class="card-img-top">
        <img v-else src="/picture.svg" alt="" class="emptyImg">

        <div class="card-body">
          <h5 class="card-title">{{ aa.title }}</h5>
        </div>
      </a>
    </article>
  </div>  
</template>

<script setup>
  const props = defineProps(['aa'])
</script>

<style>
  .card { padding-right: 0; padding-left: 0; }
  .card-body { height:80px; }
  .card-title { 
    display:-webkit-box; 
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    }
  .card a { text-decoration:none; color:#4d4d4d; }
  .card a:hover { color:black; }
  .emptyImg { 
    width:100%; 
    aspect-ratio: 2 / 3;   /* aspect-ratio(비율) : 가로 / 세로*/
    background: #e4e4e4;
    }
</style>