<script setup lang="ts">
import {computed, ref, type Ref} from "vue";

interface ITeacher {
  name: string;
  email: string;
  ci: string;
  phone: string;
  subject: string;
  doc: boolean;
}

let teacher: Ref<ITeacher> = ref({
  name: "",
  email: "",
  ci: "",
  phone: "",
  subject: "",
  doc: false,
})

let teachers: Ref<ITeacher[]> = ref([
  {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    ci: "12345678901",
    phone: "555-1234",
    subject: "Sistema Operativo",
    doc: true,
  },
  {
    name: "María López",
    email: "maria.lopez@example.com",
    ci: "10987654321",
    phone: "555-5678",
    subject: "Programación Web",
    doc: false,
  },
  {
    name: "Carlos Fernández",
    email: "carlos.fernandez@example.com",
    ci: "11223344556",
    phone: "555-8765",
    subject: "Sistemas Distribuidos",
    doc: true,
  },
  {
    name: "Ana García",
    email: "ana.garcia@example.com",
    ci: "22334455667",
    phone: "555-4321",
    subject: "Sistema Operativo",
    doc: false,
  },
  {
    name: "Luis Martínez",
    email: "luis.martinez@example.com",
    ci: "33445566778",
    phone: "555-9876",
    subject: "Programación Web",
    doc: true,
  },
]);

let searchQuery: Ref<string> = ref('')

const filteredTeachers = computed(() => {
  return teachers.value.filter(teacher =>
      teacher.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      teacher.ci.includes(searchQuery.value) ||
      teacher.phone.includes(searchQuery.value)
  );
});

const handleNewTeacher = () => {
  if (teacher.value.subject === "") {
    alert("Seleccione una asignatura");
    return;
  }

  if (teachers.value.find(x => x.ci === teacher.value.ci)) {
    alert("El profesor ya existe en el sistema");
    return;
  }

  teachers.value.push({...teacher.value})

  teacher.value = {
    name: "",
    email: "",
    ci: "",
    phone: "",
    subject: "",
    doc: false,
  };

}

const handleRemoveTeachers = () => {
  teachers.value = []
}
</script>

<template>
  <div class="container">
    <h1>Formulario de Profesores</h1>

    <section class="paper">
      <h3>Añadir Profesor</h3>
      <form @submit.prevent="handleNewTeacher" class="teacher-form">
        <div class="form-row">
          <div class="form-group">
            <input placeholder="Nombre Completo" required type="text" minlength="1" v-model="teacher.name" />
          </div>
          <div class="form-group">
            <input placeholder="Correo" required type="email" v-model="teacher.email" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <input placeholder="CI" required type="text" minlength="11" maxlength="11" v-model="teacher.ci" />
          </div>
          <div class="form-group">
            <input placeholder="Teléfono" required type="tel" v-model="teacher.phone" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <select name="subject" id="subjectid" v-model="teacher.subject">
              <option value="">Seleccione una asignatura</option>
              <option value="Sistema Operativo">Sistema Operativo</option>
              <option value="Sistemas Distribuidos">Sistemas Distribuidos</option>
              <option value="Programación Web">Programación Web</option>
            </select>
          </div>
          <div class="form-group checkbox-group">
            <input type="checkbox" name="doc" id="doc" v-model="teacher.doc"/>
            <label for="doc">Documentación Entregada</label>
          </div>
        </div>
        <div class="button-group">
          <button type="reset" class="btn btn-yellow">Resetear</button>
          <button type="submit" class="btn btn-blue">Agregar</button>
        </div>
      </form>
    </section>

    <section class="paper list-section">
      <h3>Listado de Profesores</h3>
      <div class="search-container">
        <input placeholder="Buscar profesores" type="search" v-model="searchQuery" class="search-input"/>
        <button @click.prevent="handleRemoveTeachers" class="btn btn-red">Borrar profesores</button>
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
            <tr v-if="filteredTeachers.length === 0">
              <td colspan="6" style="text-align: center;">No hay profesores en la lista.</td>
            </tr>

            <tr v-for="teacher in filteredTeachers" :key="teacher.ci">
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
    </section>

  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.paper {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.teacher-form {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.form-group {
  flex: 1;
  margin-right: 10px;
}

.form-group:last-child {
  margin-right: 0;
}

input[type='text'],
input[type='email'],
input[type='tel'],
select {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.checkbox-group {
  display: flex;
  align-items: center;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn {
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
}

.btn-blue {
  background-color: #007BFF;
  color: white;
}

.btn-blue:hover {
  background-color: #0056b3;
}

.btn-yellow {
  background-color: #FFC107;
  color: black;
}

.btn-yellow:hover {
  background-color: #e0a800;
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
  .container {
    padding: 10px;
  }

  .form-row {
    display: block;
  }

  .form-group {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  select,
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