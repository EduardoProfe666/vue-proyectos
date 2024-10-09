<script setup lang="ts">
</script>

<template>
  <main class="container">
    <h1 class="title">Listado de Proyectos</h1>
    <div class="link-container">
      <RouterLink to="counter" class="project-link">Contador</RouterLink>
      <RouterLink to="country-list" class="project-link">Listado de Países</RouterLink>
      <RouterLink to="teacher-form" class="project-link">Formulario de Profesores</RouterLink>
      <RouterLink to="todo-list" class="project-link">Lista de Tareas</RouterLink>
    </div>
  </main>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.link-container {
  display: flex;
  flex-direction: column;
}

.project-link {
  text-decoration: none;
  text-align: center;
  padding: 15px 25px;
  margin: 15px;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.3s;
}

.project-link:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .project-link {
    font-size: 1rem;
    padding: 10px;
    margin: 20px;
    width: calc(100% - 40px);
    text-align: center;
    box-shadow: none;
    border-radius: 10px;
  }
}

@media (min-width: 769px) {
  .project-link {
    width: auto;
  }
}
</style>