<script setup lang="ts"></script>

<template>
    <div class="loading"></div>
</template>

<style>
.loading {
    background: rgb(235, 235, 235);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.loading::before {
    content: "";
    height: 2rem;
    width: 2rem;
    animation: rotate infinite;
    animation-duration: 12s;
    animation-timing-function: linear;
    border-radius: 999999px;
    padding: 3px;
    background: linear-gradient( black , rgba(255, 255, 255, 0.6) 90%);
    -webkit-mask: 
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
}

@keyframes rotate {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(3600deg);
  }
}
</style>
