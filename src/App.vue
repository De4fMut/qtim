<script setup lang="ts">

import Navigation from "@/components/Navigation.vue";
import MyFooter from "@/components/MyFooter.vue";


</script>

<template>
    <header id="header">
        <Navigation />
    </header>
    <main id="main">
        <router-view></router-view>
    </main>
    <footer id="footer">
        <MyFooter />
    </footer>
</template>

<style>
#header {
    flex: 0 0 121px;
    padding: 35px 2%;
}

.flex-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-link--group div:first-child {
    width: 155px;
    margin-right: 90px;
}

.flex-link--group div:last-child {
    width: 210px;
}

#main {
    display: flex;
    place-items: center;
    margin: 0 auto;
}

#footer {
    flex: 0 0 900px;
    background: rgba(226, 190, 255, 1);
    padding: 0 5%;
}
</style>
