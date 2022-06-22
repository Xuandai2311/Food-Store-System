<template>
  <div class="services">
    <p class="mt-36 mb-4 font-bold text-red-base uppercase">Services</p>
    <h2
      class="text-4xl mb-12 font-bold text-black uppercase"
      data-aos="fade-right"
    >
      service from our services to you
    </h2>
    <div class="flex justify-center">
      <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
        <img src="@/assets/images/Web/services1.png" alt="services" />
      </div>
      <div class="grid grid-cols-2 gap-9 w-1/2">
        <div
          class="p-4 bg-white rounded-xl col-span-1 text-left h-56"
          data-aos="fade-down-right"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            class="h-12 w-12"
            src="@/assets/images/Web/icon/web/discount.svg"
            alt="Discount"
          />
          <p class="my-5 font-bold">Discount system</p>
          <p>Vô số chiết khấu, ưu đãi và giảm giá cho khách hàng</p>
        </div>
        <div
          class="p-4 bg-white rounded-xl col-span-1 text-left h-56"
          data-aos="fade-down-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            class="h-12 w-12"
            src="@/assets/images/Web/icon/web/delivery.svg"
            alt="Delivery"
          />
          <p class="my-5 font-bold">Delivery</p>
          <p>
            Giao hàng nhanh chóng, đảm bảo an toàn và chất lượng món ăn trong
            vòng 45 phút
          </p>
        </div>
        <div
          class="p-4 bg-white rounded-xl col-span-1 text-left h-56"
          data-aos="fade-up-right"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            class="h-12 w-12"
            src="@/assets/images/Web/icon/web/restaurant.svg"
            alt="Restaurant"
          />
          <p class="my-5 font-bold">Restaurant</p>
          <p>Chuỗi 23 nhà hàng có mặt trên các thành phố lớn</p>
        </div>
        <div
          class="p-4 bg-white rounded-xl col-span-1 text-left h-56"
          data-aos="fade-up-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            class="h-12 w-12"
            src="@/assets/images/Web/icon/web/best.svg"
            alt="Best Quality"
          />
          <p class="my-5 font-bold">Best Quality</p>
          <p>Dịnh vụ đẳng cấp, chất lượng 3 sao được kiểm định bởi Michelin</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getImgIconWebSvg } from "@/utils";
export default {
  data() {
    return {};
  },
  methods: {
    getImgIconWebSvg,
  },
};
</script>

<style></style>
