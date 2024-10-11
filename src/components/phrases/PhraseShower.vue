<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import Phrase from "@/components/phrases/phrase.model";
import PhraseService from "@/components/phrases/phrase.service";

const phrase: Ref<Phrase | null> = ref(null);
const phraseService = new PhraseService();

onMounted(async () => {
  await fetchNewPhrase();
});

const fetchNewPhrase = async () => {
  phrase.value = null;
  try {
    const p = await phraseService.getRandomPost();
    if(p)
        phrase.value = p;
  } catch (error) {
    console.error('Error fetching new phrase:', error);
  }
};

const handleClick = async () => {
  await fetchNewPhrase();
};
</script>

<template>
  <div class="app-container">
    <h1>Frase del día</h1>
    <div class="card">
      <div v-if="phrase === null" class="loading">
        <p>Cargando frase...</p>
      </div>
      <div v-else class="phrase-content">
        <p class="quote">{{ phrase.quote }}</p>
        <p class="author"><strong><em>- {{ phrase.author }}</em></strong></p>
      </div>
    </div>
    <button @click="handleClick" class="new-phrase-button">Nueva Frase</button>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f4f8;
}

.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.loading {
  font-size: 18px;
  color: #888;
}

.phrase-content p {
  margin: 10px 0;
}

.quote {
  font-size: 20px;
  line-height: 1.5;
}

.author {
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: #555;
  margin-top: 10px;
  padding-top: 5px;
}

.new-phrase-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.new-phrase-button:hover {
  background-color: #0056b3;
}

.new-phrase-button:active {
  transform: scale(0.95);
}
</style>