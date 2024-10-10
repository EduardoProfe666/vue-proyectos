<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import FAB from "@/components/FloatingActionButton.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();
</script>

<template>
  <FAB v-if="route.path !== '/'"/>
  <RouterView/>
  <Footer/> 
</template>

<style scoped>
</style>