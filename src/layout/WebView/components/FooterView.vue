<template>
  <div class="Footer grid grid-cols-4 items-end justify-items-center py-9">
    <div class="col-span-1 text-left">
      <a href="/">
        <img class="w-36" src="@/assets/images/logo.png" alt="Logo" />
      </a>
      <p class="my-9">
        We cook and deliver the tastiest
        <br />food right away to your <br />designated location
      </p>
      <div class="flex gap-4">
        <a href>
          <img src="@/assets/images/Facebook.png" alt="Facebook" />
        </a>
        <a href>
          <img src="@/assets/images/Instagram.png" alt="Instagram" />
        </a>
        <a href>
          <img src="@/assets/images/Twitter.png" alt="Twitter" />
        </a>
      </div>
    </div>
    <div class="col-span-2 flex gap-24 text-left">
      <div>
        <h2 class="text-lg font-semibold mb-9">About</h2>
        <div class="grid gap-4">
          <a href="/">About Us</a>
          <a href="/">Features</a>
          <a href="/">News</a>
          <a href="/">Menu</a>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-semibold mb-9">Company</h2>
        <div class="grid gap-4">
          <a href="/">why Đ Food</a>
          <a href="/">Partner with Us</a>
          <a href="/">FAQ</a>
          <a href="/">Blog</a>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-semibold mb-9">Support</h2>
        <div class="grid gap-4">
          <a href="/">Account</a>
          <a href="/">Support Center</a>
          <a href="/">Feedback</a>
          <a href="/">Contact Us</a>
        </div>
      </div>
    </div>
    <div class="col-span-1 text-left">
      <h2 class="text-2xl font-semibold">Get In Touch</h2>
      <p class="my-9">
        question or feedback?
        <br />we'd love to hear from you
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
            src="@/assets/images/icon/Send.png"
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
