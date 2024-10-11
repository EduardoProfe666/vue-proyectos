<template>
  <div class="fab-container">
    <RouterLink to="/" class="fab">🏠</RouterLink>
  </div>
</template>

<style scoped>
.fab-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
}

.fab {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.fab:hover {
  transform: scale(1.15);
}
</style>