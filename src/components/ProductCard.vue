<template>
  <router-link
    style="display: inline-block; text-decoration: none; color: inherit"
    :to="`/product/${product.id}`"
  >
    <div class="product-card">
      <div class="product-img">
        <img
          :class="[outOfStock && 'out-of-stock']"
          :src="`${product.PhotoName}?w=300&h=300`"
          alt="product image"
        />
        <div v-show="outOfStock" class="stock-alert">Out Of Stock</div>
      </div>
      <div class="product-info">
        <p class="product-name">{{ product.ItemName }}</p>
        <div class="secondary-info">
          <p class="product-price">{{ productPrice }}</p>
          <div class="ids">
            <span class="id">mfg id: {{ product.ManufacturerID }}</span>
            <span class="id">product# {{ product.id }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  computed: {
    outOfStock() {
      return this.product.OnHandQuantity <= 0;
    },
    productPrice() {
      return `$${parseFloat(this.product.BasePrice).toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 45px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 8px;
  padding: 50px;
}
.product-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
  font-size: 20px;
  top: 38%;
  left: 51%;
  transform: translate(-50%, -50%);
}
.product-info {
  display: flex;
  flex-direction: column;
}
.secondary-info {
  display: flex;
  justify-content: space-between;
}
.product-price {
  font-size: 25px;
  font-weight: bold;
  color: rgb(199, 53, 0);
  margin-left: 20px;
}
.product-name {
  font-size: 20px;
  font-weight: bold;
}
.ids {
  display: flex;
  margin-top: auto;
  text-align: right;
  flex-direction: column;
}
.id {
  margin: 5px 10px;
  font-weight: lighter;
}
@media screen and (min-width: 1026px) {
  .product-card {
    padding: 65px;
  }
}
@media screen and (max-width: 500px) {
  .product-card {
    padding: 20px;
  }
}
</style>
