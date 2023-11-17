<template>
  <swiper
    :centeredSlides="true"
    initialSlide="0"
    :loop="true"
    :spaceBetween="20"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{ 
      320: { slidesPerView: 1.3 },
      480: { slidesPerView: 1.8 },
      640: { slidesPerView: 2.5 },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <VerticalCard :article="article[0]" :isMobile="true" />
    </swiper-slide>
    <swiper-slide>
      <VerticalCard :article="article[1]" :isMobile="true" />
    </swiper-slide>
    <swiper-slide>
      <VerticalCard :article="article[2]" :isMobile="true" />
    </swiper-slide>
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';
  import { FreeMode, Pagination } from 'swiper/modules';

  import VerticalCard from "../card/VerticalCard.vue";
  import HorizontalCard from "../card/HorizontalCard.vue";

  export default {
    props: ['article'],
    components: {
      Swiper,
      SwiperSlide,
      VerticalCard,
      HorizontalCard
    },
    setup() {
      return {
        modules: [FreeMode, Pagination],
      };
    },
  };
</script>

<style lang="scss" scoped>
.swiper {
  height: 420px;
}
</style>