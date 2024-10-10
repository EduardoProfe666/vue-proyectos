<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  starred: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['star-post'])

const handleClick = () => {
  emit('star-post', props.id);
}
</script>

<template>
  <div class="post-item" @click="handleClick">
    <h3 class="title">{{ props.title }}</h3>
    <hr />
    <p class="content">{{ props.content }}</p>
    <button class="star-button" :class="{ 'active': props.starred }">
      <span v-if="props.starred">⭐</span>
      <span v-else>☆</span>
    </button>
  </div>
</template>

<style scoped>
.post-item {
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 1.5rem;
  transition: transform .2s ease-in-out, box-shadow .2s ease-in-out;
  cursor: pointer;
}

.post-item:hover {
  transform: translateY(-5px);
  box-shadow: rgba(0,0,0,0.2) 0 8px 20px;
}

.title {
  font-size: 1.5rem;
  color: #34495e;
}

.content {
  font-size: .9rem;
  color: #7f8c8d;
}

.star-button {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform .2s ease-in-out;
}

.star-button.active {
  color: #e74c3c;
}

.star-button:hover {
  transform: scale(1.2);
}
</style>