<script setup lang="ts">
// import { ref, Ref } from 'vue'
import { Post } from '@/types'

const props = defineProps<{
    post: Post | null
}>()
</script>

<template>
    <div class="card--wrapper">
        <div >
            <img class="card--img" :src="props.post?.image" :alt="props.post?.title">
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
    /* max-width: ; */
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