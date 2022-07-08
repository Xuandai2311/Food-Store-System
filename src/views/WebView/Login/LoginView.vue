<template>
  <div class="login hidden sm:block py-20">
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
      <el-form :model="formLogin" :rules="rules" ref="ruleForm" class="p-12">
        <div class="flex justify-between items-start">
          <div class="grid justify-items-start">
            <p>
              Welcome to
              <b class="text-red-base">Food Now</b>
            </p>
            <p class="my-6 text-3xl font-bold text-red-base uppercase">
              Đăng nhập
            </p>
          </div>
          <div>
            <p>Bạn chưa có tài khoản ?</p>
            <a href="/signup" class="text-bgLogIn-yellowDark">Đăng kí ngay</a>
          </div>
        </div>
        <el-form-item label="Tài khoản" prop="email"
          ><el-input
            v-model="formLogin.email"
            placeholder="Nhập mất khẩu"
          ></el-input
        ></el-form-item>
        <el-form-item label="Mật khẩu" prop="passWord">
          <el-input
            v-model="formLogin.passWord"
            show-password
            placeholder="Nhập mất khẩu"
          ></el-input
        ></el-form-item>
        <a href class="text-red-base float-right text-sm">Quên mật khẩu</a>
        <el-button
          class="my-8 w-full button-base"
          @click="handleLoggin(formLogin)"
          >Đăng Nhập</el-button
        >
        <p class="my-5 text-grayDark font-bold">OR</p>
        <div class="flex gap-2">
          <el-button
            @click="handleClickGoToDevelopingView"
            class="bg-bgLogIn-yellowLight rounded-lg border-0 items-center text-bgLogIn-yellow pr-11"
          >
            <div class="flex items-center gap-3">
              <img src="@/assets/images/icon/web/google.png" alt="google" />
              <p>Đăng nhập với Google</p>
            </div>
          </el-button>
          <el-button
            @click="handleClickGoToDevelopingView"
            class="bg-grayLight rounded-lg border-0 p-3"
          >
            <img src="@/assets/images/icon/web/Facebook.png" alt="facebook" />
          </el-button>
          <el-button
            @click="handleClickGoToDevelopingView"
            class="bg-grayLight rounded-lg border-0 p-3"
          >
            <img src="@/assets/images/icon/web/apple.png" alt="apple" />
          </el-button>
        </div>
      </el-form>
      <el-dialog :visible.sync="dialogDeveloping">
        <div class="grid justify-items-center">
          <img src="@/assets/images/Web/developing.png" alt="developing" />
          <h2 class="text-xl font-bold my-6">Chức năng đang bảo trì</h2>
          <p class="break-normal whitespace-normal w-2/4">
            Để nâng cao chất lượng phục vụ chức năng này đang trong thời gian
            bảo trì để có thể đem lại cho quý khách những trải nghiệm tối nhất.
            Xin lỗi về sự bất tiện này, chúng tôi sẽ thông báo sau khi bảo trì
            kết thúc.
          </p>
          <button class="button-base my-6 w-1/4" @click="handleClickClose">
            Đóng
          </button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const checkValidateEmail = (rules, value, callback) => {
      const reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!value.trim().length) {
        return callback(new Error("Bạn chưa nhập email"));
      } else if (value.trim().length && !reg.test(value)) {
        return callback(new Error("Hãy nhập email đúng"));
      } else {
        callback();
      }
    };
    const checkValidatePassWord = (rules, value, callback) => {
      if (!value.trim().length) {
        return callback(new Error("Bạn chưa nhập password"));
      } else {
        callback();
      }
    };
    return {
      formLogin: {
        userName: "",
        password: "",
      },
      dialogDeveloping: false,
      rules: {
        email: [
          {
            validator: checkValidateEmail,
          },
        ],
        passWord: [
          {
            validator: checkValidatePassWord,
          },
        ],
      },
    };
  },
  methods: {
    handleClickGoToDevelopingView() {
      this.dialogDeveloping = true;
    },
    handleClickClose() {
      this.dialogDeveloping = false;
    },
    handleLoggin() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.$router.replace("/home");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login {
  background-image: url("@/assets/images/Web/bg-LogIn.png");
  background-size: cover;
  height: 100vh;
  .formLogin {
    width: 50%;
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
