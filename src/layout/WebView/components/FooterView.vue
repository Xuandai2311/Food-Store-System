<template>
  <div
    class="Footer grid sm:grid-cols-3 lg:grid-cols-4 items-end justify-items-center py-9"
  >
    <div class="col-span-1 text-left">
      <a href="/">
        <img class="w-36" src="@/assets/images/Web/logo.png" alt="Logo" />
      </a>
      <p class="my-9 w-4/5 text-lg font-bold">
        Chúng tôi nấu và mang đến những món ăn tuyệt với nhất đến cho bạn
      </p>
      <div class="flex gap-4">
        <a href>
          <img src="@/assets/images/Web/Facebook.png" alt="Facebook" />
        </a>
        <a href>
          <img src="@/assets/images/Web/Instagram.png" alt="Instagram" />
        </a>
        <a href>
          <img src="@/assets/images/Web/Twitter.png" alt="Twitter" />
        </a>
      </div>
    </div>
    <div class="col-span-2 flex sm:gap-12 lg:gap-24 text-left">
      <div>
        <h2 class="text-lg font-semibold mb-9">Về chúng tôi</h2>
        <div class="grid gap-4">
          <a href="/">Về chúng tôi</a>
          <a href="/">Đặc trưng</a>
          <a href="/">Tin tức</a>
          <a href="/">Menu</a>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-semibold mb-9">Công ty</h2>
        <div class="grid gap-4">
          <a href="/">Why Đ Food</a>
          <a href="/">Hợp tác</a>
          <a href="/">FAQ</a>
          <a href="/">Blog</a>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-semibold mb-9">Hỗ trợ</h2>
        <div class="grid gap-4">
          <a href="/">tài khoản</a>
          <a href="/">Đánh giá</a>
          <a href="/">Trung tâm hỗ trợ</a>
          <a href="/">Liên hệ với chúng tôi</a>
        </div>
      </div>
    </div>
    <div class="col-span-1 text-left sm:hidden lg:block">
      <h2 class="text-2xl font-semibold">Get In Touch</h2>
      <p class="my-9">
        Question Or Feedback?
        <br />We'd Love To Hear From You
      </p>
      <div class="relative">
        <input
          type="text"
          class="Input_Email h-16 w-56 pl-8 pr-16 py-7"
          placeholder="Email Address..."
        />
        <button class>
          <img
            class="Send_Img absolute"
            src="@/assets/images/icon/web/Send.png"
            alt="Send"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="scss">
.Footer {
  .Input_Email {
    background: none;
    border: 1px solid theme("colors.grayDark");
    border-radius: 2.5rem;
  }
  .Send_Img {
    right: 10%;
    bottom: 30%;
  }
}
</style>
