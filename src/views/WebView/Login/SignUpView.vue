<template>
  <div class="SignUp hidden sm:block py-20">
    <img
      src="@/assets/images/Web/Saly-3-bg-Login.png"
      alt="Saly-3"
      class="absolute top-44 left-96 border-b"
    />
    <img
      src="@/assets/images/Web/Saly-2-bg-Login.png"
      alt="Saly-3"
      class="absolute top-44 right-60"
    />
    <div
      class="w-1/2 xl:w-1/4 mx-auto rounded-4xl bg-white shadow-2xl text-black"
    >
      <el-form :model="formLogin" class="p-12">
        <div class="flex justify-between items-start">
          <div class="grid justify-items-start">
            <p>
              Welcome to
              <b class="text-red-base">Food Now</b>
            </p>
            <p class="my-6 text-3xl font-bold text-red-base uppercase">
              Đăng Kí
            </p>
          </div>
          <div>
            <p>Bạn đã có tài khoản ?</p>
            <a href="/login" class="text-bgLogIn-yellowDark">Đăng nhập ngay</a>
          </div>
        </div>
        <el-form-item label="Email" prop="email">
          <el-input
            v-model="formLogin.email"
            placeholder="Nhập địa chỉ mail"
          ></el-input>
        </el-form-item>
        <div class="flex gap-4">
          <el-form-item label="Tài khoản" prop="userName">
            <el-input
              v-model="formLogin.userName"
              placeholder="Nhập UserName"
            ></el-input>
          </el-form-item>
          <el-form-item label="Số điện thoại" prop="phoneNumber">
            <el-input
              v-model="formLogin.phoneNumber"
              placeholder="Nhập số điện thoại"
            ></el-input>
          </el-form-item>
        </div>
        <el-form-item label="Mật khẩu" prop="passWord">
          <el-input
            v-model="formLogin.passWord"
            placeholder="Nhập mất khẩu"
            show-password
          ></el-input>
        </el-form-item>

        <el-button
          class="my-8 w-full button-base text-xl"
          @click="handleClickSignUp"
          >Đăng Kí</el-button
        >
      </el-form>
      <el-dialog :visible.sync="dialogDeveloping" width="40%">
        <div class="grid justify-items-center">
          <img src="@/assets/images/Web/developing.png" alt="developing" />
          <h2 class="text-xl font-bold my-6">Đăng kí tài khoản thành công</h2>
          <p>Đang chuyển hướng tới trang đăng nhập</p>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLogin: {
        userName: "",
        password: "",
        phoneNumber: "",
        email: "",
      },
      dialogDeveloping: false,
    };
  },
  methods: {
    handleClickSignUp() {
      this.dialogDeveloping = true;

      setTimeout(() => {
        this.$router.push({ path: "/login" });
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.SignUp {
  background-image: url("@/assets/images/Web/bg-LogIn.png");
  background-size: cover;
  height: 100vh;
  .formLogin {
    width: 50%;
  }
  .el-input__inner {
    border-radius: 20px;
  }
  .el-dialog {
    border-radius: 16px;
  }
}
.v-modal {
  display: none;
}
.el-dialog__headerbtn .el-dialog__close {
  display: none;
}
</style>
