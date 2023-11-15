<template>
  <div class="py-5" data-aos="fade-up">
    <div class="container">
      <div class="row">
        <div class="col-md-7 position-relative">
          <div class="d-columnCenter">
            <h3 class="fs-large mb-4">
              <img src="src/assets/images/title/service-email.svg" alt="民眾服務信箱" />
            </h3>
            <p class="fw-bold fs-5 mb-2">{{ title }}</p>
            <p class="text-center fw-bold fs-5 w-75">{{ content }}</p>
            <img src="src/assets/images/footer-cat.png" class="cat" alt="2023 THE F2E 立委競選" />
          </div>
        </div>
        <div class="col-md-5">
          <div class="d-columnCenter pt-6 pb-7">
            <input type="text" class="form-control w-75 mb-4" id="name" placeholder="您的名字">
            <input type="mail" class="form-control w-75 mb-4" id="mail" placeholder="您的Email">
            <input type="tel" class="form-control w-75 mb-4" id="tel" placeholder="您的手機" oninput="value=value.replace(/[^\d]/g,'');if(value<0)value=0">
            <textarea rows="3" class="form-control w-75 mb-4" id="suggestion" placeholder="您的建言"></textarea>
            <button type="button" class="btn  icon-btn-lg btn-primary rounded-pill text-white fs-4 mb-2">送出意見</button>
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
      title: '您的聲音，我們的行動！',
      content: '親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！'
    };
  },
};
</script>

<style lang="scss" scoped>
.cat {
  position: absolute;
  bottom: -115px;
}
</style>