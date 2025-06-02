<script setup lang="ts">

import { Motion } from 'motion-v';
import { RouterView } from 'vue-router'
</script>
<template>

  <RouterView v-slot="{ Component }">
      <component :is="Component" />
  </RouterView>
</template>

<style scoped>

</style>
