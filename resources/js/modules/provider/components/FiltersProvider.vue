<template>
  <div class="row">
    <div class="col-sm-12">
      <validation-observer v-slot="{ handleSubmit }">
      <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">
        <div class="form-row">
          <div class="col-md-3 mb-2">
            <div class="form-group">
              <validation-provider name="Nombre" rules="required|min:4" v-slot="{ errors }">
                <label class="form-control-label" for="input-name">Nombre</label>
                <input type="text" v-model="search.name" class="form-control" id="input-name" placeholder="Provedor">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
          </div>
          <div class="col-md-3 mb-2">
            <div class="form-group">
              <label class="form-control-label d-block text-white" >Buscar</label>
              <Button classname="btn btn-default" type="submit" :disabled="is_search"></Button>
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
        name: '',
        date_start: Vue.moment().format('YYYY-MM-DD'),
        date_end: Vue.moment().format('YYYY-MM-DD'),
      },
      options_select:[
          'TODOS'
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
    checkForm(){
      if(this.is_search.name.length < 4){
            Alerts.showToastErrorMessage("Debe completar el campo", 'center')
      }
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