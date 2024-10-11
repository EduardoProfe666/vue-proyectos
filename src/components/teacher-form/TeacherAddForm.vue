<script setup lang="ts">
import {ref, Ref} from "vue";
import ITeacher from "@/components/teacher-form/teacher.model";

const emits = defineEmits(['add-teacher'])

let teacher: Ref<ITeacher> = ref({
  name: "",
  email: "",
  ci: "",
  phone: "",
  subject: "",
  doc: false,
})

const handleNewTeacher = () => {
  try {
    emits('add-teacher', teacher.value)

    teacher.value = {
      name: "",
      email: "",
      ci: "",
      phone: "",
      subject: "",
      doc: false,
    };
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <h3>Añadir Profesor</h3>
  <form @submit.prevent="handleNewTeacher" class="teacher-form">
    <div class="form-row">
      <div class="form-group">
        <input placeholder="Nombre Completo" required type="text" minlength="1" v-model="teacher.name"/>
      </div>
      <div class="form-group">
        <input placeholder="Correo" required type="email" v-model="teacher.email"/>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <input placeholder="CI" required type="text" minlength="11" maxlength="11" v-model="teacher.ci"/>
      </div>
      <div class="form-group">
        <input placeholder="Teléfono" required type="tel" v-model="teacher.phone"/>
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
</template>

<style scoped>

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

@media (max-width: 600px) {
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
  select{
    font-size: smaller;
    width: 95%;
    margin-bottom: 0;
  }

  .btn {
    font-size: smaller;
    padding: 8px;
  }
}

</style>