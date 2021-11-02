<template>
  <div class="products-list">
    <div :key="item.id" v-for="item in items">
      <ProductCard :product="item" />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "Products",
  props: {
    items: Array,
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: space-evenly;
}
@media screen and (max-width: 425px) {
  .products-list {
    overflow: hidden;
    max-width: 400px;
  }
}
</style>
