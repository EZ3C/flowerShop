<script setup lang="ts">
    // import {motion} from "motion-v"
import BackGroundVideo from '@/components/backGroundVideo.vue';
import MainBtn from '@/components/mainBtn.vue';
import { motion } from 'motion-v';

</script>

<template>
    <div class="heroSection">
        <BackGroundVideo></BackGroundVideo>
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
            <div class="btnContainer merriweather-sans">
            <MainBtn
            href="products"
            :initial="{opacity:0, y: '50px'}"
            :animate="{opacity:1, y: 0, transition : { duration: 1, delay: 1.7}}">
                Explore the Collection
            </MainBtn>
            </div>
        </div>
    </div>
</template>

<style scoped>

.heroSection {
    height: 100vh;
    width: 100%;
    position: relative;
}

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

.btnContainer{
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 480px){
    .headline {
        width: 90%;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;

    }

}
</style>