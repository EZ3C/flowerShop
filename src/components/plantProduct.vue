<script setup lang="ts">
import { motion } from 'motion-v';

const {product} = defineProps(['product'])
</script>

<template>
  <motion.div :initial="{
    opacity : 0
  }" 
  :while-in-view="{
    y: 0,
    opacity: 1,
    transition: {duration: 1}
  }">
    <div class="productImgContainer">
        <div class="imgContainer">
            <img :src="product.img"  alt="">
        </div>
        <p class="productTitle">{{ product.title }}</p>
    </div>
  </motion.div>
</template>



<style scoped>


.productImgContainer{
    height: 20rem;
    width: 20rem;
    position: relative;
    cursor: pointer;
}
@media (max-width: 480px){
    .productImgContainer {
        height: 15rem;
        width: 15rem;
    }
}

img {
    transition: all .5s ease-in-out;

    height: 100%;
    width: 100%;

    filter: brightness(.8);

}

.imgContainer {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.productTitle{
    transition: all .5s ease-in-out;
    position: absolute;
    top: 100%;
    left: 0;
}

.productImgContainer:hover .productTitle{
    position: absolute;
    top: 90%;
    left: 5%;
    color: #ececec;
    font-size: 1.2rem;
}

.productImgContainer:hover img {
    filter: brightness(.7);
    transform: scale(1.1);
}
</style>