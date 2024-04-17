<script setup lang="ts">
// import { inject } from 'vue';
import Artc from '@/components/Artc.vue';
// import { inject } from 'vue';

// const compName: string = inject('component')
// const component = import(`./${compName}.vue`)
// console.log(compName)
</script>

<template>
    <Artc>
        <div class="loading">

        </div>
    </Artc>
</template>

<style>
.loading{
    width: 100%;
    height: 100%;
    background: #000;
}
</style>