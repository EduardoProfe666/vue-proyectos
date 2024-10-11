<script setup lang="ts">
</script>

<template>
  <main class="container">
    <h1 class="title">Listado de Proyectos</h1>
    <div class="link-container">
      <RouterLink to="counter" class="project-card">
        <h3>Contador</h3>
        <div class="highlight">
          <strong>Puntos claves</strong>
          <ul>
            <li><em>Manejo de Eventos</em></li>
            <li><em>Data Binding</em></li>
            <li><em>Reactive State Management</em> con Pinia</li>
            <li><em>Persistencia</em> con Pinia</li>
          </ul>
        </div>
      </RouterLink>
      <RouterLink to="country-list" class="project-card">
        <h3>Listado de Países</h3>
        <div class="highlight">
          <strong>Puntos claves</strong>
          <ul>
            <li><em>Reactividad</em> con <em>ref</em></li>
            <li><em>Data Binding</em> y <em>Double Data Binding</em></li>
            <li><em>List Rendering</em> con directiva <em>v-for</em></li>
          </ul>
        </div>
      </RouterLink>
      <RouterLink to="teacher-form" class="project-card">
        <h3>Formulario de Profesores</h3>
        <div class="highlight">
          <strong>Puntos claves</strong>
          <ul>
            <li><em>Componetización</em></li>
            <li><em>Comunicación Vertical</em> con <em>props</em> y <em>emits</em></li>
            <li><em>Conditional Rendering</em> con directiva <em>v-if</em></li>
            <li>Comunicación con <em>Servicios</em></li>
          </ul>
        </div>
      </RouterLink>
      <RouterLink to="todo-list" class="project-card">
        <h3>Lista de Tareas</h3>
        <div class="highlight">
          <strong>Puntos claves</strong>
          <ul>
            <li>Comunicación con <em>Servicios</em></li>
          </ul>
        </div>
      </RouterLink>
      <RouterLink to="post-list" class="project-card">
        <h3>Lista de Posts</h3>
        <div class="highlight">
          <strong>Puntos claves</strong>
          <ul>
            <li><em>Componetización</em></li>
            <li><em>Comunicación Vertical</em> con <em>props</em> y <em>emits</em></li>
            <li>Comunicación con <em>Servicios</em></li>
          </ul>
        </div>
      </RouterLink>
      <RouterLink to="phrases" class="project-card">
        <h3>Frases</h3>
        <div class="highlight">
          <strong>Puntos claves</strong>
          <ul>
            <li>Comunicación con <em>Servicios</em></li>
            <li><em>Conditional Rendering</em> con directiva <em>v-if</em></li>
            <li>Comunicación con <em>API</em></li>
          </ul>
        </div>
      </RouterLink>
      <RouterLink to="404" class="project-card">
        <h3>Página de Error 404</h3>
        <div class="highlight">
          <strong>Puntos claves</strong>
          <ul>
            <li><em>Catch-All Routes</em> para páginas no encontradas</li>
          </ul>
        </div>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to bottom right, #e0eafc, #cfdef3);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.link-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: transform .4s ease, box-shadow .4s ease, background-color .4s ease;
  text-decoration: none;
}

.project-card:hover {
  transform: translateY(-10px) rotateZ(1deg);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.project-card h3 {
  margin-top: 0;
  font-size: 1.5rem;
  transition: color .3s ease; /* Transición suave para el color */
}

.project-card:hover h3 {
  color: #2980b9; /* Cambia el color del título al pasar el mouse */
}

.highlight {
  background-color: #f9f9f9;
  border-left: solid #3498db;
  padding: 15px;
  border-radius: .5rem;
  transition: transform .3s ease-in-out, box-shadow .3s ease-in-out; /* Transición suave */
}

.highlight:hover {
  transform: scale(1.05); /* Efecto de escalado al pasar el mouse */
  box-shadow: rgba(0,0,0,.2) -4px -4px .7rem; /* Sombra más pronunciada al pasar el mouse */
}

.highlight strong {
  display: block;
  margin-bottom: .5rem;
  font-weight: bold;
  color: #3498db;
}

.project-card ul {
  list-style-type: none;
  padding-left: 0;
}

.project-card li {
  margin-bottom: .5rem;
  transition: transform .2s ease; /* Transición suave para los elementos de la lista */
}

.project-card li:hover {
  transform: translateX(5px); /* Efecto de desplazamiento al pasar el mouse */
}

.project-card em {
  color: #3498db;
}

@media (max-width:600px) {
  .title {
    font-size:2rem;
    margin-bottom:15px;
  }

  .project-card {
    flex-basis: calc(100% -20px);
    margin-bottom:20px;
    padding:15px;
    font-size:.9rem;
  }
}
</style>