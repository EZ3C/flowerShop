<script setup lang="ts">
import { motion } from 'motion-v';


</script>

<template>

    <motion.div
    :initial="{

    }"
    :while-hover="{
        backgroundColor: '#30573c'
    }"


    :while-press="{
        scale: .9
    }"
    class="btn">
        <slot></slot>
    </motion.div>

</template>

<style scoped>

    .btn{
        text-align: center;
        padding: 1rem 2rem;
        cursor: pointer;
        background-color: #437252;
        color: white;
        /* border-radius: 5px; */
        /* width: auto; */
    }
</style>