<template>
  <div id="serviceMail" class="py-5" data-aos="fade-up">
    <div class="container pb-8 pb-md-0">
      <div class="row">
        <div class="col-md-7 position-relative">
          <div class="d-columnCenter">
            <h3 class="d-center mb-4">
              <img
                class="titleImg"
                src="/src/assets/images/title/service-email.svg"
                alt="民眾服務信箱"
              />
            </h3>
            <p class="fw-bold fs-6 fs-md-5 mb-2">{{ title }}</p>
            <p class="text-center fw-bold fs-8 fs-md-5 w-75">{{ content }}</p>
            <img
              src="/src/assets/images/footer-cat.png"
              class="d-none d-md-block cat"
              alt="喵立翰"
            />
          </div>
        </div>
        <div class="col-md-5">
          <form class="d-columnCenter pt-3 pt-md-6 pb-7">
            <input
              type="text"
              class="form-control w-75 mb-2 mb-md-4"
              id="suggester"
              v-model="suggester"
              placeholder="您的名字"
            />
            <input
              type="mail"
              class="form-control w-75 mb-2 mb-md-4"
              id="email"
              v-model="email"
              placeholder="您的Email"
            />
            <input
              type="tel"
              class="form-control w-75 mb-2 mb-md-4"
              id="phone"
              v-model="phone"
              placeholder="您的手機"
              oninput="value=value.replace(/[^\d]/g,'');if(value<0)value=0"
            />
            <textarea
              rows="3"
              class="form-control w-75 mb-2 mb-md-4"
              id="suggestion"
              v-model="suggestion"
              placeholder="您的建言"
            ></textarea>
            <button
              type="button"
              class="btn icon-btn-lg btn-primary rounded-pill text-white fs-6 fs-md-4 mb-2"
              @click="send"
            >
              送出意見
            </button>
          </form>
        </div>
      </div>
      <img
        src="/src/assets/images/footer-cat-s.svg"
        class="d-block d-md-none cat"
        alt="喵立翰"
      />
    </div>
  </div>
  <MailSuccessBox />
</template>

<script>
import { Modal } from "bootstrap";
import MailSuccessBox from "../components/lightbox/ServiceMail.vue";

export default {
  data() {
    return {
      title: "您的聲音，我們的行動！",
      content:
        "親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！",
      suggester: '',
      email: '',
      phone: '',
      suggestion: '',
    };
  },
  components: {
    MailSuccessBox,
  },
  methods: {
    send() {
      const pass = this.checkSuggesterInfo();
      if(pass) {
        const bsModal = (id) => new Modal(document.getElementById(id));
        const target = bsModal('serviceMailModal');
        target.show();
        this.reset();
      }
    },
    checkSuggesterInfo() {
      let pass = true;
      if(!this.suggester) {
        document.querySelector('#suggester').classList.add('border-danger');
        pass = false;
      }
      if(!this.email) {
        document.querySelector('#email').classList.add('border-danger');
        pass = false;
      }
      if(!this.phone) {
        document.querySelector('#phone').classList.add('border-danger');
        pass = false;
      }
      if(!this.suggestion) {
        document.querySelector('#suggestion').classList.add('border-danger');
        pass = false;
      }
      if(pass) {
        document.querySelector('#suggester').classList.remove('border-danger');
        document.querySelector('#email').classList.remove('border-danger');
        document.querySelector('#phone').classList.remove('border-danger');
        document.querySelector('#suggestion').classList.remove('border-danger');
      }
      return pass;
    },
    reset() {
      this.suggester = '';
      this.email = '';
      this.phone = '';
      this.suggestion = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.cat {
  position: absolute;
  bottom: -60px;
  // width: 100%;
  @media (min-width: 768px){
    bottom: -115px;
  }
}
</style>