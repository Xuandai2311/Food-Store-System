<template>
  <div class="menu mx-7 bg-background2">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Menu Food" name="menufood"
        ><div class="menu-food mb-4">
          <div class="relative">
            <img
              class="opacity-75 inline-block w-ful my-4"
              src="@/assets/images/backgroundmenufood.png"
              alt="Background Menu Food"
            />
            <router-link to="/home/menu" tag="button">
              <h2 class="absolute text-white font-bold text-4xl top-20 left-17">
                Menu Đồ Ăn
              </h2>
            </router-link>
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div
              class="menu-item"
              v-for="item in listMenuFood"
              :key="item.id"
              @click="abc"
            >
              <img
                class="w-28 h-28 rounded-full"
                :src="getImgUrl(item.img)"
                :alt="item.img"
              />
              <h2 class="font-semibold">{{ item.title }}</h2>
            </div>
          </div>
        </div></el-tab-pane
      >
      <el-tab-pane label="Menu Drink" name="menudrink"
        ><div class="menu-drink">
          <div class="relative">
            <img
              class="opacity-75 inline-block w-ful my-4 rounded-3xl h-44 w-full"
              src="@/assets/images/bgcoffee.png"
              alt="Background Menu Food"
            />
            <h2 class="absolute text-white font-bold text-4xl top-20 left-14">
              Menu Đồ Uống
            </h2>
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div class="menu-item" v-for="item in listMenuDrink" :key="item.id">
              <img
                class="w-28 h-28 rounded-full"
                :src="getImgUrl(item.img)"
                :alt="item.img"
              />
              <h2 class="font-semibold">{{ item.title }}</h2>
            </div>
          </div>
        </div></el-tab-pane
      >
    </el-tabs>
  </div>
</template>
s

<script>
export default {
  data() {
    return {
      activeName: "menufood",
      listMenuFood: [
        {
          id: 1,
          title: "Bánh Mì",
          img: "Banhmibonuongphomai",
        },
        {
          id: 2,
          title: "Cơm",
          img: "com",
        },
        {
          id: 3,
          title: "Pizza",
          img: "pizza",
        },
        {
          id: 4,
          title: "Đồ Ăn Nhanh",
          img: "pastfood",
        },
      ],
      listMenuDrink: [
        {
          id: 1,
          title: "Trà Sữa",
          img: "sua-tuoi-tran-chau-baby-kem-coffee",
        },
        {
          id: 2,
          title: "Coffee",
          img: "den-da",
        },
        {
          id: 3,
          title: "Nước Giải Khát",
          img: "nuoc-sau",
        },
        {
          id: 4,
          title: "Đồ Uống Có Cồn",
          img: "Chivas-21-nam",
        },
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      let images = require.context("@/assets/images/", false, /\.png$/);
      return images("./" + img + ".png");
    },
    abc() {
      console.log("test");
    },
  },
};
</script>

<style lang="scss">
.menu {
  .el-tabs__item {
    font-size: 16px;
  }
  .el-tabs__item.is-active {
    color: theme("colors.red-base");
    font-size: 16px;
  }
  .el-tabs__active-bar {
    background-color: theme("colors.red-base");
  }
  .el-tabs__nav-wrap::after {
    background-color: none;
  }
}
</style>
