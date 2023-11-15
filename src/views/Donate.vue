<template>
  <div class="bg-center" data-aos="fade-up">
    <div class="container">
      <div class="row">
        <div class="col col-md-7">
          <div class="card d-center p-5">
            <h3 class="fs-large mb-4">
              <img src="src/assets/images/title/donate.svg" alt="小額捐款" />
            </h3>
            <p class="fw-bold fs-5 mb-4">
              您的小筆捐款，是每隻毛孩未來的大大動力!
            </p>
            <p class="text-primary fs-5">
              <img src="src/assets/images/total-price.svg" alt="累積總金額" />
            </p>
            <strong class="text-primary fw-bold fs-large mb-4">
              NT$<span class="text-primary fw-bold fs-large" id="counter">{{ (totalPrice).toLocaleString() }}</span>
            </strong>
            <button
              class="d-center bg-primary rounded-pill text-white fw-bold fs-4 px-5 py-4"
            >
              <img
                src="src/assets/images/coin-white.svg"
                class="me-1"
                alt="前往捐款"
              />
              前往捐款
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPrice: 987655873,
    }
  },
  mounted() {
    const counterUp = window.counterUp.default;
    const callback = entries => {
      entries.forEach( entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          counterUp( el, {
            duration: 1000,
            delay: 16,
          })
        }
      })
    }
    const IO = new IntersectionObserver( callback, { threshold: 1 } )
    const targetCounter = document.querySelector( '#counter' )
    IO.observe(targetCounter)
  }
}
</script>

<style scoped>
.bg-center{
  background-image: url(src/assets/images/bg-donate.png);
  padding: 45px 0;
}

.card {
  border-radius: 80px;
}
</style>