<script setup lang="ts">
import { computed, ref, Ref, watch } from "vue";
import MyTitle from '@/components/MyTitle.vue'
import ArtcGroup from '@/components/ArtcGroup.vue'
import PaginationGroup from '@/components/PaginationGroup.vue'
import { Post } from '@/types'


const posts: Ref<Post[] | null> = ref(null);
const displayedPosts = 8
const totalPosts = 86 // здесь планировалось получать ответ от сервера с количеством постов
const currentPage = ref(1)

function fetchPosts(){
    fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/?page=${currentPage.value}&limit=${displayedPosts}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
})
    .then((res) => res.json())
    .then((response) => {
        posts.value = response;
        console.log(response)
        console.log(currentPage.value)
    })
    .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
    })
}

fetchPosts()

watch(currentPage, ()=> fetchPosts())


const pages = computed(() => {
  return Math.ceil(totalPosts/displayedPosts)
})

function changePage(value: number){
    currentPage.value = value
    console.log(value)
}
</script>

<template>
    <div class="content--wrapper">
        <MyTitle>Article</MyTitle>
        <ArtcGroup :posts="posts"></ArtcGroup>
        <PaginationGroup v-if="pages" :pages="pages" @change-page="changePage"></PaginationGroup>
    </div>
</template>

<style>
.content--wrapper{
    width: 100%;
    max-width: 1216px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
}
</style>