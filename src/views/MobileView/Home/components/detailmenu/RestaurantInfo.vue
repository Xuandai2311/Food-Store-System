<template>
  <div class="resturant-info">
    <div class="name-description text-left mx-4 mt-5">
      <h2 class="text-2xl font-semibold">Đ Food</h2>
      <div class="flex justify-between mt-3">
        <p>123, Ô Chợ Dừa, Đống Đa, HN</p>
        <el-link type="danger" href="" class="">Xem địa chỉ</el-link>
      </div>
    </div>
    <div
      class="common-info divide-x-2 divide-gray flex justify-between py-6 mx-4"
    >
      <div class="text-left" v-for="item in commonInfo" :key="item.id">
        <p class="font-bold text-base">{{ item.detail }}</p>
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="delivery-info bg-white text-left p-4 border-y border-gray">
      <div class="flex justify-between">
        <p class="font-bold text-base">Khoảng Cách: 0.6Km</p>
        <el-link type="danger" href="" class="">Thay đổi địa chỉ</el-link>
      </div>
      <p>Thời gian giao hàng: 10 phút</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commonInfo: [
        {
          id: 1,
          title: "99+ Reviews",
          detail: "4.8",
        },
        {
          id: 2,
          title: "Menu",
          detail: "8",
        },
        {
          id: 3,
          title: "8AM - 10PM",
          detail: "Mở cửa",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.resturant-info {
  .divide-x-2 > :not([hidden]) ~ :not([hidden]) {
    padding-left: 10%;
  }
}
</style>
