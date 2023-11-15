<template>
  <div class="bg-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid px-0">
          <a class="navbar-brand" href="#">
            <img src="src/assets/images/logo.svg" alt="3號 喵立翰">
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
                <a class="nav-link fs-6 active" aria-current="page" href="#">候選人主張</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-6" href="#">最新活動</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-6" href="#">政策議題</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-6" href="#">民眾服務信箱</a>
              </li>
            </ul>
            <a class="d-center bg-primary rounded-pill text-white fs-6 px-4 py-2" href="#" role="button">
                <img src="src/assets/images/coin-white.svg" class="me-1" alt="小額捐款">
                小額捐款
            </a>
          </div>
        </div>
      </nav>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.nav-item{
  margin-right: 50px;
  .active {
    border-bottom: 3px solid #4527A0;
  }
}

</style>