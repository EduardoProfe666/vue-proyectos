<template>
  <div class="container">
    <h1>Lista de Tareas</h1>
    <section class="paper">
      <div class="card">
        <transition-group name="fade" tag="ul">
          <li v-for="toDoItem in toDoList" :key="toDoItem.id" class="todo-item">
            <input type="checkbox" v-model="toDoItem.completed" />
            <span
                :class="{ completed: toDoItem.completed }"
                :data-full-text="toDoItem.task">
              {{ toDoItem.task }} - {{ formatDateTime(toDoItem.localdatetime) }}
            </span>
          </li>
        </transition-group>
      </div>
      <div class="input-group">
        <input type="text" v-model="newToDo" placeholder="Nueva tarea..." />
        <button @click="handleNewToDo" class="btn btn-outline-blue">Agregar</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

function* uniqueNumberGenerator() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const generator = uniqueNumberGenerator();

interface ToDoItem {
  task: string;
  localdatetime: Date;
  id: number;
  completed: boolean;
}

const newToDo: Ref<string> = ref('');
const toDoList: Ref<ToDoItem[]> = ref([
  { id: (generator.next().value as number), localdatetime: new Date(), completed: false, task: "Tarea 1" },
  { id: (generator.next().value as number), localdatetime: new Date(), completed: false, task: "Tarea 2" },
  { id: (generator.next().value as number), localdatetime: new Date(), completed: false, task: "Tarea 3" },
]);

const handleNewToDo = () => {
  if (newToDo.value.length === 0) {
    alert('La tarea no puede estar vacia');
    return;
  }

  toDoList.value.push({
    id: (generator.next().value as number),
    localdatetime: new Date(),
    completed: false,
    task: newToDo.value
  });

  newToDo.value = '';
}

const formatDateTime = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  const formattedHours = hours ? String(hours).padStart(2, '0') : '12'; // Format as string

  return `${day}/${month}/${year} ${formattedHours}:${minutes} ${ampm}`;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.paper {
  max-width: 600px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: rgba(0,0,0,0.1) 0 4px 20px;
}

.card {
  max-height: 200px;
  overflow-y: scroll;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  margin-bottom: .5rem;
  border-radius: .5rem;
  transition: background-color .3s ease;
}

.todo-item span {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.todo-item:hover {
  background-color: #eaeaea;
}

.todo-item:hover span {
  overflow: visible;
  white-space: normal;
}

.todo-item:hover span::after {
  content: attr(data-full-text);
  position: absolute;
  left: -10px;
  top: -20px;
  background-color: white;
  border-radius:.25rem;
  padding:.25rem;
  box-shadow: rgba(0,0,0,.2) 0 4px 10px;
}

.completed {
  text-decoration: line-through;
  color: #aaa;
}

.input-group {
  display: flex;
  margin-top:.5rem;
}

input[type='text'] {
  flex-grow:1;
  padding:.75rem;
  border-radius:.25rem;
  border:none;
  box-shadow: rgba(0,0,0,.1) inset -1px -1px .5rem;
}

.btn {
  padding:.75rem;
  border-radius:.25rem;
  border:none;
  cursor:pointer;
  transition:.3s ease;
  margin-left:.5rem;
}

.btn-outline-blue {
  background-color:white;
  color:#007BFF;
}

.btn-outline-blue:hover {
  background-color:#007BFF;
  color:white;
}
</style>