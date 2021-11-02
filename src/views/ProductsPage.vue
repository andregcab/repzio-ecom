<template>
  <div class="home">
    <RepBar :salesRep="salesRep" :companyInfo="companyInfo" />
    <Products :items="items" />
  </div>
</template>

<script>
import RepBar from "@/components/RepBar";
import Products from "@/components/Products";
import { getData } from "../utils";

export default {
  name: "ProductsPage",
  components: {
    RepBar,
    Products,
  },
  data() {
    return {
      items: [],
      salesRep: {},
      companyInfo: {},
    };
  },
  methods: {
    async fetchItems() {
      const data = await getData("items");
      return data || [];
    },
    async fetchRepInfo() {
      const data = await getData("SalesRep");
      return data || {};
    },
    async fetchCompanyInfo() {
      const data = await getData("companyInfo");
      return data || [];
    },
  },
  async created() {
    this.items = await this.fetchItems();
    this.salesRep = await this.fetchRepInfo();
    this.companyInfo = await this.fetchCompanyInfo();
  },
};
</script>
