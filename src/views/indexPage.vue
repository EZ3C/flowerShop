<script setup lang="ts">
    // import {motion} from "motion-v"
import MainLoader from '@/components/mainLoader.vue';
import heroSection from '../sections/heroSection.vue';
import ProductsSection from '@/sections/productsSection.vue';
</script>

<template>
    <heroSection></heroSection>
    <ProductsSection></ProductsSection>
    <MainLoader color="#1A1A1A"></MainLoader>
</template>

<style>
    
</style>