<template>
  <div class="card border-0">
    <div class="row g-0">
      <div class="col-md-5">
        <div class="cardImg">
          <div class="rounded-start bg-center" :style='{ backgroundImage: `url(${this.getUrl(article.img)})`}'></div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="card-body d-flex flex-column align-items-start p-3">
          <p class="tag bg-secondary text-white px-2 py-1 mb-2">{{ article.date }}</p>
          <h4 class="fw-bold fs-5 mb-2">{{ article.title }}</h4>
          <p class="card-text pb-3">{{ article.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getImageUrl from "../../methods/getImageUrl.js";

export default {
  props: ['article'],
  methods: {
    getUrl(name) {
      return getImageUrl(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.cardImg {
  height: 232px;
}
</style>