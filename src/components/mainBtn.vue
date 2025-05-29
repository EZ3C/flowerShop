<script setup lang="ts">
import { motion } from 'motion-v';
import { ref } from 'vue';
const props = defineProps(["initial","animate"])

const animateProps = ref(props.animate)
if (props?.animate?.transition?.delay){
    setTimeout(()=>{
        animateProps.value.transition.delay = 0
        animateProps.value.transition.duration = .2
    }, animateProps.value.transition.delay + animateProps.value.transition.duration)
}
</script>

<template>
    <div class="btnContainer merriweather-sans">
        <motion.div
        :initial="props.initial"
        :animate="animateProps"
        :while-hover="{
            scale:1.2
        }"


        :while-press="{
            scale: .9
        }"
        class="btn">
            <slot></slot>
        </motion.div>
    </div>
</template>

<style scoped>

    .btnContainer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn{
        padding: 1rem;
        cursor: pointer;
        background-color: white;
        color: #0a0a0a;
        border-radius: 5px;
    }
</style>