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
      <RouterLink to="post-list" class="project-link">Lista de Posts</RouterLink>
      <RouterLink to="phrases" class="project-link">Frases</RouterLink>
      <RouterLink to="404" class="project-link">Página de Error 404</RouterLink>
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
  display: grid; /* Cambiado a grid para el diseño tipo masonry */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Ajusta el número de columnas */
  gap: 15px; /* Espaciado entre los enlaces */
}

.project-link {
  text-decoration: none;
  text-align: center;
  padding: 15px;
  border-radius: 8px; /* Bordes redondeados */
  background-color: #3498db;
  color: white;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s; /* Añadido box-shadow */
}

.project-link:hover {
  background-color: #2980b9;
  transform: translateY(-3px); /* Efecto al pasar el mouse */
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
    margin-bottom: 15px;
    text-align: center; /* Centrar el título en pantallas pequeñas */
    padding: 0 10px; /* Agregar padding lateral */
  }

  .project-link {
    font-size: 1rem;
    padding: 10px;
    width: auto; /* Eliminar ancho fijo para que se ajuste mejor */
    box-shadow: none; /* Sin sombra en pantallas pequeñas */
    border-radius: 10px; /* Bordes más redondeados */
    transition: transform .2s ease-in-out; /* Animación al hacer clic */
    position: relative; /* Para la animación */
    overflow: hidden; /* Para ocultar el contenido que sobresale */
    display: flex; /* Flexbox para centrar contenido */
    align-items: center; /* Centrar verticalmente */
    justify-content: center; /* Centrar horizontalmente */
  }

  .project-link::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: rgba(255,255,255,0.2); /* Fondo blanco semitransparente */
    border-radius: inherit; /* Mantener bordes redondeados */
    z-index: -1; /* Enviar al fondo */
    transition: transform .3s ease-in-out;
  }

  .project-link:hover::before {
    transform: scale(1.2); /* Efecto de expansión al pasar el mouse */
  }
}
</style>