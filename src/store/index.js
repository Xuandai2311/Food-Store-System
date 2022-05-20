import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listProduct: [],
    categories: [
      {
        id: 1,
        name: "banhmi",
        title: "Bánh Mì",
      },
      {
        id: 2,
        name: "com",
        title: "Cơm",
      },
      {
        id: 3,
        name: "pizza",
        title: "Pizza",
      },
      {
        id: 4,
        name: "fastfood",
        title: "Fast Food",
      },
    ],
    saleItem: [
      {
        id: 1,
        name: "sale",
      },
      {
        id: 2,
        name: "notsale",
      },
    ],
    Products: [
      {
        id: 1,
        title: "Bánh Mì Gà Quay",
        img: "banhmigaquay",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        categorie: "banhmi",
        sale: "sale",
      },
      {
        id: 2,
        title: "Bánh Mì Trứng Rán",
        img: "banhmitrungran",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        categorie: "banhmi",
        sale: "sale",
      },
      {
        id: 3,
        title: "Bánh Mì Thập Cẩm",
        img: "banhminamthapcam",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        categorie: "banhmi",
        sale: "sale",
      },
      {
        id: 4,
        title: "Bánh Mì Thịt Nướng",
        img: "BanhmiThitnuong",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "15000",
        cost: "30000",
        categorie: "banhmi",
        sale: "sale",
      },
      {
        id: 5,
        title: "Bánh Mì Gà Nướng",
        img: "Banhmiganuong",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "30000",
        cost: "",
        categorie: "banhmi",
        sale: "notsale",
      },
      {
        id: 6,
        title: "Bánh Mì Thịt Nướng",
        img: "BanhmiThitnuong",
        descriptions: "Gà quay thơm nóng, rau sống, nước sốt đặc biệt",
        priceSale: "30000",
        cost: "",
        categorie: "banhmi",
        sale: "notsale",
      },
      {
        id: 7,
        title: "Pizza Thịt",
        img: "pizza-thit",
        descriptions: "pizza thịt nóng, thịt tươi ngon",
        priceSale: "90000",
        cost: "150000",
        categorie: "pizza",
        sale: "sale",
      },
      {
        id: 8,
        title: "Cơm Gà Nướng",
        img: "com-ga-nuong",
        descriptions: "Cơm nấu niêu đất, gà nướng đậm đà",
        priceSale: "80000",
        cost: "",
        categorie: "com",
        sale: "notsale",
      },
      {
        id: 9,
        title: "Burger Thịt Nướng",
        img: "burgerthitnuong",
        descriptions: "Burger với thịt nướng đặc biệt, rau tươi",
        priceSale: "500000",
        cost: "80000",
        categorie: "fastfood",
        sale: "sale",
      },
    ],
    cart: [],
  },
  getters: {
    Products: (state) => state.Products,
    cart: (state) => state.cart,
    cartAmount: (state) => state.cart.length,
    categories: (state) => state.categories,
    saleItem: (state) => state.saleItem,
    cartTotalAmount: (state) => {
      return state.cart.reduce((total, item) => {
        return total + item.quantity * item.priceSale;
      }, 0);
    },
  },
  mutations: {
    PUSH_PRODUCT_TO_CART: (state, id) => {
      //find the product in the products list
      let product = state.Products.find((Products) => Products.id === id);
      //find the product in the cart list
      let cartProduct = state.cart.find((Products) => Products.id === id);
      if (cartProduct) {
        //product already present in the cart. so increase the quantity
        cartProduct.quantity++;
      } else {
        state.cart.push({
          // product newly added to cart
          ...product,
          quantity: 1,
        });
      }
    },
    REMOVE_PRODUCT_FROM_CART: (state, id) => {
      //find the product in the cart list
      let cartProduct = state.cart.find((product) => product.id === id);
      cartProduct.quantity--;
    },
  },
  actions: {},
  modules: {},
});
