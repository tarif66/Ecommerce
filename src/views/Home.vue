<template>
    <div class="home">
      <div class="products">
        <div 
        v-for="(product, index) in this.products" :key="index"
        class="product" :class="{ inBasket: isInBasket(product)}">
          <img :src="product.image"
            class="product-image" />
          <div class="product-info" >
            <div class="product-title">{{product.name}}</div>
            <div class="product-collection">{{product.collection}}</div>
            <div class="product-price">{{product.price.toFixed(2)}}</div>
            <div class="product-tag" v-if="product.newArrival">New arrival</div>
            <div class="product-tag" v-if="product.bestSeller">Best seller</div>
            <div class="product-colors">{{product.colorsAvailable}} couleurs disponibles</div>

            <button v-if="!isInBasket(product)" @click="addToBasket(product)">Add to bag</button>
            <button v-else 
              class="remove" 
              @click="this.$store.dispatch('removeFromBasket', product.id)"
              >Remove this item</button>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  export default {
    name: 'Home',
      
    methods: {
      addToBasket(product) {
        if(!product.inBasket) {
          product.quantity = 1;
          this.$store.dispatch('addToBasket', product)
        }
      },
      isInBasket(product) {
        return this.productsInBasket.find(item => item.id == product.id)
      }
    },

    computed: mapState([
      'products', 'productsInBasket'
    ])
  }
  </script>
  
  <style lang="scss">
  
    .home {
  
      .products {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1px;
        
       .product {
        display: flex;
        width:100%;
        flex-direction: column;
        align-items: center;
        gap: 22px;

  
          &.inBasket {
            border: 1px solid #007bff;
          }
          
          .product-image {
            width: 100%;
            height: auto;
          }

          .product-info {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
          }

            .product-title {
              padding-left: 8px;
              color: var(--ralph-lauren-blue, #041E3A);
              font-family: "Times New Roman";
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }

            .product-collection {
              padding-top: 7px;
              padding-left: 8px;
              color: var(--ralph-lauren-blue, #041E3A);
              font-family: Helvetica;
              font-size: 11px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
                          }

            .product-price {
              padding-left: 8px;
              padding-top: 15px;
              color: var(--ralph-lauren-blue, #041E3A);
              font-family: Helvetica;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }

            .product-tag {
              padding-left: 8px;
              padding-top: 6px;
              color: var(--Greyscale-grey-lighten-3, #666);
              font-family: Helvetica;
              font-size: 13px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
                          }
                    
            .product-colors {
              padding-left: 8px;
              padding-top: 14px;
              color: var(--ralph-lauren-blue, #041E3A);
              font-family: Helvetica;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
                          }



          h4 {
            margin: 22px auto;
            font-size: 12px;
            max-width: 60%;
            font-weight: normal;
          }
  
          button {
            color: #fff;
            background-color: #007bff;
            border: 1px solid #007bff;
            border-radius: 100px;
            font-weight: 400;
            text-align: center;
            padding: 8px 16px;
            cursor: pointer;
  
            &:hover {
              opacity: 0.8;
            }
  
            &.remove {
              background-color: transparent;
              border: none;
              color: black;
              text-decoration: underline;
            }
          }
        }
      }
  
    }
  
  
  </style>
