<script setup lang="ts">
import { ref, computed } from 'vue'
import products from "../data/products.json"
import plantProduct from "./plantProduct.vue"
import { RouterLink } from 'vue-router';
import router from '../router/index';
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


function handleProductClick (route : string, event: Event){
  // Get the clicked element's position
  const element = event.currentTarget as Element;
  
  // Scroll to bring the element to a consistent position (like top of viewport)
  element?.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  });
  
  // Delay navigation until scroll completes
//   setTimeout(() => {
    router.push(route);
//   }, 300);
};


</script>


<template>
  <div class="productFilter">
    <div class="filter">
        <span id="all" :class="{ current: curr === 'all' }" class=" category" @click="handleClick( 'all')">all</span>
        <span  class="category" @click="handleClick( category)" v-for="category in categories" :key="category" :class="{ current: curr === category }">{{ category }}</span>
    </div>
    <div class="products">
        <div class="productContainer"  v-for="product in filteredPlants" :key="product.id">
            <!-- <RouterLink :to="{ name: 'product', params: { id: product.id } }"> -->
                <plantProduct @click="handleProductClick(`/product/${product.id}`, $event)" :product="product"></plantProduct>
            <!-- </RouterLink> -->
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
    }





    .products > div {
        /* background-color: #ccc; */
    }

    .productContainer{
        padding: 2rem 0;
        place-items: center;

        display: flex;
        align-items: center;
        justify-content: center;
    }


    @media (min-width : 750px) {
        .products {
            gap: 1px;
            grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
        }

        .productContainer{
            width: 100%;
        }


    }


</style>