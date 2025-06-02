import { ref } from 'vue';
<script setup lang="ts">
import { ref } from 'vue';


    const count = ref(1)


    function decrement(){
        if (count.value - 1 < 1)
            return

        count.value--
    }
    function increment(){
        count.value++
    }



</script>

<template>
    <div class="counter">
        <div @click="decrement" class="minus">-</div>
        <div class="count">{{ count }}</div>
        <div @click="increment" class="plus">+</div>
    </div>
</template>

<style scoped>
.counter {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 2rem;
}

.counter .minus, .counter .plus {
    padding: .5rem;
    background-color: #437252;

    /* background-color: #e4bb89; */
    color: white;
    cursor: pointer;
}

.counter .minus {
    border-radius: 5px 0 0 5px;
}
.counter .count {
    padding: 0 5rem;
}
.counter .plus {
    border-radius: 0 5px 5px 0;
}
</style>