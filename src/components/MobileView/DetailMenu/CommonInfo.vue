<template>
  <div class="common-info divide-x-2 divide-gray flex justify-between py-6">
    <div class="text-left" v-for="item in commonInfo" :key="item.id">
      <p class="font-bold text-base">{{ item.detail }}</p>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commonInfo: {
      type: Array,
      require: true,
    },
  },
};
</script>
