<template>
  <div class="container px-5 mb-3" data-aos="fade-up">
    <div class="d-flex justify-content-between position-relative mb-5">
      <div class="subject">
        <img src="src/assets/images/activity.svg" class="mb-3" alt="2023 THE F2E 立委競選" />
        <img src="src/assets/images/slogan.svg" alt="從喵的眼中看見台灣" />
      </div>
      <img id="nameFilled" src="src/assets/images/candidate-name-white.svg" alt="候選人-喵立翰" />
      <img src="src/assets/images/candidate.png" class="candidateImg" alt="候選人-喵立翰" />
    </div>
    <div class="d-flex">
      <img src="src/assets/images/keep-it-possible.svg" alt="keep-it-possible" />
      <div class="">
        <img id="nameOutline" src="src/assets/images/candidate-name-outline.svg" class="mb-5" alt="候選人-喵立翰" />
        <div class="slogan tag border-primary py-5 px-7">
          <h4 class="text-center fw-bold fs-1 pt-1 mb-5">{{ title }}</h4>
          <p class="fw-bold fs-5 mb-4">
            {{ content_first }}
            <br>
            <br>
            {{ content_secondary }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '護航台灣幸福經濟  從照顧每一隻貓咪開始',
      content_first: '我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。',
      content_secondary: '因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。',
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 85) {
        document.querySelector('#nameFilled').classList.add('up');
        document.querySelector('#nameOutline').classList.add('left');
      } else {
        document.querySelector('#nameFilled').classList.remove('up');
        document.querySelector('#nameOutline').classList.remove('left');
      }
      // if(window.pageYOffset > 85) {
      //   document.querySelector('#nameFilled').classList.add('up');
      //   document.querySelector('#nameOutline').classList.add('left');
      // } else {
      //   document.querySelector('#nameFilled').classList.remove('up');
      //   document.querySelector('#nameOutline').classList.remove('left');
      // }
    });
  },
  unmounted() {
    window.removeEventListener('scroll');
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 90px;
}

.subject {
  padding-top: 168px;
}

.slogan {
  border: 5px solid #4527A0;
  background-color: #fff;
  border-radius: 80px 0;
  box-shadow: -15px 20px 0px 0px #4527A0;
  margin-left: 64px;
}
.candidateImg{
  z-index: 99;
  @media (min-width: 1024px) {
    position: absolute;
    right: 6%;
    top: 28px;
  }
}
.up {
  animation-name: moveUp;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

.left {
  animation-name: moveLeft;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}
</style>