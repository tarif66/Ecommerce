import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productsInBasket: [],
    test: []
  },

  mutations: {

    loadProducts(state, products) {
      state.products = products;
    },  

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

    loadProduct({ commit }) {
      axios
      .get('https://fakestoreapi.com/products') 
      .then(response => {
        commit('loadProducts', response.data);
        console.log(response.data);
    })
  },

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
