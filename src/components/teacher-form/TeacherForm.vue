<script setup lang="ts">
import TeacherService from "@/components/teacher-form/teacher.service";
import TeacherAddForm from "@/components/teacher-form/TeacherAddForm.vue";
import ITeacher from "@/components/teacher-form/teacher.model";
import TeacherList from "@/components/teacher-form/TeacherList.vue";
import {computed, Ref, ref} from "vue";

const teacherService = new TeacherService()
const teachers = teacherService.getTeachers();
const searchQuery: Ref<string> = ref('')

const filteredTeachers = computed(() => {
  return teachers.value.filter(teacher =>
      teacher.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      teacher.ci.includes(searchQuery.value) ||
      teacher.phone.includes(searchQuery.value)
  );
});

const handleChangeSearch = (search: string) => searchQuery.value = search;

const handleNewTeacher = (teacher: ITeacher) => teacherService.addTeacher(teacher);

const handleRemoveTeachers = () => teacherService.removeAll();

</script>

<template>
  <div class="container">
    <h1>Formulario de Profesores</h1>

    <section class="paper">
      <TeacherAddForm @add-teacher="handleNewTeacher"/>
    </section>

    <section class="paper list-section">
      <TeacherList :filtered-teachers="filteredTeachers" @change-search="handleChangeSearch" @remove-all="handleRemoveTeachers"/>
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 600px) {
  .container {
    padding: 10px;
  }
}
</style>