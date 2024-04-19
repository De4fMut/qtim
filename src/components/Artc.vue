<script setup lang="ts">
import LoadingComponent from "@/components/LoadingComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";
import def from "@/assets/svg/qtim.svg";

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

const loading = ref(true);
const error = ref(false);
const img = new Image();

img.src = props.post.image;
// img.onload = () => setTimeout(() => {
//     (loading.value = false);
// }, 1000);
img.onload = () => (loading.value = false);
img.onerror = () => {
    img.src = def;
    error.value = true;
};

</script>

<template>
    <div
        class="post"
        @mouseenter="onOver"
        @mouseleave="onLeave"
        @click="props.post ? $router.push(`/posts/${props.post.id}`) : null"
        :style="{ cursor: over ? 'pointer' : 'auto' }"
    >
        <div class="post--img">
                <img
                v-if="!loading && !error"
                    :src="img.src"
                    :alt="props.post.title"
                    :class="{
                        error,
                        default: !error,
                    }"
                />
                <LoadingComponent v-if="loading && !error"></LoadingComponent>
                <ErrorComponent v-if="!loading && error"></ErrorComponent>
        </div>
        <div class="post--preview">
            <p>{{ props.post.preview }}</p>
        </div>
        <div class="post--link" v-show="over">
            <router-link :to="`/posts/${props.post.id}`">Read more</router-link>
        </div>
        <slot> </slot>
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
    /* object-fit: cover; */
    margin-bottom: 25px;
}

.default {
    height: 100%;
    width: 100%;
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
