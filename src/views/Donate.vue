<template>
  <div id="donate" class="bg-center" data-aos="fade-up">
    <div class="container">
      <div class="row">
        <div class="col col-md-7">
          <div class="card">
            <div v-if="!showDonateChoice" class="d-columnCenter py-8 py-md-6 px-4">
              <h3 class="d-center mb-3 mb-md-4">
                <img class="titleImg" src="/src/assets/images/title/donate.svg" alt="小額捐款" />
              </h3>
              <p class="text-center fw-bold fs-base fs-md-5 mb-2 mb-md-5">
                您的小筆捐款，<br class="d-block d-md-none">是每隻毛孩未來的大大動力!
              </p>
              <img src="/src/assets/images/total-price.svg" class="totalPriceImg mb-1 mb-md-0" alt="累積總金額" />
              <strong class="text-primary fw-bold fs-1 fs-md-large mb-2 mb-md-4">
                NT$<span class="text-primary fw-bold fs-1 fs-md-large" id="counter">{{
                  totalPrice.toLocaleString()
                }}</span>
              </strong>
              <button
                class="btn d-center btn-primary rounded-pill text-white fw-bold fs-4 px-5 py-4 mt-1"
                @click="this.showDonateChoice = true"
              >
                <img
                  src="/src/assets/images/coin-white.svg"
                  class="me-1"
                  alt="前往捐款"
                />
                前往捐款
              </button>
            </div>

            <div v-else class="px-7 py-5">
              <h4 class="text-center fw-bold fs-5 mb-2">選擇捐款方案</h4>
              <div class="row mb-4">
                <div
                  v-for="choice in donateChoice"
                  :key="choice.id"
                  class="col-md-4 mb-3 mb-md-0"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="donateChoice"
                    :id="`${choice.title}`"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-primary card-outline py-3 px-0 w-100"
                    :for="`${choice.title}`"
                  >
                    <div class="d-columnCenter">
                      <h5 class="fw-bold fs-6 mb-1">{{ choice.title }}</h5>
                      <img :src="choice.img" class="mb-1" :alt="choice.price" />
                      <span class="text-lighter d-block fs-9"
                        >已有 {{ choice.sponsorNum }} 人贊助</span
                      >
                    </div>
                  </label>
                </div>
              </div>
              <div class="card-outline d-md-flex align-items-md-center px-5 py-4 mb-5 mb-md-4">
                <label for="donatePrice" class="text-center text-md-start fw-bold fs-6 w-100 w-md-50 mb-2 mb-md-0">
                  自訂捐款金額
                </label>
                <input
                  type="number"
                  v-model="donatePrice"
                  class="form-control"
                  id="donatePrice"
                  placeholder="請輸入捐款金額"
                  oninput="value=value.replace(/[^\d]/g,'');if(value<0)value=0"
                />
              </div>
              <div class="d-columnCenter flex-column-reverse d-md-none">
                <button
                  class="btn d-center btn-outline-primary rounded-pill fw-bold fs-4 px-9"
                  @click="this.showDonateChoice = false"
                >
                  返回
                </button>
                <button
                  class="btn d-center btn-primary rounded-pill text-white fw-bold fs-4 px-5 py-4 mb-3"
                  @click="donate"
                >
                  <img
                    src="/src/assets/images/coin-white.svg"
                    class="me-1"
                    alt="我要捐款"
                  />
                  我要捐款
                </button>
              </div>
              <div class="d-none d-md-flex d-md-center">
                <button
                  class="btn d-center btn-outline-primary rounded-pill fw-bold fs-4 me-4 mb-md-0"
                  @click="this.showDonateChoice = false"
                >
                  返回
                </button>
                <button
                  class="btn d-center btn-primary rounded-pill text-white fw-bold fs-4 px-5 py-4"
                  @click="donate"
                >
                  <img
                    src="/src/assets/images/coin-white.svg"
                    class="me-1"
                    alt="我要捐款"
                  />
                  我要捐款
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import donateChoice from "../assets/data/donate.Choice.json";

export default {
  data() {
    return {
      totalPrice: 987655873,
      showDonateChoice: false,
      donateChoice: [],
      donatePrice: "",
    };
  },
  methods: {
    donate() {
      this.totalPrice += this.donatePrice;
      this.showDonateChoice = false;
      this.donatePrice = "";
    },
  },
  mounted() {
    this.donateChoice = donateChoice.choice;
    const counterUp = window.counterUp.default;
    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          counterUp(el, {
            duration: 1000,
            delay: 16,
          });
        }
      });
    };
    const IO = new IntersectionObserver(callback, { threshold: 1 });
    const targetCounter = document.querySelector("#counter");
    IO.observe(targetCounter);
  },
};
</script>

<style scoped>
.totalPriceImg {
  width: 40%;
  @media (min-width: 768px) {
    width: 35%;
  }
}

.bg-center {
  background-image: url(/src/assets/images/bg-donate.png);
  padding: 45px 0;
}

.card {
  border-radius: 80px;
}

.btn-outline-primary {
  border-width: 3px;
  padding: 20px 60px;
}

.text-lighter {
  color: #999;
}

.btn-check:checked + .btn {
  background-color: #fff;
  border-color: #4527a0;
}

.btn-check + .btn:hover {
  background-color: #fff;
  border-color: var(--bs-btn-border-color);
}
</style>