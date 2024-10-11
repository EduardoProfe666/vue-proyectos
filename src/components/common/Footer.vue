<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© {{ currentYear }} -
        <a href="https://github.com/EduardoProfe666" target="_blank" rel="noopener noreferrer">
          EduardoProfe666🎩
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: rgba(44, 62, 80, 0.7);
  color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer a {
  color: #3498db;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>