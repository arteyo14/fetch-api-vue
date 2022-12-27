<script setup>
import { ref,onMounted, computed } from 'vue';
import getData from '../service/service';

const users = ref([])
const searchTerms = ref("");
onMounted(() => getData(users));

const filterUsers = computed(() => {
    let result = users.value;
    result = result.filter(user => {
        let userName = `${user.name.title}.${user.name.first} ${user.name.last}`;
        let searchValue = searchTerms.value;
        let checkUserName = userName.toLowerCase().includes(searchValue.toLowerCase());
        let checkUserEmail = user.email.toLowerCase().includes(searchValue.toLowerCase());
        return checkUserName || checkUserEmail;
    })
    return result;
})

</script>

<template>
    <section class="w-[100%] h-[100%] bg-white overflow-auto">
        <div class="sticky top-0">
            <div class="flex items-center p-4 bg-[#EDEDED] h-20">
                <img class="mr-4 w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="user-img">
                <span>
                    <h1 class="text-[#999999] text-lg font-extrabold">YOUR NAME</h1>
                </span>        
            </div>
            <div class="flex items-center p-4 bg-[#F6F6F6] h-14">
                <div class="flex w-[100%] items-center gap-4 bg-white rounded-full p-2 ">
                    <label class="ml-2" for="search__input">search</label>
                    <input v-model="searchTerms" class="w-full h-[100%] focus:outline-none bg-transparent" id="search__input" type="search" placeholder="Search your friend">
                </div>
            </div>
        </div>
        <div class="overflow-auto">
            <ul class="w-full" v-for="user in filterUsers" :key="user.id">
                <li class="flex w-[100%] items-center gap-4 px-4 py-2 hover:bg-[#ededed] cursor-pointer">
                    <img class="w-18 h-18 rounded-full" :src="user.picture.medium" alt="user-img">
                    <div>
                        <p class="text-xl font-bold">{{ user.name.title }}.{{ user.name.first }}  {{ user.name.last }}</p>
                        <span class="text-[#999]">{{ user.email }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    
</template>