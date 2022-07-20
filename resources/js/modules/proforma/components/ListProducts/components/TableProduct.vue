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
                  aria-label="Name: activate to sort column ascending">Producto
                </th>
                <th scope="col" class="sorting" tabindex="0" aria-controls="datatable-basic" rowspan="1" colspan="1"
                  aria-label="Name: activate to sort column ascending">Unidad
                </th>
                <th scope="col" class="sorting" tabindex="0" aria-controls="datatable-basic" rowspan="1" colspan="1"
                  aria-label="Email: activate to sort column ascending">Precio
                </th>
                <th scope="col" class="sorting" tabindex="0" aria-controls="datatable-basic" rowspan="1" colspan="1"
                  aria-label="Email: activate to sort column ascending">Cantidad
                </th>
                <th scope="col" class="sorting" tabindex="0" aria-controls="datatable-basic" rowspan="1" colspan="1"
                  aria-label="Email: activate to sort column ascending">Provedor
                </th>
                <th scope="col" class="sorting" tabindex="0" aria-controls="datatable-basic" rowspan="1" colspan="1"
                  aria-label=": activate to sort column ascending"></th>
              </tr>
            </thead>
            <tbody>
              <tr role="row" class="odd" v-for="(item, index) in listAll" :key="`row_${index}`">
                <td>{{ item.name }}</td>
                <td>{{ item.unit }}</td>
                <td>S/.{{ item.price.toFixed(2) }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.provider.name }}</td>
                <td class="text-right">
                  <div class="dropdown" v-if="add || can_delete">
                    <a class="btn btn-sm btn-icon-only btn-primary" href="#" role="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-bars"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow" style="">
                      <a class="dropdown-item" href="#" @click.prevent="addItem(item)" v-if="add">
                        <i class="fas fa-plus"></i> Añadir
                      </a>
                      <a class="dropdown-item" href="#" @click.prevent="deleteItem(item)" v-if="can_delete">
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
import Pagination from '../../../../../components/Pagination.vue'
export default {
  components: {
    'pagination': Pagination,
  },
  data() {
    return {
      listFiltered: [],
      cantPages: [],
      count: 0,
    }
  },
  props: {
    listAll: {
      type: Array
    },
    is_search: {
      type: Boolean,
      default: false,
    },
    add: {
      type: Boolean,
      default: false,
    },
    can_delete: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
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
    filterList(listAll, count) {
      this.$refs['pagination'].filterList(listAll, count)
    },
    setPagination(data) {
      this.$emit("paginate", data)
    },
    addItem(item) {
      this.$emit("selectItem", item)
    },
    editItem(item) {
      this.$router.push({ name: 'updateproduct', params: { status: 'EDIT', item: item } })
    },
    async deleteItem(item) {
      const result = await Alerts.showConfirmDeleteMessage();

      if (result.isConfirmed) {
        this.$emit('deleteItem', item)
      }
    },
  },
}
</script>

<style scoped>
.table td,
.table th {
  white-space: normal !important;
}

@media (max-width: 1200px) {

  .table td,
  .table th {
    white-space: nowrap !important;
  }
}
</style>