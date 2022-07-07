<template>
  <div
    class="Header mb-16 grid sm:grid-cols-3 lg:grid-cols-4 items-center justify-items-center fixed w-4/5"
  >
    <a href="/">
      <img
        class="col-span-1 w-36"
        src="@/assets/images/Web/logo.png"
        alt="Logo"
      />
    </a>
    <div class="col-span-2 flex gap-8 font-semibold text-base">
      <router-link to="/order">Menu</router-link>
      <router-link to="/developing">Đặt chỗ</router-link>
      <router-link to="/about">Về chúng tôi</router-link>
      <router-link to="contact">liên hệ</router-link>
    </div>
    <div class="col-span-1 sm:hidden lg:block">
      <div class="flex gap-5 items-center">
        <button>
          <img
            class="bg-red-base p-4 rounded-2.5xl hover:bg-rose-400"
            src="@/assets/images/icon/web/Search.png"
            alt="Search"
          />
        </button>
        <el-badge
          v-if="cartAmount > 0"
          :value="cartAmount"
          class="item"
          type="success"
        >
          <button>
            <img
              class="bg-violet-base p-4 rounded-2.5xl hover:bg-violet-300"
              src="@/assets/images/icon/web/Cart.png"
              alt="Cart"
            />
          </button>
        </el-badge>
        <button v-else>
          <img
            class="bg-violet-base p-4 rounded-2.5xl hover:bg-violet-300"
            src="@/assets/images/icon/web/Cart.png"
            alt="Cart"
          />
        </button>
        <button>
          <img
            class="bg-slate-900 p-4 rounded-2.5xl hover:bg-slate-500"
            src="@/assets/images/icon/web/User.png"
            alt="User"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: { ...mapGetters(["cartAmount"]) },
};
</script>

<style></style>
