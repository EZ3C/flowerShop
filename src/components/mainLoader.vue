<script setup lang="ts">

    import {motion} from "motion-v"
    import { ref } from "vue";

    const props = defineProps(["color"])
    const percentage = ref(0)
    const buildUp = setInterval(()=>{
        if (percentage.value == 100)
            clearInterval(buildUp)
        else
            percentage.value++
    }, (10))


    const loaderStyle = {
        backgroundColor: props.color || "#0A0A0A"
    }

    const animationProps = ref({
        opacity: 1,
        height : '100dvh',
        transition : { duration : 1.5,  ease: [1,.12,.48,1]}
    })

    const visibility = ref('visible')


    setTimeout(()=>{
        console.log(animationProps.value)

        animationProps.value = {
            ...animationProps.value,
            opacity: 0,
            transition: { duration : 1,  ease: [1,.12,.48,1]}
        }

        visibility.value = "invisible"
    }, 1500)
</script>

<template>
    <motion.div class="loaderBackground" :class="visibility" ></motion.div>
    <motion.div :class="visibility" :initial="{  height : '0dvh' }"
    :animate="animationProps"
    :style="loaderStyle"
    class="loader">
        <motion.h4 class="counter">{{percentage}}%</motion.h4>
    </motion.div>

</template>

<style scoped>

    .loader {
        height: 100dvh;
        width: 100dvw;
        position: fixed;
        bottom: 0;
        left: 0;
        
    }

    .counter {
        position: absolute;
        bottom: 100%;
        left: 0;
        font-size: 5rem;
        font-weight: 400;
        z-index: 100;
    }

    .loaderBackground {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #eaeef5;
    }
    .invisible {
        opacity: 0;
        pointer-events: none;
    }
</style>