<template>
  <div class="card">
    <div class="card-header">
      <h3 class="mb-0">Lista de usuarios</h3>
    </div>
    <div class="card-body">
      <FiltersForm ref="filters-form" :is_search="is_search" @search="getSearch"></FiltersForm>
      <TableList ref="table" :listAll="list" :is_search="is_search" @deleteItem="deleteItem"  @paginate="paginateContent"></TableList>
      <hr>
    </div>
  </div>
</template>
<script>

import FiltersForm from '../components/FiltersUser.vue'
import TableList from '../components/TableUser.vue'

export default {
  components: {
    FiltersForm,
    TableList,
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
    paginateContent(page) {
      this.paginate = page.actualPage.index * this.length;
      this.getSearch();
    },
    async getSearch(search) {
      this.is_search = true;
      let list = [];
      let body = {...search}
      /** USAR EN CASO SE HAGA LA PAGINACION EN BACKEND*/
      body.length = this.length
      body.start = this.paginate

      let url = 'search-user'

      try {
        const result = await axios.post(url,body);
        if (result.status === 200) {
          const resultData = result.data;
          if (resultData.success) {
            Alerts.showToastMessage(resultData.message, 'center');
            list = resultData.data;

            /** USAR EN CASO SE HAGA LA PAGINACION EN BACKEND*/
              this.$refs['table'].filterList(list,resultData["count"])
          }else{
            Alerts.showToastErrorMessage(resultData.message,'center')
          }
          this.is_search = false;
        }
      } catch (e) {
        Alerts.showErrorMessage();
        this.is_search = false;
      }
      this.list = list;

    },
    deleteItem(item){
      this.list = this.list.filter((myitem) => myitem !== item)
    }
  },
  mounted() {
    this.getSearch({});
  }
}
</script>