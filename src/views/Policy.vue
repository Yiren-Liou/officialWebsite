<template>
  <div id="policy" class="bg-primary py-5" data-aos="fade-up">
    <div class="container pb-4">
      <h3 class="text-center fs-large mb-5">
        <img src="src/assets/images/title/policy.svg" alt="政策議題" />
      </h3>
      <div class="row">
        <div class="col-md-4">
          <Card :tag="'政策一'" :article="article[0]" />
        </div>
        <div class="col-md-4">
          <div class="py-4 pt-md-5 pb-md-0">
            <Card :tag="'政策二'" :article="article[1]" />
          </div>
        </div>
        <div class="col-md-4">
          <Card :tag="'政策三'" :article="article[2]" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Card from "../components/card/TextCard.vue";
import policyList from "../assets/data/policy.json";

export default {
  data() {
    return {
      article: [],
    };
  },
  components: {
    Card,
  },
  created() {
    this.article = policyList.policy
  },
}
</script>