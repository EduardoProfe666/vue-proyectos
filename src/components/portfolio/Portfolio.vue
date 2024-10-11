<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <a class="navbar-brand" href="#">Mi Portfolio</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><a class="nav-link" href="#about">Sobre mí</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Proyectos</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>

    <header class="jumbotron text-center mb-5">
      <h1>Bienvenido a mi Portfolio</h1>
      <p class="lead">Desarrollador web | Diseñador gráfico</p>
    </header>

    <section id="about" class="container mb-5">
      <h2>Sobre mí</h2>
      <p>Descripción sobre ti...</p>
    </section>

    <section id="projects" class="container mb-5">
      <h2>Proyectos</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="project in projects" :key="project.id">
          <div class="card h-100 shadow-sm border-0 transition-card">
            <img :src="project.image" class="card-img-top rounded-top" alt="Proyecto">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.link" class="btn btn-primary btn-block">Ver Proyecto</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="container mb-5">
      <h2>Contacto</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group mb-3">
          <label for="name">Nombre</label>
          <input type="text" v-model="form.name" class="form-control" id="name" required placeholder="Ingresa tu nombre">
        </div>
        <div class="form-group mb-4">
          <label for="email">Email</label>
          <input type="email" v-model="form.email" class="form-control" id="email" required placeholder="Ingresa tu email">
        </div>
        <button type="submit" class="btn btn-success btn-lg btn-block">Enviar</button>
      </form>
    </section>

    <footer class="text-center mt-4 py-3 bg-light shadow-sm">
      © 2024 Mi Portfolio
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const projects = ref([
  { id: 1, title: 'Gestor de Tareas', description: 'Una aplicación web para gestionar tareas diarias con una interfaz intuitiva.', image: 'https://www.softwaredoit.es/images/final--2024_03_15_10_24_34.png', link: '#' },
  { id: 2, title: 'Aplicación de Clima', description: 'Una aplicación móvil que muestra el clima actual y pronósticos a futuro.', image: 'https://i.blogs.es/4d8dc9/tiempo-microsoft-2/450_1000.webp', link: '#' },
  { id: 3, title: 'Plataforma de E-learning', description: 'Un sistema de gestión de aprendizaje en línea que permite a los usuarios acceder a cursos y materiales educativos.', image: 'https://ibo.pe/blog/wp-content/uploads/2020/04/Moodle_3.6_Release_nextcloud.png', link: '#' },
]);

const form = ref({
  name: '',
  email: ''
});

const submitForm = () => {
  alert(`Gracias por contactarme, ${form.value.name}!`);
};
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

.jumbotron {
  background-color: #f8f9fa;
}

.card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

footer {
  background-color: #f8f9fa;
}

.transition-card {
  border-radius: .5rem;
}

.btn-primary {
  background-color: #007bff;
}

.btn-success {
  background-color: #28a745;
}
</style>