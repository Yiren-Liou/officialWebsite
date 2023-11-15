<template>
  <div class="outline">
    <Navbar />
    <Opinions />
    <NewActivity />
    <Policy />
    <Donate />
    <ServiceMail />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/layout/Navbar.vue";
import Opinions from "./views/Opinions.vue";
import NewActivity from "./views/NewActivity.vue";
import Policy from "./views/Policy.vue";
import Donate from "./views/Donate.vue";
import ServiceMail from "./views/ServiceMail.vue";
import Footer from './components/layout/Footer.vue';
</script>

<style lang="scss">
.outline {
  border: 5px solid #4527A0;
}
</style>