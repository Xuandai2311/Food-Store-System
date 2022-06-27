<template>
  <div class="feedback flex items-end my-24 gap-20 mx-32">
    <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
      <img src="@/assets/images/Web/feedback.png" alt="feedback" />
    </div>
    <div>
      <p class="mt-36 mb-4 font-bold text-red-base uppercase">what they say</p>
      <h2
        class="text-4xl mb-12 font-bold text-black uppercase"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        Những khách hàng của chúng tôi nói gì ?
      </h2>
      <el-carousel
        data-aos="zoom-in-down"
        data-aos-delay="200"
        data-aos-duration="1000"
        height="200px"
        direction="vertical"
        :autoplay="true"
        :interval="3000"
      >
        <el-carousel-item v-for="item in listFeedBack" :key="item.id">
          <div class="flex items-center gap-4">
            <el-avatar :size="60">
              <img :src="getImgWebPng(item.img)" :alt="item.img" />
            </el-avatar>
            <h3 class="font-bold text-lg">{{ item.user }}</h3>
          </div>
          <div class="w-3/4 ml-20 text-left text-lg">
            <p>{{ item.feedback }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { getImgWebPng } from "@/utils";
export default {
  data() {
    return {
      listFeedBack: [
        {
          id: 1,
          user: "Alex Stanton",
          img: "avt1",
          feedback:
            "I loved the place, location food atmosphere and most importantly the wonderful staff. Honestly i had nothing but good food and great ser",
        },
        {
          id: 2,
          user: "Michael",
          img: "avt2",
          feedback:
            "Đồ ăn rất ngon, tôi đã có 1 trải nghiệm thật tuyệt vời. Tôi ở nhà và thưởng thức món ăn ngon mà không cần phải đến nhà hàng",
        },
        {
          id: 3,
          user: "Linh",
          img: "avt3",
          feedback:
            "Tôi đặt món và tốc độ giao hàng thực sự khiến tôi bất ngờ, món ăn rất ngon.",
        },
      ],
    };
  },
  methods: {
    getImgWebPng,
  },
};
</script>

<style></style>
