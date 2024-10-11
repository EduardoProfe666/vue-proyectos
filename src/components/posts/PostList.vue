<script setup lang="ts">
import PostItem from "@/components/posts/PostItem.vue";
import PostService from "@/components/posts/post.service";

const postService = new PostService();
const posts = postService.getPosts();

const handleStartPost = (id: number) => postService.startPost(id);
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
        @star-post="handleStartPost"
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