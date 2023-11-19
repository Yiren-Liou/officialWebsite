<template>
  <div id="newActivity" class="container mb-3" data-aos="fade-up">
    <h3 class="text-center fs-large mb-5">
      <img src="/src/assets/images/title/new-activity.svg" alt="最新活動" />
    </h3>
    <div class="row d-none d-md-flex">
      <div class="col-md-5">
        <VerticalCard :article="subArticles[0]" :isMobile="false" :index="0" />
      </div>
      <div class="col-md-7">
        <div class="mb-5">
          <HorizontalCard :article="subArticles[1]" />
        </div>
        <HorizontalCard :article="subArticles[2]" />
      </div>
    </div>
    <div class="d-block d-md-none">
      <ActivitySwiper :article="subArticles"/>
    </div>
  </div>
</template>

<script>
import VerticalCard from "../components/card/VerticalCard.vue";
import HorizontalCard from "../components/card/HorizontalCard.vue";
import ActivitySwiper from "../components/swiper/NewActivity.vue";
import acitvityList from "../assets/data/acitvities.json";

export default {
  data() {
    return {
      subArticles: [],
    };
  },
  components: {
    VerticalCard,
    HorizontalCard,
    ActivitySwiper
  },
  created() {
    this.subArticles = acitvityList.activities;
  },
}
</script>