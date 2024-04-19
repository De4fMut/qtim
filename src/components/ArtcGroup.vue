<script setup lang="ts">
import Artc from "@/components/Artc.vue";
import { Post } from "@/types";

const props = defineProps<{
    posts: Post[] | null;
}>();

console.log(props.posts)
</script>

<template>
    <div class="posts--wrapper">
        <Artc
            v-for="post in props.posts"
            :key="post.id"
            :post="!props.posts ? null : post"
        >
        </Artc>
    </div>
</template>

<style>
.posts--wrapper {
    align-self: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 0px;
}

@media (max-width: 1080px) {
    .posts--wrapper {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 1020px) {
    .posts--wrapper {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 641px) {
    .posts--wrapper {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
