<script setup lang="ts">
import ProductFilter from '@/components/productFilter.vue';

// import { ref } from 'vue'


</script>

<template>
  <div class="productSection">
    <h2>Find what you need</h2>
    <ProductFilter></ProductFilter>
  </div>
</template>



<style scoped>
    .productSection{
        width: 100vw;
        padding: 4rem;
        position: relative;
    }

    h2{
        font-weight: 500;
        padding: 0 ;
        text-align: center;
    }

    @media (max-width: 480px){
        .productSection {
            padding: 0rem 10px;

        }
    }
</style>


<!--   {
    "id": "1a8fcb14-91a2-4c22-8f52-e2f5e9321b13",
    "title": "Aloe Vera",
    "img": "img/plants/aloe_vera.webp",
    "category": ["succulent", "indoor", "medicinal"]
  },
  {
    "id": "2d5a3f90-22a1-4c12-a219-1d9a38b34688",
    "title": "Snake Plant",
    "img": "img/plants/snake_plant.webp",
    "category": ["indoor", "low light", "air purifier"]
  },
  {
    "id": "3a79f5cc-b96c-4c0d-aedf-d0e367ab1d57",
    "title": "Fiddle Leaf Fig",
    "img": "img/plants/fiddle_leaf_fig.webp",
    "category": ["indoor", "tropical", "decorative"]
  },
  {
    "id": "492f6c67-0594-4cf2-b7d8-3f2be7753d08",
    "title": "Christmas Cactus",
    "img": "img/plants/christmas_cactus.webp",
    "category": ["winter", "cactus", "flowering"]
  },
  {
    "id": "59de3b39-60a5-49de-84cb-43f0ab3f0a3d",
    "title": "Peace Lily",
    "img": "img/plants/peace_lily.webp",
    "category": ["indoor", "air purifier", "flowering"]
  },
  {
    "id": "63f1f94c-6d36-4988-93db-84bb5f5dc2f7",
    "title": "Jade Plant",
    "img": "img/plants/jade_plant.webp",
    "category": ["succulent", "indoor", "low maintenance"]
  },
  {
    "id": "78d6aeb6-2371-4a64-b6de-c56ec39b5b02",
    "title": "Lavender",
    "img": "img/plants/lavender.webp",
    "category": ["outdoor", "summer", "aromatic"]
  },
  {
    "id": "8107ebdc-3c93-4646-b07e-8b3bc0847f24",
    "title": "Spider Plant",
    "img": "img/plants/spider_plant.webp",
    "category": ["indoor", "air purifier", "easy care"]
  }, -->