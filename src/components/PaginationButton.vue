<script setup lang="ts">
import { reactive } from "vue";

interface BtnStyleProps {
    default?: boolean;
    swap?: boolean;
}
const props = withDefaults(defineProps<BtnStyleProps>(), {
    default: true,
    swap: false,
});

const buttonStyle = reactive({
    'default-btn': props.default,
    'swap-btn': props.swap,
});
</script>

<template>
    <button :class="[buttonStyle, 'pagination-btn']"><slot></slot></button>
</template>

<style>
.pagination-btn {
    width: 44px;
    height: 44px;
    border-radius: 12px;
}

.default-btn {
    background: rgba(243, 243, 243, 1);
}

.default-btn:hover {
    background: rgba(232, 232, 232, 1);
}

.default-btn:focus, .default-btn:focus-visible {
    background: rgba(16, 16, 16, 1);
    color: rgba(255, 255, 255, 1);
}

.swap-btn {
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(232, 232, 232, 1)
}

.swap-btn:hover {
    background: rgba(232, 232, 232, 1);
}
</style>
