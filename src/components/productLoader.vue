<script setup lang="ts">

    import {motion} from "motion-v"

    const tabs = ["#FFD6BA","#FFE8CD","#FFF2EB","#FFDCDC"]
</script>

<template>
    <motion.div class="tab" v-for="(tab, index) in tabs" :key="`tab-${index}`"
    :initial="{
        x: '-100vw',
        backgroundColor: tab
    }"
    :animate="{
        x: '100vw',
        backgroundColor: tab,
        transition : {duration: .75, delay: index * .1, ease: [1,.12,.48,1]} 
    }"
    ></motion.div>

</template>

<style scoped>
    .tab {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;

    }
</style>