<template>
  <div
    class="modal fade"
    id="serviceMailModal"
    tabindex="-1"
    aria-labelledby="serviceMailModalLabel"
    data-bs-focus="false"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body d-columnCenter">
          <h3 class="text-center fw-bold fs-5 mb-2">{{ title }}</h3>
          <p class="text-center fw-bold mb-7">{{ content }}</p>
          <button
            type="button"
            class="btn btn-outline-primary rounded-pill border-3 fw-bold fw04"
            data-bs-dismiss="modal"
          >
            返回
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "感謝您抽出寶貴的時間給予我們寶貴的建議。",
      content:
        "我們非常重視您的意見，它是我們不斷改進和提升服務的動力。您提出的建議已經轉交給相關部門進行評估，我們將努力在未來的服務中加以考慮和實施。",
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-content {
  border-radius: 80px;
}

.modal-body {
  padding: 75px 38px;
}
</style>