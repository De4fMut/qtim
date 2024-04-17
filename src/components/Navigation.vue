<template>
    <nav class="flex-link">
        <button class="logo-btn" @click="() => $router.push('/')">
            <img src="@/assets/svg/qtim.svg" alt="Qtim logo" />
        </button>
        <div class="flex-link flex-link--group">
            <div class="flex-link">
                <router-link to="/">Works</router-link>
                <router-link to="/posts/0">About</router-link>
            </div>
            <div class="flex-link">
                <button class="side-btn"><img src="@/assets/svg/uk.svg" alt="ENG"></button>
                <button class="side-btn lets-work">Let&rsquo;s work</button>
            </div>
        </div>
    </nav>
</template>

<style>
.logo-btn{
    border: unset;
    background: unset;
}

.side-btn{
    border-radius: 999px;
    height: 52px;
    min-width: 52px;
    border: 2px solid rgba(232, 232, 232, 1);
    background: transparent;
}

.lets-work{
    border: unset;
    background: rgba(16, 16, 16, 1);
    color: rgba(255, 255, 255, 1);
    width: 142px;
    font-size: 20px;
    font-weight: 400;
    /* padding: 16px 32px; */
}
</style>