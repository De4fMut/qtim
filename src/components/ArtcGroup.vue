<script setup lang="ts">
// import Artc from "@/components/Artc.vue";
import LoadingComponent from '@/components/LoadingComponent.vue'
import ErrorComponent from '@/components/ErrorComponent.vue'
import { defineAsyncComponent, provide } from 'vue'
import { Post } from "@/types";


provide('component', 'Artc')
const Artc = defineAsyncComponent(({
  // функция загрузчика
  loader: () => import('@/components/Artc.vue'),

  // компонент, используемый при загрузке асинхронного компонента
  loadingComponent: LoadingComponent,
  // Задержка перед отображением компонента загрузки. По умолчанию: 200 мс.
  delay: 200,

  // компонент, используемый при ошибке загрузки
  errorComponent: ErrorComponent,
  // Компонент ошибки будет отображаться, если указано и было превышено время ожидания. По умолчанию: Infinity.
  timeout: 3000
}))

const props = defineProps<{
    posts: Post[] | null;
}>();
</script>

<template>
    <div class="posts--wrapper">
        <Artc v-for="(post, index) in props.posts" :key="index" :post="post" />
        <!-- <div></div>
        <div></div> -->
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
/* .posts--wrapper div{
    flex: 0 0 280px;
}
.posts--wrapper div:last-of-type{
    flex: 1 1 0;
} */
</style>
