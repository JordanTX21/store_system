<template>
  <div class="row">
    <div class="col-sm-12">
      <validation-observer v-slot="{ handleSubmit }">
      <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">
        <div class="form-row">
          <div class="col-md-3 mb-2">
            <div class="form-group">
              <label class="form-control-label" >Tipo de reporte</label>
              <multiselect
                  v-model="search.type_report"
                  :options="options_report"
                  placeholder="TIPO DE REPORTE"
                  deselect-label="Deseleccionar">
                <template slot="singleLabel" slot-scope="{ option }"><span class="badge badge-pill badge-success">{{ option }}</span></template>
              </multiselect>
            </div>
          </div>
          <div class="col-md-3 mb-2">
            <div class="form-group">
              <label class="form-control-label" >Fecha Inicio</label>
              <datepicker :value="search.date_start" @input="getDateStart"></datepicker>
            </div>
          </div>
          <div class="col-md-3 mb-2">
            <div class="form-group">
              <label class="form-control-label" >Fecha Fin</label>
              <datepicker :value="search.date_end" @input="getDateEnd"></datepicker>
            </div>
          </div>
          <div class="col-md-3 mb-2">
            <div class="form-group">
              <label class="form-control-label d-block text-white" >Buscar</label>
              <Button classname="btn btn-default" type="submit" :disabled="is_search"></Button>
            </div>
          </div>
          <div class="col-md-3 mb-2">
            <div class="form-group">
              <label class="form-control-label d-block text-white" >Exportar Excel</label>
              <Button classname="btn btn-success" @click.prevent="generateExcel()" icon="fas fa-file-excel" title="  Exportar Excel" type="button" :disabled="is_search"></Button>
            </div>
          </div>
        </div>
      </form>
      </validation-observer>
    </div>
  </div>
</template>
<script>
import Datepicker from '../../../components/AppDatepicker.vue';
import {Multiselect} from 'vue-multiselect';
export default {
  components: {
    Datepicker,
    multiselect: Multiselect,
    Button: () => import('../../../components/Button.vue'),
  },
  data(){
    return {
      search:{
        type_report: 'VENTAS',
        date_start: Vue.moment().format('YYYY-MM-DD'),
        date_end: Vue.moment().format('YYYY-MM-DD'),
      },
      options_report:[
          'VENTAS',
          'COMPRAS',
      ]
    }
  },
  props:{
    is_search: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    generateExcel(){
      let url = 'generate-report-excel'
      let body = { ...this.search }
      window.open(`/${url}/${body.type_report}/${body.date_start}/${body.date_end}`, '_blank');
    },
    checkForm(){
      this.$emit('search',this.search)
    },
    getDateStart(date){
      this.search.date_start = date;
    },
    getDateEnd(date){
      this.search.date_end = date;
    }
  }
}
</script>