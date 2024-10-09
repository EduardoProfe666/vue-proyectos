<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
import FAB from "@/components/FloatingActionButton.vue";

const route = useRoute();
</script>

<template>
  <FAB v-if="route.path !== '/'"/>
  <RouterView/>
</template>

<style scoped>
</style>
