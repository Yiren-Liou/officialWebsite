<template>
  <div class="card p-3">
    <div class="content d-flex flex-column align-items-start">
      <p class="tag bg-secondary text-white px-2 py-1 mb-2">{{ tag }}</p>
      <h4 class="fw-bold fs-5 mb-2">{{ article.title }}</h4>
      <ol class="ps-3">
        <li v-for="content in article.content" :key="content">
          {{ content }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tag', 'article']
}
</script>

<style lang="scss" scoped>
.card {
  height: 366px;
  overflow: hidden;
}

.content:hover {
  animation-name: cardMoveY;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  .tag {
    animation-name: changeOpacity;
    animation-duration:1s;
    animation-fill-mode: forwards;
  } 
}
</style>