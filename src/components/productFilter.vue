<script setup lang="ts">
import { ref, computed } from 'vue'
import products from "../data/products.json"
import plantProduct from "./plantProduct.vue"
// const x2 = ref(0)
const curr = ref("all")
const categories = [...new Set(products.flatMap(product => product.categories))];

function handleClick(category : string){

    curr.value = category
}


const filteredPlants = computed(()=>{
  return curr?.value === "all" || !curr.value
    ? products
    : products.filter(prod =>
        prod.categories.includes(curr?.value)
      )
})
</script>


<template>
  <div class="productFilter">
    <div class="filter">
        <span id="all" :class="{ current: curr === 'all' }" class=" category" @click="handleClick( 'all')">all</span>
        <span  class="category" @click="handleClick( category)" v-for="category in categories" :key="category" :class="{ current: curr === category }">{{ category }}</span>
    </div>
    <div class="products">
        <div class="productContainer" v-for="product in filteredPlants" :key="product.id">
            <plantProduct :product="product"></plantProduct>
        </div>
    </div>
  </div>
</template>


<style scoped>
    .filter {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding: 0 33%; */
        flex-wrap: wrap;
        font-weight: 100;
    }
    .filter > .category {
        position: relative;
        transition: all .2s ease-in-out;
        cursor: pointer;
    }

    .filter > .current{
        color: #791fd9;
    }
    .filter > .current:first-of-type:after{
        background-color: blue;
        left: 0%;
        transform:translate(0%, 0%) scaleX(1);
    }
    .current::after{
        transition: all 1s;
    }
    .category{
        padding: 10px;
    }

    .category:first-of-type {
        padding-left: 0;
    }


    .products {
        display: grid;
        margin-top: 2rem;
        gap: 1px;
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    }


    .products > div {
        /* background-color: #ccc; */
    }

    .productContainer{
        padding: 2rem;
        place-items: center;
    }


</style>