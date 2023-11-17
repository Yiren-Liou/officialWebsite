<template>
  <div class="nav">
    <div class="bg-white shadow-sm w-100">
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="src/assets/images/logo.svg" class="logo" alt="3號 喵立翰" />
            </a>
            <button
                class="btn border-0 p-1" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="展開選單">
              <img src="src/assets/images/hamberIcon.svg" class="" alt="3號 喵立翰" />
            </button>
            <div class="offcanvas offcanvas-end bg-primary" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  <img src="src/assets/images/logo-white.svg" class="" alt="3號 喵立翰" />
                </h5>
                <button type="button" class="btn p-1" data-bs-dismiss="offcanvas" aria-label="Close">
                  <img src="src/assets/images/close.svg" class="" alt="3號 喵立翰" />
                </button>
              </div>
              <div class="offcanvas-body d-md-start">
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
                  class="d-center d-md-none bg-white rounded-pill text-primary fs-6 py-2 ms-auto mt-3 w-50"
                  href="#donate"
                  role="button"
                  @click="scrollTo('donate', $event)"
                >
                  <img
                    src="src/assets/images/coin-purple.svg"
                    class="me-1"
                    alt="小額捐款"
                  />
                  小額捐款
                </a>
                <a
                  class="d-none d-md-block d-md-center bg-primary rounded-pill text-white fs-6 px-4 py-2"
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
.logo{
  width: 80%;
  @media (min-width: 768px) {
    width: 100%;
  }
}

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
  text-align: right;
  .active {
    border-bottom: 3px solid #4527a0;
  }
  @media (min-width: 768px) {
    margin-right: 50px;
    text-align: center;
  }
}

.nav-link {
  color: #fff;
  padding: 15px 0;
  @media (min-width: 768px) {
    color: #000;
  }
}

.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
  color: #fff;
  @media (min-width: 768px) {
    color: #000;
  }
}
</style>