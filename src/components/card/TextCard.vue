<template>
  <div class="card d-flex align-items-start p-3">
    <p class="tag bg-secondary text-white px-2 py-1 mb-2">{{ tag }}</p>
    <h4 class="fw-bold fs-5 mb-2">{{ article.title }}</h4>
    <ol class="ps-3">
      <li v-for="content in article.content" :key="content">
        {{ content }}
      </li>
    </ol>
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
</style>