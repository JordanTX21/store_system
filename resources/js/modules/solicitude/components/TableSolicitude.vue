<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-sm-12 table-responsive">
          <table class="table align-items-center table-flush dataTable no-footer" id="datatable-basic" role="grid"
                 aria-describedby="datatable-basic_info">
            <thead class="thead-light">
            <tr role="row">
              <th scope="col" class="sorting" tabindex="0" aria-controls="datatable-basic" rowspan="1" colspan="1"
                  aria-label="Email: activate to sort column ascending">Estado
              </th>
              <th scope="col" class="sorting" tabindex="0" aria-controls="datatable-basic" rowspan="1" colspan="1"
                  aria-label="Name: activate to sort column ascending">Solicitante
              </th>
              <th scope="col" class="sorting" tabindex="0" aria-controls="datatable-basic" rowspan="1" colspan="1"
                  aria-label="Name: activate to sort column ascending">Fecha
              </th>
              <th scope="col" class="sorting" tabindex="0" aria-controls="datatable-basic" rowspan="1" colspan="1"
                  aria-label=": activate to sort column ascending"></th>
            </tr>
            </thead>
            <tbody>
            <tr role="row" class="odd" v-for="(item,index) in listAll" :key="`row_${index}`">
              <td v-html="validateStatus(item.status_solicitude)"></td>
              <td>{{ item.request_user.name }}</td>
              <td>{{ item.created_at }}</td>
              <td class="text-right">
                <div class="dropdown" v-if="item.status_solicitude === 0">
                  <a class="btn btn-sm btn-icon-only btn-primary" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-bars"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#" @click.prevent="editItem(item)" >
                      <i class="fas fa-eye"></i> Visualizar
                    </a>
                    <a class="dropdown-item" href="#" @click.prevent="editItem(item)"  v-if="false">
                      <i class="fas fa-edit"></i> Editar
                    </a>
                    <a class="dropdown-item" href="#" @click.prevent="deleteItem(item)" v-if="false">
                      <i class="fas fa-trash-alt"></i> Eliminar
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <pagination ref="pagination" :listAll="listAll" :is_search="is_search" @paginate="setPagination"></pagination>
    </div>
  </div>
</template>
<script>
import Pagination from '../../../components/Pagination.vue'
export default {
  components: {
    'pagination': Pagination,
  },
  data(){
    return {
      listFiltered: [],
      cantPages: [],
      count: 0,
    }
  },
  props:{
    listAll: {
      type:Array
    },
    is_search: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    validateStatus(status) {
      let status_string = "";
      let classname = "";
      switch (status) {
        case 0:
          status_string = "Pendiente";
          classname = "badge-warning";
          break;
        case 1:
          status_string = "Aprobado";
          classname = "badge-success";
          break;
        case 2:
          status_string = "Rechazado";
          classname = "badge-danger";
          break;
        case 3:
          status_string = "Finalizado";
          classname = "badge-primary";
          break;
        default:
          status_string = "Pendiente";
          classname = "badge-warning";
          break;
      }
      return `<span class="badge ${classname}">${status_string}</span>` 
    },
    zfill(number, width) {
      const numberOutput = Math.abs(number); /* Valor absoluto del número */
      const length = number.toString().length; /* Largo del número */
      const zero = "0"; /* String de cero */

      if (width <= length) {
        if (number < 0) {
          return ("-" + numberOutput.toString());
        } else {
          return numberOutput.toString();
        }
      } else {
        if (number < 0) {
          return ("-" + (zero.repeat(width - length)) + numberOutput.toString());
        } else {
          return ((zero.repeat(width - length)) + numberOutput.toString());
        }
      }
    },
    filterList(listAll,count){
      this.$refs['pagination'].filterList(listAll,count)
    },
    setPagination(data) {
      this.$emit("paginate", data)
    },
    editItem(item){
      this.$router.push({name:'updatesolicitude',params:{ status: 'EDIT', item: item }})
    },
    async deleteItem(item){
      const result = await Alerts.showConfirmDeleteMessage();

      if(result.isConfirmed){
        try{
          const response = await axios.delete(`/solicitude/${item.id}`,{...item})
          if(response.status === 200){
            const resultData = response.data;
            if(resultData.code === 'Success'){
              Alerts.showDeletedMessage();
              this.$emit('deleteItem',item)
            }
          }
        }catch (e) {
          Alerts.showErrorMessage();
        }
      }
    },
  },
}
</script>

<style scoped>

.table td, .table th {
  white-space: normal !important;
}
@media (max-width: 1200px) {
  .table td, .table th {
    white-space: nowrap !important;
  }
}
</style>