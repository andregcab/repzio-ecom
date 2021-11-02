<template>
  <router-link class="back-link" to="/">Back to results</router-link>
  <div class="product-view">
    <div class="product-img">
      <img
        :class="[outOfStock && 'out-of-stock']"
        :src="`${product.PhotoName}?w=500&h=500`"
        alt="product image"
      />
      <div v-show="outOfStock" class="stock-alert">Out Of Stock</div>
    </div>
    <div class="product-info">
      <p class="product-name">{{ product.ItemName }}</p>
      <div class="secondary-info">
        <p class="product-price">{{ `$${parseFloat(product.BasePrice).toFixed(2)}` }}</p>
        <p class="product-dims">{{ product.Dimensions?.toLowerCase() }}</p>
        <p class="product-description">{{ product.Description }}</p>
        <p class="product-stock">{{ inStockAmount }} left in stock</p>
        <div class="ids">
          <span class="id">mfg id: {{ product.ManufacturerID }}</span>
          <span class="id">product# {{ product.id }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  props: {
    product: Object,
  },
  computed: {
    outOfStock() {
      return this.product.OnHandQuantity <= 0;
    },
    inStockAmount() {
      return this.outOfStock ? 0 : this.product.OnHandQuantity;
    },
  },
};
</script>

<style scoped>
.back-link {
  font-size: 20px;
  position: absolute;
  left: 30px;
  margin-top: 15px;
  display: inline-block;
  text-decoration: none;
  color: inherit;
}
.back-link:hover {
  color: gray;
  cursor: pointer;
}
.product-view {
  margin: 100px;
  display: flex;
  flex-wrap: wrap;
}
.product-img {
  position: relative;
  text-align: center;
  color: white;
  background-position: center;
}
.out-of-stock {
  -webkit-filter: brightness(70%);
  filter: brightness(70%);
}
.stock-alert {
  position: absolute;
  font-size: 30px;
  top: 38%;
  left: 51%;
  transform: translate(-50%, -50%);
}
.product-info {
  margin-left: 80px;
  margin-bottom: 50px;
}
.product-name {
  font-size: 30px;
  margin-top: 0;
  text-align: left;
}
.secondary-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.product-price {
  font-size: 28px;
  font-weight: bold;
  color: rgb(199, 53, 0);
}
.product-dims {
  font-size: 20px;
}
.product-description {
  max-width: 400px;
  text-align: left;
  font-size: 18px;
  margin: 20px 0px 20px 0px;
  font-style: italic;
  color: rgb(100, 100, 100);
}
.product-stock {
  font-size: 18px;
}
.ids {
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
}
.id {
  margin-right: 20px;
  font-weight: lighter;
}
@media screen and (max-width: 1026px) {
  .product-info {
    margin-left: 40px;
    margin-top: 40px;
  }
}
@media screen and (max-width: 426px) {
  .product-view {
    margin: 50px;
  }
  img {
    width: 240px;
  }
  .stock-alert {
    font-size: 16px;
  }
  .product-info {
    margin-left: 0;
    margin-bottom: 50px;
  }
  .product-name {
    font-size: 20px;
  }
  .product-price {
    font-size: 18px;
  }
  .product-description {
    text-align: left;
    font-size: 16px;
  }
  .product-stock {
    font-size: 18px;
  }
  .id {
    margin-top: 5px;
  }
  @media screen and (max-width: 375px) {
    img {
      width: 200px;
    }
  }
}
</style>
