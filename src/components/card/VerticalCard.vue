<template>
  <div class="card border-0">
    <div class="img bg-center card-img-top" :style='{ backgroundImage: `url(${article.img})`}'>
      <div class="tag bg-secondary">
        <p class="text-center text-white fw-bold fs-3">26</p>
        <p class="text-center text-white fw-bold">DEC.</p>
      </div>
    </div>
    <div class="card-body p-3">
      <h5 class="fw-bold fs-5 mb-2">{{ article.title }}</h5>
      <p class="pb-4">{{ article.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="scss" scoped>
.img {
  height: 325px;
  width: 100%;
}

.tag {
  border-radius: 0 8px 0 0;
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 16px;
}
</style>