<script setup>
import { ref, onMounted, reactive, toRefs } from 'vue';
import AsideComp from './components/AsideComp.vue'
import UserDetail from './components/UserDetail.vue';

// const URL = "https://randomuser.me/api/?results=24";

// const data = reactive({
//     items: [],
//     loading: false,
//     error: null
// })

// const getData = async () => {
//     try {
//         data.loading = true;
//         const response = await fetch(URL);
//         data.items = await response.json();
//     } catch (error) {
//         data.error = error;
//     } finally {
//         data.loading = false;
//     }
// }

// onMounted(getData)

// newData = {
//     ...toRefs(data),
// }

// console.log(data.items)

</script>

<template>
  <div class="grid p-20 items-center h-[100vh] grid-cols-[minmax(350px,_33%)_1fr] max-width-[1200px]">
    <AsideComp></AsideComp>
    <UserDetail></UserDetail>
  </div>
</template>