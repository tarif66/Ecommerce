<template>
  <div id="nav">
    <router-link to="/">Home</router-link> -
    <router-link to="/basket">Shopping Bag ({{this.productsInBasket.length}})</router-link> 
  </div>
  <router-view/>
</template>

<script>
import { mapState } from 'vuex';

export default {
    created() {
      this.$store.dispatch('loadProduct');
      this.$store.dispatch('loadBasket')
    },

    computed:mapState(
        ['productsInBasket']
      )
    }

  
  
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 80px 72px;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;


  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
