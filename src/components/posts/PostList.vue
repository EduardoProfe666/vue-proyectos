<script setup lang="ts">
import PostItem from "@/components/posts/PostItem.vue";
import {ref, Ref} from "vue";

interface Post {
  id: number;
  title: string;
  content: string;
  starred: boolean;
}

const posts: Ref<Post[]> = ref([
  {id: 1, title: "Primer Post", content: "Contenido del primer post.", starred: false},
  {id: 2, title: "Segundo Post", content: "Contenido del segundo post.", starred: false},
  {id: 3, title: "Tercer Post", content: "Contenido del tercer post.", starred: true},
  {id: 4, title: "Cuarto Post", content: "Contenido del cuarto post.", starred: false},
  {id: 5, title: "Quinto Post", content: "Contenido del quinto post.", starred: false},
  {id: 6, title: "Sexto Post", content: "Contenido del sexto post.", starred: false},
  {id: 7, title: "Séptimo Post", content: "Contenido del séptimo post.", starred: false},
  {id: 8, title: "Octavo Post", content: "Contenido del octavo post.", starred: false},
  {id: 9, title: "Noveno Post", content: "Contenido del noveno post.", starred: false},
  {id: 10, title: "Décimo Post", content: "Contenido del décimo post.", starred: false}
]);

const starPost = (idPost: number) => {
  const post = posts.value.find(x => x.id === idPost);
  post.starred = !post.starred;
}
</script>

<template>
  <h1 class="title">Lista de Posts</h1>
  <div class="container">
    <PostItem
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :content="post.content"
        :starred="post.starred"
        @star-post="starPost(post.id)"
        :id="post.id"
    />
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #34495e;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}
</style>