<template>
  <div class="row" v-if="listAll.length>=10">
    <div class="col-sm-12 col-md-5">
      <div class="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">
        Mostrando {{ actualPage.count_pagination }} a {{ list.length }} de {{ listAll.length }} resultados
      </div>
    </div>
    <div class="col-sm-12 col-md-7">
      <div class="dataTables_paginate paging_simple_numbers" id="datatable-basic_paginate">
        <ul class="pagination justify-content-end">
          <li class="paginate_button page-item previous" id="datatable-basic_previous">
            <a href="#" aria-controls="datatable-basic" data-dt-idx="0" tabindex="0" class="page-link" @click.prevent="changePaginate(-1)">
              <i class="fas fa-angle-left"></i>
            </a>
          </li>
          <li :class="'paginate_button page-item '+item.class" v-for="(item,index) in cantPages" :key="`pagination_${index}`">
            <a v-if="cantPages.length > 10 && (actualPage.index === index || actualPage.index === index + 1 || actualPage.index === index - 1 || index === cantPages.length - 1 || index === 0 || ((actualPage.index  <= 4 || actualPage.index >= cantPages.length - 4) && (index === cantPages.length - 2 || index === 1))) " href="#" aria-controls="datatable-basic" data-dt-idx="1" tabindex="0" class="page-link" @click.prevent="sendPaginate(item)">{{ item.pagination }}</a>
            <a v-else-if="cantPages.length > 10 && (actualPage.index + 2 === index || actualPage.index - 2 === index)" href="#" aria-controls="datatable-basic" data-dt-idx="1" tabindex="0" class="page-link" @click.prevent="() => {return null}">...</a>
            <a v-else-if="cantPages.length <= 10" href="#" aria-controls="datatable-basic" data-dt-idx="1" tabindex="0" class="page-link" @click.prevent="sendPaginate(item)">{{ item.pagination }}</a>
          </li>
          <li class="paginate_button page-item next" id="datatable-basic_next">
            <a href="#" aria-controls="datatable-basic" data-dt-idx="2" tabindex="0" class="page-link" @click.prevent="changePaginate(+1)">
              <i class="fas fa-angle-right"></i>
            </a>
          </li><!---->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      listFiltered: [],
      cantPages: [],
      count: 0,
      actualPage: {index: 0, pagination: 1, class: 'active', count_pagination: 1}
    };
  },
  props: {
    listAll: {
      type: Array
    },
    is_search: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    filterList(list, cant) {
      this.cantPages = [];
      this.listFiltered = [];

      this.count = cant
      if (this.count >= 10) {
        let cantPages = Math.ceil(this.count / 10);

        console.log(cantPages)

        let cant_in_page = 1
        for (let i = 0; i < cantPages; i++) {
          this.cantPages.push({index: i, pagination: i + 1, class: '', count_pagination: cant_in_page});
          if (list.length >= 10) {
            this.listFiltered.push(list.slice(i * 10, 10 * (i + 1)))
          }
          cant_in_page += (10)
        }

        this.list = this.listFiltered[0] ? this.listFiltered[0] : this.listAll

      } else {
        this.list = this.listAll;
        this.listFiltered[0] = this.listAll;
      }
      this.cantPages[0] = {index: 0, pagination: 1, class: 'active', count_pagination: 1};

      this.actualPage = this.cantPages[0]

      // this.$emit('paginate',{
      //   "actualPage":this.actualPage,
      //   "cantPages":this.cantPages,
      //   "list":this.list,
      //   "listFiltered":this.listFiltered,
      // })
    },
    sendPaginate(item) {
      for (let itemCant of this.cantPages) {
        itemCant.class = ""
      }

      item.class = 'active'
      // if(this.listFiltered[item.index]){
      //   this.list = this.listFiltered[item.index]
      //   this.count = this.list.length
      // }

      this.actualPage = item

      this.$emit('paginate', {
        "actualPage": this.actualPage,
        "cantPages": this.cantPages,
        "list": this.list,
        "listFiltered": this.listFiltered,
      })
    },
    changePaginate(value) {
      let index = (this.actualPage.index) + value;
      if (this.cantPages[index]) {
        this.sendPaginate(this.cantPages[index])
      }
    },
  },
  computed: {
    countActualPage: function () {
      return (this.actualPage.count_pagination + (this.listAll.length-1))
    }
  },
  mounted() {

  }
};
</script>

<style scoped>
</style>
