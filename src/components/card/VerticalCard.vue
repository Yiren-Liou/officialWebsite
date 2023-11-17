<template>
  <div class="card border-0">
    <div class="img bg-center card-img-top" :style='{ backgroundImage: `url(${article.img})`}'>
      <div class="tag bg-secondary">
        <p class="text-center text-white fw-bold fs-4 fs-md-3">{{ date }}</p>
        <p class="text-center text-white fw-bold fs-8 ">DEC.</p>
      </div>
    </div>
    <div class="card-body p-3" :class="{'fixedHight': isMobile}">
      <h5 class="fw-bold fs-4 fs-md-5 mb-1 mb-md-2">{{ article.title }}</h5>
      <p class="fs-8 fs-md-base pb-md-4" :class="{'text': isMobile,}">{{ article.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article', "isMobile"],
  computed: {
    date() {
      const text = this.article.date.split('.')[2];
      return text;
    }
  },
}
</script>

<style lang="scss" scoped>
.img {
  height: 210px;
  width: 100%;
  @media (min-width: 768px) {
    height: 325px;
  }
}

.tag {
  border-radius: 0 8px 0 0;
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 16px;
}

.fixedHight{
  height: 168px;
}
.text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>