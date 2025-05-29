<script setup lang="ts">


</script>

<template>
    <div class="videoContainer">
        <video src="../assets/flowers.mp4" autoplay muted></video>
    </div>
</template>

<style scoped>
    .videoContainer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
        z-index: -1;
    }

    video {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(.8);
    }
</style>