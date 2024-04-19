<script setup lang="ts">
import LoadingComponent from "@/components/LoadingComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";
import def from "@/assets/svg/qtim.svg";

import { ref } from 'vue'
import { Post } from '@/types'

const props = defineProps<{
    post: Post
}>()

const loading = ref(true);
const error = ref(false);
const img = new Image();

img.src = props.post.image;
img.onload = () => (loading.value = false);
img.onerror = () => {
    img.src = def;
    error.value = true;
};
</script>

<template>
    <div class="card--wrapper">
        <div>
            <img v-if="!loading && !error" class="card--img" :src="props.post?.image" :alt="props.post?.title">
            <LoadingComponent v-if="loading && !error" class="card--img"></LoadingComponent>
            <ErrorComponent v-if="!loading && error" class="card--img"></ErrorComponent>
        </div>
        <div class="card--desc">
            <p>About</p>
            <p>{{ props.post?.description }}</p>
        </div>
    </div>
</template>

<style>

.card--img{
    width: 1216px;
    height: 700px;
    object-fit: cover;
}
.card--desc{
    max-width: 695px;
    font-size: 36px;
}

.card--desc p:first-of-type{
    margin-bottom: 32px;
    font-size: 16px;
}
</style>