<script setup lang="ts">
    import {motion} from "motion-v"
    
</script>

<template>
    <motion.div :initial="{
        scaleY : 0
    }"
    :animate="{
        scaleY : 1,
        transition : { duration : 1.5,  easing: [0.94,0,0.04,1]} 
    }"
    class="loader">
        <motion.p class="counter">100%</motion.p>

    </motion.div>

</template>

<style scoped>
    .loader {
        height: 100dvh;
        width: 100dvw;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #0A0A0A;
    }

    .counter {
        position: absolute;
        bottom: 100%;
        left: 0;
        font-size: 5rem
    }
</style>