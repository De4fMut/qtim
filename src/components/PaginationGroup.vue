<script setup lang="ts">
import PaginationButton from "./PaginationButton.vue";

import { ref } from "vue";
// import { Post } from '@/types'

const props = defineProps<{
    pages: number;
}>();

const displayedPages = ref(6);
// const startPage = ref(0)
// const endPage = ref(6)
// const pagesArray: number[] = reactive([]);

const multiplier = ref(0)
function increaseMultiplier(value: number){
    if (multiplier.value < props.pages - displayedPages.value){
    multiplier.value = multiplier.value + value}
}
function decreaseMultiplier(value: number){
    if (multiplier.value >= 0){
    multiplier.value = multiplier.value - value}
}
</script>

<template>
    <div class="pag-group">
        <template v-for="page in displayedPages">
            <PaginationButton
                :swap="true"
                v-if="page-1 == 0 && multiplier !== 0"
                @click="decreaseMultiplier(displayedPages)"
            >
                <img style="transform: rotateY(180deg);" src="@/assets/svg/arrowRight.svg" alt="" />
            </PaginationButton>
            <PaginationButton
                v-if="page < displayedPages"
                @click="$emit('changePage', page + multiplier)"
            >
                {{ page + multiplier }}
            </PaginationButton>
            <PaginationButton
                :swap="true"
                v-if="page == displayedPages && page-1 + multiplier !== props.pages "
                @click="increaseMultiplier(displayedPages)"
            >
                <img src="@/assets/svg/arrowRight.svg" alt="" />
            </PaginationButton>
        </template>
    </div>
</template>

<style>
.pag-group {
    width: 304px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 140px;
}
</style>
