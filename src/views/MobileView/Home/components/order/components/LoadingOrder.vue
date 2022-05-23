<template>
  <div class="mt-33vh sm:hidden">
    <div v-if="isHidden" class="grid justify-items-center mx-auto relative">
      <div class="mx-auto">
        <img src="@/assets/images/icon/loading4.png" alt="Loading" />
      </div>
      <div class="flex justify-center">
        <p class="mr-2 text-xl font-bold">Order process</p>
        <p class="text-xl font-bold animate-bounce animation-delay-75">.</p>
        <p class="mx-1 text-xl font-bold animate-bounce animation-delay-100">
          .
        </p>
        <p class="text-xl font-bold animate-bounce animation-delay-150">.</p>
      </div>
      <p class="text-grayDark">
        Wait a moment, Your order is
        <br />being processed!
      </p>
    </div>
    <div
      v-if="!isHidden"
      class="transition delay-700 duration-100 grid justify-items-center mx-auto relative"
    >
      <img src="@/assets/images/icon/loading5.png" alt="Loading" />
      <div class="flex justify-center">
        <p class="mr-2 text-xl font-bold">Order successful</p>
      </div>
      <p class="text-grayDark">
        Cool down, your food will arrive in
        <br />15 minutes.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHidden: true,
    };
  },
  mounted() {
    this.eventOrderLoading();
  },
  methods: {
    eventOrderLoading() {
      setTimeout(() => {
        this.isHidden = false;
      }, 3000);
      setTimeout(() => {
        this.$router.push("/home");
        this.$store.commit("RESET_CART");
      }, 5000);
    },
  },
};
</script>
