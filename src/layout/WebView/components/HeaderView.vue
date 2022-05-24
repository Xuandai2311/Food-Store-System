<template>
  <div class="Header grid grid-cols-4 items-center justify-items-center">
    <a href="/">
      <img class="col-span-1 w-36" src="@/assets/images/logo.png" alt="Logo" />
    </a>
    <div class="col-span-2 flex gap-8 font-semibold text-base">
      <router-link to="/">Home</router-link>
      <router-link to="/order">Menu</router-link>
      <router-link to="/reservation">Reservation</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="contact">Contact</router-link>
    </div>
    <div class="col-span-1 flex gap-5 items-center">
      <button>
        <img
          class="bg-red-base p-4 rounded-2.5xl hover:bg-rose-400"
          src="@/assets/images/icon/Search.png"
          alt="Search"
        />
      </button>
      <button>
        <img
          class="bg-violet-base p-4 rounded-2.5xl hover:bg-violet-300"
          src="@/assets/images/icon/Cart.png"
          alt="Cart"
        />
      </button>
      <button>
        <img
          class="bg-slate-900 p-4 rounded-2.5xl hover:bg-slate-500"
          src="@/assets/images/icon/User.png"
          alt="User"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
