<template>
  <ProductView :product="product" />
</template>

<script>
import ProductView from "@/components/ProductView";

export default {
  name: "Product",
  components: {
    ProductView,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    async fetchItems() {
      const response = await fetch(`http://localhost:5000/items/${this.$route.params.id}`);
      return response.json();
    },
  },
  async created() {
    this.product = await this.fetchItems();
  },
};
</script>
