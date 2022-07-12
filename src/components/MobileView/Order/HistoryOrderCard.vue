<template>
  <div>
    <h1>{{ timestamp }}</h1>
    <el-button @click="click">ds</el-button>
    <p>{{ orderList }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      timestamp: "",
    };
  },
  computed: {
    ...mapGetters(["orderList"]),
  },
  mounted() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
    click() {
      this.$store.commit("PUSH_TIME", this.timestamp);
      console.log(this.timestamp);
    },
  },
};
</script>
