<template>
  <div class="Why_Choice">
    <p class="mt-36 mb-4 font-bold text-red-base uppercase">What we serve</p>
    <h2 class="text-4xl mb-12 font-bold text-black" data-aos="fade-right">
      Why Choice What2Eat ?
    </h2>
    <div class="flex justify-around">
      <div
        class="relative mt-60"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <img
          class="phone absolute bottom-10 ml-2"
          src="@/assets/images/Web/phone.png"
          alt="phone"
        />
        <h2 class="text-3xl font-bold">Easy</h2>
        <p class="w-2/3 mx-auto mt-4 text-lg">
          Thao tác đơn giản chỉ với chiếc điện thoại
        </p>
      </div>
      <div
        class="relative mt-60"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <img
          class="rocket absolute bottom-10 ml-2"
          src="@/assets/images/Web/rocket.png"
          alt="rocket"
        />
        <h2 class="text-3xl font-bold">Fast</h2>
        <p class="w-2/3 mx-auto mt-4 text-lg">Tốc độ giao hàng thần tốc</p>
      </div>
      <div
        class="relative mt-60"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <img
          class="box absolute bottom-10 ml-2"
          src="@/assets/images/Web/box.png"
          alt="box"
        />
        <h2 class="text-3xl font-bold">Safe</h2>
        <p class="w-2/3 mx-auto mt-4 text-lg">
          Đóng gói cẩn thận và đảm bảo chất lượng
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/animation";
.rocket {
  animation: toBottomFromTop 4s forwards infinite;
  transform: rotate(30deg);
}
.phone {
  animation: tada 5s infinite linear;
}
.box {
  animation: smallToBig 3s alternate infinite ease;
}
</style>
