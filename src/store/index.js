import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [
      {
        "image": "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710766772062_alternate1?$plpDeskRF$",
        "name": "The RL Fleece Sweatshirt",
        "collection": "Polo Ralph Lauren",
        "price": 169.00,
        "liked": false,
        "newArrival": true,
        "bestSeller": false,
        "colorsAvailable":3
      },
      {
        "image": "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710775885510_alternate1?$plpDeskRF$",
        "name": "Cable-Knit Cotton Jumper",
        "collection": "Polo Ralph Lauren",
        "price": 199.00,
        "liked": false,
        "newArrival": true,
        "bestSeller": true,
        "colorsAvailable":2
      },
      {
        "image": "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1352641_alternate1?$plpDeskRF$",
        "name": "Slim Fit Mesh Polo Shirt",
        "collection": "Polo Ralph Lauren",
        "price": 119.00,
        "liked": false,
        "newArrival": false,
        "bestSeller": true,
        "colorsAvailable":2
      },
      {
        "image": "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710766772062_alternate1?$plpDeskRF$",
        "name": "The RL Fleece Sweatshirt",
        "collection": "Polo Ralph Lauren",
        "price": 169.00,
        "liked": false,
        "newArrival": true,
        "bestSeller": false,
        "colorsAvailable":3
      },
      {
        "image": "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710775885510_alternate1?$plpDeskRF$",
        "name": "Cable-Knit Cotton Jumper",
        "collection": "Polo Ralph Lauren",
        "price": 199.00,
        "liked": false,
        "newArrival": true,
        "bestSeller": true,
        "colorsAvailable":2
      },
      {
        "image": "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1352641_alternate1?$plpDeskRF$",
        "name": "Slim Fit Mesh Polo Shirt",
        "collection": "Polo Ralph Lauren",
        "price": 119.00,
        "liked": false,
        "newArrival": false,
        "bestSeller": true,
        "colorsAvailable":2
      },
    ],
    productsInBasket: [],
    test: []
  },

  mutations: {

    loadBasket(state, products) {
      state.productsInBasket = products;
    },  

    addToBasket(state, product) {
      state.productsInBasket.push(product);
      localStorage.setItem("productsInBasket", JSON.stringify(state.productsInBasket));
    },

    removeFromBasket(state, productId) {
      var updatedBasket = state.productsInBasket.filter(item => productId != item.id);
      state.productsInBasket = updatedBasket;
      localStorage.setItem("productsInBasket", JSON.stringify(state.productsInBasket));
    }
  },

  actions: {

    loadBasket({ commit }) {
      if (localStorage.getItem("productsInBasket")){
        commit('loadBasket', JSON.parse(localStorage.getItem("productsInBasket")));
      }
  },

    addToBasket({commit}, product) {
      commit('addToBasket', product);
    },

    removeFromBasket({commit}, productId) {
      if (confirm('Etes-vous sur de vouloir retirer ce produit ?')){
        commit('removeFromBasket', productId);
      }
    }

  },

  modules: {
  }
})
