<template>
  <div class="card">
    <div class="card-header">
      <h3 class="mb-0">Lista de productos</h3>
    </div>
    <div class="card-body">
      <FiltersForm ref="filters-form" :is_search="is_search" @search="getSearch"></FiltersForm>
      <TableList ref="table" :listAll="list" :is_search="is_search" :add="add" @deleteItem="deleteItem"
        @selectItem="selectItem" @paginate="paginateContent"></TableList>
    </div>
  </div>
</template>
<script>

import FiltersForm from '../components/FiltersProduct.vue'
import TableList from '../components/TableProduct.vue'

export default {
  components: {
    FiltersForm,
    TableList,
  },
  props: {
    add: {
      type: Boolean,
      default: false,
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      list: [],
      paginate: 0,
      length: 10,
      is_search: false
    }
  },
  methods: {
    getProduct(item) {
      this.list.push(item);
    },
    selectItem(item) {
      this.$emit("selectItem", item)
    },
    paginateContent(paginate) {
      this.paginate = paginate * this.length;
      this.getSearch();
    },
    async getSearch(search) {
      this.is_search = true;
      let list = [];
      let body = { ...search }
      /** USAR EN CASO SE HAGA LA PAGINACION EN BACKEND*/
      body.length = this.length;
      body.start = this.paginate

      let url = 'search-product'

      try {
        const result = await axios.post(url, body);
        if (result.status === 200) {
          const resultData = result.data;
          if (resultData.success) {
            Alerts.showToastMessage(resultData.message, 'center');
            list = resultData.data;

            /** USAR EN CASO SE HAGA LA PAGINACION EN BACKEND*/
            this.$refs['table'].filterList(list, resultData["count"])
          } else {
            Alerts.showToastErrorMessage(resultData.message, 'center')
          }
          this.is_search = false;
        }
      } catch (e) {
        Alerts.showErrorMessage();
        this.is_search = false;
      }
      this.list = list;

    },
    deleteItem(item) {
      this.list = this.list.filter((myitem) => myitem !== item)
    },
    validateProductsInList() {
      for (const product of this.products) {
        for (const myproduct of this.list) {
          if (product.id === myproduct.id) {
            myproduct.quantity = parseFloat(myproduct.quantity) - parseFloat(product.quantity);
          }
        }
      }
    },
    addProductsToList(product) {
        for (const item of this.list) {
          if (product.id === item.id) {
            item.quantity = parseFloat(item.quantity) - parseFloat(product.quantity);
          }
        }
    },
    deleteProductsToList(product) {
        for (const item of this.list) {
          if (product.id === item.id) {
            item.quantity = parseFloat(item.quantity) + parseFloat(product.quantity);
          }
        }
    }
  },
}
</script>