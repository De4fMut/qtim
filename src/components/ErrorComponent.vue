<script setup lang="ts">
import def from "@/assets/svg/qtim.svg";
</script>

<template>
    <div class="error">
        <img :src="def" alt="Error">
    </div>
</template>

<style>
.error {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    border: 5px solid rgba(0, 0, 0, 0.6);
}

.error::before {
    content: 'Error';
    margin-bottom: 1rem;
}
</style>