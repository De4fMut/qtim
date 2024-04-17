<script setup lang="ts">
import MyTitle from '@/components/MyTitle.vue';
import ArtcCard from '@/components/ArtcCard.vue';
import { ref, Ref} from 'vue'
import { useRoute } from 'vue-router';
import { Post } from '@/types'

const route = useRoute()

const post: Ref<Post | null> = ref(null);

    console.log(route.params.postId)

fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${Number(route.params.postId)}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
})
    .then((res) => res.json())
    .then((response) => {
        post.value = response;
    })
    .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
    });

</script>

<template>
    <div class="content--wrapper">
        <MyTitle>At Test & Code, you can learn about software design</MyTitle>
        <ArtcCard :post="post"></ArtcCard>
    </div>
</template>