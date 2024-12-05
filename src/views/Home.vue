<template>
  <div>
    <h1>Home</h1>
    <p>{{ $route }}</p>
    ㄴ현재 페이지에 대한 정보
    <br>
    <hr>
    <p>{{ $route.path }}</p>
    ㄴ현재 주소 <br>
    <hr>
    <p>{{ $route.name }}</p>
    ㄴ컴포넌트의 이름은? <br>
    <hr>

    <button v-on:click="$router.push('/about')">About page로 이동</button><br><br>
    <button v-on:click="goPort">Portfolio page로 이동</button>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

  //script route 객체를 사용할 때
  const go = useRouter()

  const goPort = () => {
    go.push('/portfolio')
  }
</script>

<style>

</style>