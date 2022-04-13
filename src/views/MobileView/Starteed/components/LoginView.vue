<template>
  <div class="login w-4/5 mx-auto">
    <div class="grid grid-cols-2 mt-5">
      <router-link
        to="/login"
        tag="button"
        class="col-span-1 text-2xl font-semibold text-black"
        >Đăng nhập
        <div class="w-3/4 mx-auto shadow-mini border-b-2 border-red-base"></div
      ></router-link>
      <router-link
        to="/register"
        tag="button"
        class="col-span-1 text-2xl font-semibold text-black"
        >Đăng kí</router-link
      >
    </div>
    <div class="mt-14 grid gap-14">
      <el-form :model="loginInfor" :rules="rules" ref="ruleForm" class="form">
        <el-form-item label="Email" prop="email"
          ><el-input
            v-model="loginInfor.email"
            class="border-b border-black text-lg"
          ></el-input
        ></el-form-item>
        <el-form-item label="Mật khẩu" prop="passWord">
          <el-input
            v-model="loginInfor.passWord"
            show-password
            class="border-b border-black text-lg"
          ></el-input
        ></el-form-item>
      </el-form>
      <span class="text-red text-left">Quên mật khẩu?</span>
    </div>
    <el-button
      to="/home"
      tag="button"
      @click="handleLoggin(loginInfor)"
      class="my-8 button-base"
      >Đăng nhập</el-button
    >
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
      loginInfor: {
        email: "",
        passWord: "",
      },
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
  .el-form-item__label {
    text-align: left;
    font-size: 0.875rem;
  }

  .el-input__inner {
    border: 0;
    color: theme("colors.black");
  }
}
</style>
