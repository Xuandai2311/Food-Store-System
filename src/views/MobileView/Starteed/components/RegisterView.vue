<template>
  <div class="login w-4/5 mx-auto">
    <div class="grid grid-cols-2 mt-5">
      <router-link
        to="/login"
        tag="button"
        class="col-span-1 text-2xl font-semibold text-black"
        >Đăng nhập
      </router-link>
      <router-link
        to="/register"
        tag="button"
        class="col-span-1 text-2xl font-semibold text-black"
        >Đăng kí
        <div class="w-3/4 mx-auto shadow-mini border-b-2 border-red-base"></div
      ></router-link>
    </div>
    <div class="mt-14 grid gap-14">
      <div>
        <div class="sub-title text-left text-sm">Họ và tên</div>
        <el-input
          v-model="userName"
          class="border-b border-black text-lg"
        ></el-input>
      </div>
      <div>
        <div class="sub-title text-left text-sm">Email</div>
        <el-input
          v-model="email"
          class="border-b border-black text-lg"
        ></el-input>
      </div>
      <div>
        <div class="sub-title text-left text-sm">Số điện thoại</div>
        <el-input
          v-model="numberPhone"
          class="border-b border-black text-lg"
        ></el-input>
      </div>
      <div>
        <div class="sub-title text-left text-sm">Mật khẩu</div>
        <el-input
          v-model="passWord"
          show-password
          class="border-b border-black text-lg"
        ></el-input>
      </div>
    </div>
    <router-link
      to="/login"
      tag="button"
      @click="drawer = true"
      class="my-8 button-base"
      >Đăng kí</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      email: "",
      numberPhone: "",
      passWord: "",
    };
  },
};
</script>

<style lang="scss">
.login {
  .el-input__inner {
    border: 0;
    color: theme("colors.black");
  }
}
</style>
