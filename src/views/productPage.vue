<script setup lang="ts">
import {motion} from "motion-v"

// import MainLoader from '@/components/mainLoader.vue';
// import heroSection from '../sections/heroSection.vue';
// import ProductsSection from '@/sections/productsSection.vue';

import { useRoute } from 'vue-router';
import products from '../data/products.json'
import ProductLoader from "@/components/productLoader.vue";
import ProductCounter from "@/components/productCounter.vue";
import ProductBtn from "@/components/productBtn.vue";
const route = useRoute()
const product = products.find((p) => p.id.toString() === route.params.id)

console.log(product)
</script>

<template>

  <div class="product-detail">
      <motion.div
        class="imgContainer"
      >
        <motion.img
          :style="{
            transformOrigin: 'center center'
          }"
          :initial="{
            x: '-40rem'
          }"
          :animate="{
            x: 0,
            transition : {duration: 1 ,ease: [0.4, 0, 0.2, 1] , delay: 1}
          }"
       :src="product?.img" class="detail-image" />
      </motion.div>

    <div class="productInfo">
      <motion.h2 :initial="{opacity: 0, y: 20}" :animate="{opacity: 1, y: 0, transition : {duration: 1 ,ease: [0.4, 0, 0.2, 1] , delay: 1}}">{{ product?.title }}</motion.h2>
      <motion.p :initial="{opacity: 0, y: 20}" :animate="{opacity: 1, y: 0, transition : {duration: 1,ease: [0.4, 0, 0.2, 1] , delay: 1.1}}">{{ product?.description }}</motion.p>
      <motion.div :initial="{opacity: 0, y: 20}" :animate="{opacity: 1, y: 0, transition : {duration: 1 ,ease: [0.4, 0, 0.2, 1] , delay: 1.2}}"  class="productCounter">
        <ProductBtn>Add to cart</ProductBtn>
        <ProductCounter></ProductCounter>
      </motion.div>
    </div>


  </div>
  <ProductLoader></ProductLoader>

</template>

<style>
    .productCounter{
      margin-top: 1rem;
      display: flex;
      /* flex-direction: column; */
      gap: 2rem;
    }
    .product-detail{
        position : relative;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 10rem;
        gap: 3rem;
    }

    .imgContainer {
      height: 40rem;
      width: 40rem;
      overflow: hidden;
    }

    .imgContainer img {
      height: 100%;
      width: 100%;
      filter: brightness(.8);
    }

    .productInfo {
      width: 40%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: .5rem
    }

    .productInfo p {
      color: grey;
    }
</style>