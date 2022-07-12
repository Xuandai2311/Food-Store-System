<template>
  <div class="mb-17">
    <header-view />
    <div class="mx-4">
      <div class="py-4 flex justify-between items-center border-b border-gray">
        <div class="flex gap-3 items-center">
          <img src="@/assets/images/icon/discount.png" alt="Discount" />
          <p>Khuyến mãi</p>
        </div>
        <div class="flex items-center">
          <p class="text-grayDark">24</p>
          <el-link
            @click="handleClickGoToDeveloping"
            target="_blank"
            class="flex"
          >
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </el-link>
        </div>
      </div>
      <div class="py-4 flex justify-between items-center border-b border-gray">
        <div class="flex gap-3 items-center">
          <img src="@/assets/images/icon/coins.png" alt="Coins" />
          <p>Xu</p>
        </div>
        <div class="flex items-center">
          <p class="text-grayDark">10.000 xu</p>
          <el-link
            @click="handleClickGoToDeveloping"
            target="_blank"
            class="flex"
          >
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </el-link>
        </div>
      </div>
      <div class="py-4 flex justify-between items-center border-b border-gray">
        <div class="flex gap-3 items-center">
          <img src="@/assets/images/wallet.svg" alt="Coins" />
          <p>Thanh toán</p>
        </div>
        <div class="flex items-center">
          <el-link
            @click="handleClickGoToDeveloping"
            target="_blank"
            class="flex"
          >
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </el-link>
        </div>
      </div>
      <div class="py-4 flex justify-between items-center border-b border-gray">
        <div class="flex gap-3 items-center">
          <i class="el-icon-location-information text-green text-xl"></i>
          <p>Địa chỉ</p>
        </div>
        <div class="flex items-center">
          <el-link
            @click="handleClickGoToDeveloping"
            target="_blank"
            class="flex"
          >
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </el-link>
        </div>
      </div>
      <div class="py-4 flex justify-between items-center border-b border-gray">
        <div class="flex gap-3 items-center">
          <i class="el-icon-message text-blue text-xl"></i>
          <p>Mời bạn bè</p>
        </div>
        <div class="flex items-center">
          <el-link
            @click="handleClickGoToDeveloping"
            target="_blank"
            class="flex"
          >
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </el-link>
        </div>
      </div>
      <div class="py-4 flex justify-between items-center border-b border-gray">
        <div class="flex gap-3 items-center">
          <i class="el-icon-phone-outline text-green text-xl"></i>
          <p>Trung tâm trợ giúp</p>
        </div>
        <div class="flex items-center">
          <el-link
            @click="handleClickGoToDeveloping"
            target="_blank"
            class="flex"
          >
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </el-link>
        </div>
      </div>
      <div class="py-4 flex justify-between items-center border-b border-gray">
        <div class="flex gap-3 items-center">
          <i class="el-icon-document text-green text-xl"></i>
          <p>Chính sách quy định</p>
        </div>
        <div class="flex items-center">
          <el-link
            @click="handleClickGoToDeveloping"
            target="_blank"
            class="flex"
          >
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </el-link>
        </div>
      </div>
      <div class="py-4 flex justify-between items-center border-b border-gray">
        <div class="flex gap-3 items-center">
          <i class="el-icon-setting text-blue text-xl"></i>
          <p>Cài đặt</p>
        </div>
        <div class="flex items-center">
          <el-link
            @click="handleClickGoToDeveloping"
            target="_blank"
            class="flex"
          >
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </el-link>
        </div>
      </div>
      <div class="py-4 flex justify-between items-center border-b border-gray">
        <div class="flex gap-3 items-center">
          <i class="el-icon-fork-spoon text-red-base text-xl"></i>
          <p>Về FoodNow</p>
        </div>
        <div class="flex items-center">
          <el-link
            @click="handleClickGoToDeveloping"
            target="_blank"
            class="flex"
          >
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    HeaderView: () => import("./components/HeaderView.vue"),
  },
  methods: {
    handleClickGoToDeveloping() {
      this.$router.push({ path: "/developing" });
    },
  },
};
</script>

<style></style>
