<script setup lang="ts">
import { motion } from 'motion-v';
import { ref } from 'vue';
const props = defineProps(["initial","animate", "href"])

const animateProps = ref(props.animate)
if (props?.animate?.transition?.delay){
    setTimeout(()=>{
        animateProps.value.transition.delay = 0
        animateProps.value.transition.duration = .2
    }, animateProps.value.transition.delay + animateProps.value.transition.duration)
}
</script>

<template>

    <motion.a
    :href="`#${props.href}`"
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
    </motion.a>

</template>

<style scoped>
    .btn{
        padding: 1rem;
        cursor: pointer;
        background-color: white;
        color: #1A1A1A;
        border-radius: 5px;

        text-decoration: none;
    }
</style>