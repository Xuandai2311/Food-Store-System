<template>
  <div class="admin-signin">
    <div class="w-1/4 mx-auto mt-24">
      <el-form :model="formLogin" class="p-12">
        <div class="mb-8 grid justify-items-start">
          <h4 class="font-bold text-2xl">Đăng nhập</h4>
          <p class="text-sm text-grayDark">
            Nhập tài khoản và mật khẩu để đăng nhập
          </p>
        </div>
        <el-form-item label="Tài khoản" prop="email">
          <el-input
            v-model="formLogin.userName"
            placeholder="Nhập mất khẩu"
          ></el-input>
        </el-form-item>
        <el-form-item label="Mật khẩu">
          <el-input
            v-model="formLogin.passWord"
            show-password
            placeholder="Nhập mất khẩu"
          ></el-input>
        </el-form-item>
        <div class="flex justify-between items-center">
          <div class="flex gap-4">
            <el-switch
              v-model="formLogin.remember"
              active-color="#13ce66"
            ></el-switch>
            <p>Remember me</p>
          </div>
          <a href class="text-red-base float-right text-sm">Quên mật khẩu</a>
        </div>
        <el-button
          class="my-8 w-full button-base"
          @click="handleLoggin(formLogin)"
          >Đăng Nhập</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLogin: {
        userName: "admin",
        passWord: "123",
        remember: false,
      },
    };
  },
  methods: {
    handleLoggin() {
      this.$router.replace("/admin/dashboard");
    },
  },
};
</script>

<style></style>
