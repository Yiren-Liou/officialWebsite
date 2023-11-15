<template>
  <div class="nav">
    <div class="bg-white shadow-sm w-100">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid px-0">
            <a class="navbar-brand" href="#">
              <img src="src/assets/images/logo.svg" alt="3號 喵立翰" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#topNavbar"
              aria-controls="topNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="topNavbar">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link fs-6"
                    :class="{'active': targetArea == 'opinions' }"
                    href="#"
                    @click="this.targetArea = 'opinions'"
                  >候選人主張
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link fs-6"
                    :class="{'active': targetArea == 'newActivity' }"
                    href="#newActivity"
                    @click="scrollTo('newActivity', $event)"
                    >最新活動</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link fs-6"
                    :class="{'active': targetArea == 'policy' }"
                    href="#policy"
                    @click="scrollTo('policy', $event)"
                    >政策議題</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link fs-6"
                    :class="{'active': targetArea == 'serviceMail' }"
                    href="#serviceMail"
                    @click="scrollTo('serviceMail', $event)"
                    >民眾服務信箱</a
                  >
                </li>
              </ul>
              <a
                class="d-center bg-primary rounded-pill text-white fs-6 px-4 py-2"
                href="#donate"
                role="button"
                @click="scrollTo('donate', $event)"
              >
                <img
                  src="src/assets/images/coin-white.svg"
                  class="me-1"
                  alt="小額捐款"
                />
                小額捐款
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetArea: 'opinions',
    };
  },
  methods: {
    scrollTo(id, e) {
      e.preventDefault();
      this.targetArea = id;
      const targetArea = document.getElementById(id);
      window.scrollTo({
        top: targetArea.offsetTop - 90,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border: 5px solid #4527a0;
  border-bottom: 0;
  z-index: 9;
}

.nav-item {
  margin-right: 50px;
  .active {
    border-bottom: 3px solid #4527a0;
  }
}
</style>