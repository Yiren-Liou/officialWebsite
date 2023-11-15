<template>
  <div class="container mb-3">
    <h3 class="text-center fs-large mb-5">
      <img src="src/assets/images/title/new-activity.svg" alt="最新活動" />
    </h3>
    <div class="row">
      <div class="col-md-5">
        <VerticalCard />
      </div>
      <div class="col-md-7">
        <div class="mb-5">
          <HorizontalCard :article="subArticles[0]"/>
        </div>
        <HorizontalCard :article="subArticles[1]"/>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalCard from "../components/card/VerticalCard.vue"
import HorizontalCard from "../components/card/HorizontalCard.vue"

export default {
  data() {
    return {
      subArticles: [
        {
          date: '2023.12.26',
          title: '帶著你的貓耳，來和我一起走！',
          content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',
          img: 'src/assets/images/activity-2.png'
        },
        {
          date: '2023.12.20',
          title: '收容所模特兒大比拼！',
          content: '活動三消息內容：今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
          img: 'src/assets/images/activity-3.png',
        }
      ]
    };
  },
  components: {
    VerticalCard,
    HorizontalCard
  },
}
</script>