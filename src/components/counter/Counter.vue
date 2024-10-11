<script setup lang="ts">
  import {useCounterStore} from "@/stores/counter";

  const counterStore = useCounterStore();

</script>

<template>
  <div class="counter">
    <h3 class="num">{{counterStore.count}}</h3>
    <div class="buttons">
      <button class="btn-outlined" @click="counterStore.decrement()">Decrementar</button>
      <button class="btn-outlined" @click="counterStore.increment()">Incrementar</button>
    </div>
    <div class="reset">
      <button class="reset-btn" @click="counterStore.reset()">Resetear</button>
    </div>

  </div>

</template>

<style scoped>
.counter{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100dvh;
}
.num{
  color: #a53898;
  font-size: 2rem;
}
.buttons{
  display: flex;
  gap: 1rem;
}
.btn-outlined {
  background-color: transparent;
  border: 2px solid #f403f0;
  border-radius: 20px;
  color: #f403f0;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all ease-in-out .15s;
}

.btn-outlined:hover {
  background-color: #f403f0;
  color: white;
  border-color: #f403f0;
}

.btn-outlined:focus {
  outline: none;
}

.btn-outlined:active {
  transform: scale(0.95);
}

.reset{
  margin: 1rem;
}

.reset-btn {
  background-color: #e74c3c;
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color .3s, transform .2s;
}

.reset-btn:hover {
  background-color: #c0392b;
}

.reset-btn:focus {
  outline: none;
}

.reset-btn:active {
  transform: scale(0.95);
}
</style>