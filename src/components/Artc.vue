<script setup lang="ts">
import { ref, Ref } from "vue";
import { Post } from "@/types";

const props = defineProps<{
    post: Post;
}>();

const over: Ref<boolean> = ref(false);

function onOver() {
    over.value = true;
}
function onLeave() {
    over.value = false;
}
</script>

<template>
    <div
        class="post"
        @mouseenter="onOver"
        @mouseleave="onLeave"
        @click="$router.push(`/posts/${props.post.id}`)"
        :style="{ cursor: over ? 'pointer' : 'auto' }"
    >
        <div class="post--img">
            <img :src="props.post.image" :alt="props.post.title" />
        </div>
        <div class="post--preview">
            <p>{{ props.post.preview }}</p>
        </div>
        <div class="post--link" v-show="over">
            <router-link :to="`/posts/${props.post.id}`">Read more</router-link>
        </div>
    </div>
</template>

<style>
.post {
    width: 280px;
    margin-bottom: 50px;
}

.post:hover {
    transform: translateY(-20px);
    margin-bottom: 0px;
}

.post--img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin-bottom: 25px;
}

.post--img img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    /* margin-bottom: 25px; */
}

.post--preview {
    height: 75px;
}

.post--link {
    margin-top: 12px;
}
</style>
