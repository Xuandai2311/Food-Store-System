import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotItem: [
      {
        id: 1,
        title: "Bánh Mì Gà Quay",
        img: "banhmigaquay",
        priceSale: "15000",
        cost: "30000",
      },
      {
        id: 2,
        title: "Bánh Mì Trứng Rán",
        img: "banhmitrungran",
        priceSale: "15000",
        cost: "30000",
      },
      {
        id: 3,
        title: "Bánh Mì Thập Cẩm",
        img: "banhminamthapcam",
        priceSale: "15000",
        cost: "30000",
      },
      {
        id: 4,
        title: "Bánh Mì Thịt Nướng",
        img: "BanhmiThitnuong",
        priceSale: "15000",
        cost: "30000",
      },
    ],
    banhMi: [
      {
        id: 1,
        title: "Bánh Mì Gà Quay",
        img: "banhmigaquay",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        num: "1",
      },
      {
        id: 2,
        title: "Bánh Mì Trứng Rán",
        img: "banhmitrungran",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        num: "2",
      },
      {
        id: 3,
        title: "Bánh Mì Thập Cẩm",
        img: "banhminamthapcam",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        num: "3",
      },
      {
        id: 4,
        title: "Bánh Mì Thịt Nướng",
        img: "BanhmiThitnuong",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        num: "4",
      },
      {
        id: 5,
        title: "Bánh Mì Gà Nướng",
        img: "Banhmiganuong",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        num: "5",
      },
      {
        id: 6,
        title: "Bánh Mì Thịt Nướng",
        img: "BanhmiThitnuong",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        num: "6",
      },
    ],
    cart: [],
  },
  getters: {
    hotItem: (state) => state.hotItem,
    banhMi: (state) => state.banhMi,
  },
  mutations: {
    PUSH_ITEM_TO_CART: (state, cart) => {
      state.banhMi = cart;
    },
  },
  actions: {},
  modules: {},
});
