<template>
  <div
    class="mb-16 grid sm:grid-cols-3 lg:grid-cols-4 items-center justify-items-center fixed w-full left-0 z-9999"
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
      <router-link to="/developing">Về chúng tôi</router-link>
      <router-link to="/developing">liên hệ</router-link>
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
        <el-dropdown trigger="click" @command="handleCommand">
          <button>
            <img
              class="bg-slate-900 p-4 rounded-2.5xl hover:bg-slate-500"
              src="@/assets/images/icon/web/User.png"
              alt="User"
            />
          </button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              command="1"
              class="py-4 flex items-center gap-4 text-lg font-bold text-black"
            >
              <img src="@/assets/images/icon/web/User.png" alt="User" />
              Profile
            </el-dropdown-item>
            <el-dropdown-item
              command="2"
              class="py-4 flex items-center gap-4 text-lg font-bold text-black"
            >
              <img src="@/assets/images/icon/web/Setting.png" alt="Setting" />
              Cài đặt
            </el-dropdown-item>
            <el-dropdown-item
              command="3"
              class="py-4 flex items-center gap-4 text-lg font-bold text-black"
            >
              <img src="@/assets/images/icon/web/Logout.png" alt="Logout" />
              Đăng Xuất
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: { ...mapGetters(["cartAmount"]) },
  methods: {
    handleCommand(command) {
      if (command == 1) {
        this.$router.push({ path: "/mobile" });
      }
      if (command == 2) {
        this.$router.push({ path: "/admin" });
      }
      if (command == 3) {
        this.$router.push({ path: "/Login" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-dropdown-menu {
  border-radius: 16px;
}
</style>
