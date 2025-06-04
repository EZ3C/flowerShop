<script setup lang="ts">
    // import {motion} from "motion-v"
import MainLoader from '@/components/mainLoader.vue';
import heroSection from '../sections/heroSection.vue';
import ProductsSection from '@/sections/productsSection.vue';
import Footer from '@/sections/footer.vue';
</script>

<template>
    <div class="indexPage">
        <heroSection />
        <ProductsSection />
        <Footer></Footer>
        <MainLoader color="#1A1A1A"></MainLoader>
    </div>
</template>

<style>
    
</style>