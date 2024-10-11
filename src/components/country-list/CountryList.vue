<script setup lang="ts">
import { Ref, ref } from "vue";

let countries: Ref<string[]> = ref(['España', 'Estados Unidos', 'Cuba', 'Chile']);
let newCountry: Ref<string> = ref('');

const insert = () => {
  const val = newCountry.value;
  if (countries.value.includes(val)) {
    alert("País ya existente");
  } else {
    countries.value.push(newCountry.value);
    newCountry.value = '';
  }
}
</script>

<template>
  <div class="container">
    <h1 class="name">Listado de Países</h1>
    <ul class="country-list">
      <li v-for="country in countries" v-bind:key="country">{{ country }}</li>
    </ul>
    <hr />
    <div class="input-container">
      <input v-model="newCountry" type="text" placeholder="Añadir nuevo país" class="country-input"/>
      <button @click="insert" class="insert-button">Insertar</button>
    </div>
  </div>
</template>

<style scoped>

.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.name {
  font-weight: bold;
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
}

.country-list {
  list-style-type: none;
  padding-left: 0;
  max-height: 200px;
  overflow-y: scroll;
}

.country-list li {
  padding: 10px;
  background-color: #eaf2f8;
  margin-bottom: 5px;
  border-radius: 4px;
}

.input-container {
  display: flex;
  justify-content: space-between;
}

.country-input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.insert-button {
  padding: 10px;
  margin-left: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.insert-button:hover {
  background-color: #2980b9;
}
</style>