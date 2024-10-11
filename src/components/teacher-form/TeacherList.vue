<script setup lang="ts">
import {ref, type Ref} from "vue";

const props = defineProps(['filteredTeachers'])
const emits = defineEmits(['remove-all', 'change-search'])

let searchQuery: Ref<string> = ref('')


</script>

<template>
  <h3>Listado de Profesores</h3>
  <div class="search-container">
    <input placeholder="Buscar profesores" type="search" v-model="searchQuery" @input="emits('change-search', searchQuery)" class="search-input"/>
    <button @click.prevent="emits('remove-all')" class="btn btn-red">Borrar profesores</button>
  </div>

  <div class="table-responsive">
    <table class="teachers-table">
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>CI</th>
        <th>Teléfono</th>
        <th>Asignatura</th>
        <th>Documentación Entregada</th>
      </tr>
      </thead>

      <transition-group name="fade" tag="tbody">
        <tr v-if="!props.filteredTeachers || props.filteredTeachers.length === 0">
          <td colspan="6" style="text-align: center;">No hay profesores en la lista.</td>
        </tr>

        <tr v-for="teacher in props.filteredTeachers" :key="teacher.ci">
          <td>{{ teacher.name }}</td>
          <td>{{ teacher.email }}</td>
          <td>{{ teacher.ci }}</td>
          <td>{{ teacher.phone }}</td>
          <td>{{ teacher.subject }}</td>
          <td v-if="teacher.doc">✅</td>
          <td v-else>❌</td>
        </tr>
      </transition-group>

    </table>
  </div>
</template>

<style scoped>
.btn {
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
}

.btn-red {
  background-color: #dc3545;
  color: white;
}

.btn-red:hover {
  background-color: #c82333;
}

.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.search-input {
  width: calc(100% - 150px);
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.table-responsive {
  overflow-x: auto;
}

.teachers-table {
  width: 100%;
  border-collapse: collapse;
}

.teachers-table th,
.teachers-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.teachers-table th {
  background-color: #007BFF;
  color: white;
}

.teachers-table tr:hover {
  background-color: #f1f1f1;
}

@media (max-width: 600px) {
  .search-input {
    font-size: smaller;
    width: 95%;
    margin-bottom: 0;
  }

  .btn {
    font-size: smaller;
    padding: 8px;
  }

  .search-container {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .search-input {
    width: 100%;
    margin-bottom: 10px;
  }

  .btn-red {
    width: 100%;
  }

  .teachers-table th,
  .teachers-table td {
    font-size: smaller;
  }
}
</style>