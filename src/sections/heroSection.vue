<script setup lang="ts">
    // import {motion} from "motion-v"
import BackGroundVideo from '@/components/backGroundVideo.vue';
import MainBtn from '@/components/mainBtn.vue';
import MainLoader from '@/components/mainLoader.vue';
import {  motion } from 'motion-v';

</script>

<template>


    <BackGroundVideo></BackGroundVideo>
    <MainLoader color=""></MainLoader>
    <div class="headline italiana-regular">
        <div class="text">
            <motion.h1
            :initial="{ opacity: 0, y: '50px' }"
            :animate="{ opacity: 1, y: '0px', transition: { duration: 1, delay: 1.5} }">
                Timeless Blooms
            </motion.h1>

            <motion.h2
            :initial="{ opacity: 0, y: '50px' }"
            :animate="{ opacity: 1, y: '0px', transition: { duration: 1, delay: 1.6} }">
                Thoughtfully Arranged
            </motion.h2>
        </div>
        <MainBtn 
        :initial="{opacity:0, y: '50px'}"
        :animate="{opacity:1, y: 0, transition : { duration: 1, delay: 1.7}}">
            Explore the Collection
        </MainBtn>
    </div>
</template>

<style scoped>

.headline {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #eaeef5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 2rem;
}

h1{
    font-size: 5rem;
}

h2{
    font-size: 3rem;
}

</style>