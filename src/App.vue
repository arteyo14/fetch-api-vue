<script setup>
import { ref, onMounted, reactive, toRefs } from 'vue';
import AsideComp from './components/AsideComp.vue'
import UserDetail from './components/UserDetail.vue';
import axios from 'axios';

const URL = "https://randomuser.me/api/?results=24";

</script>

<template>
  <div class="grid p-20 items-center h-[100vh] grid-cols-[minmax(350px,_33%)_1fr] max-width-[1200px]">
    <AsideComp :data="data"></AsideComp>
    <UserDetail></UserDetail>
  </div>
</template>