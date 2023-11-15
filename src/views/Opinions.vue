<template>
  <div class="container px-5 mb-3">
    <div class="d-flex justify-content-between position-relative mb-5">
      <div class="subject">
        <img src="src/assets/images/activity.svg" class="mb-3" alt="2023 THE F2E 立委競選" />
        <img src="src/assets/images/slogan.svg" alt="從喵的眼中看見台灣" />
      </div>
      <img src="src/assets/images/candidate-name-white.svg" alt="候選人-喵立翰" />
      <img src="src/assets/images/candidate.png" class="candidateImg" alt="候選人-喵立翰" />
    </div>
    <div class="d-flex">
      <img src="src/assets/images/keep-it-possible.svg" alt="keep-it-possible" />
      <div class="">
        <img src="src/assets/images/candidate-name-outline.svg" class="mb-5" alt="候選人-喵立翰" />
        <div class="slogan tag border-primary py-5 px-7">
          <h4 class="text-center fw-bold fs-1 pt-1 mb-5">護航台灣幸福經濟  從照顧每一隻貓咪開始</h4>
          <p class="fw-bold fs-5 mb-4">
            我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
            <br>
            <br>
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  @media (min-width: 1024px) {
    position: absolute;
    right: 6%;
    top: 28px;
  }
}
</style>