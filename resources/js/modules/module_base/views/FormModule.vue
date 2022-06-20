<template>
  <div class="card">
    <div class="card-header">
      <h3 class="mb-0">Registro del nuevo module</h3>
    </div>
    <div class="card-body">
      <input type="file" @change="getImage" class="form-control text-uppercase">
      <app-file-displayer v-model="fileManager" @delete="deleteImage"></app-file-displayer>
      <hr>
      <validation-observer ref="validation-observer" v-slot="{ handleSubmit }">
        <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">
          <div class="form-row">
            <div class="col-md-12 mb-2">
                <label class="form-control-label" >Persona</label>
                <search-entity ref="search-entity" :validate="true" @entity="getEntity" @deleteEntity="deleteEntity"></search-entity>
            </div>
            <div class="col-md-4 mb-2">
              <validation-provider name="Nombre" rules="required" v-slot="{ errors }">
                <label class="form-control-label" for="input-1">Input 1</label>
                <input type="text" v-model="form.value1" class="form-control" id="input-1" placeholder="Input 1">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-4 mb-2">
              <validation-provider name="ABREVIATURA" rules="required" v-slot="{ errors }">
                <label class="form-control-label" for="input-2">Input 2</label>
                <input type="text" v-model="form.value2" class="form-control" id="input-2" placeholder="Input 2">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
          </div>
          <UbigeoSearch ref="ubigeo-search" @ubigeo="getUbigeo"></UbigeoSearch>
          <hr>
          <button class="btn btn-primary" type="submit" :disabled="is_send_data">{{ text_button }}</button>
        </form>
      </validation-observer>
    </div>

  </div>
</template>
<script>
import AppFileDisplayer from '../../../components/AppFileDisplayer';
import UbigeoSearch from '../../../components/UbigeoSearch.vue';
import SearchEntity from "../../../components/SearchEntity.vue"

export default {

  components: {
    'search-entity': SearchEntity,
    'app-file-displayer': AppFileDisplayer,
    UbigeoSearch
  },
  data() {
    return {
      form: {
        value1: '',
        value2: '',
      },
      text_button: 'Crear',
      is_send_data: false,
      archivo: undefined,
      fileManager: new FileManager(),
      person: {}
    }
  },
  props: {
    status: {
      type: String,
      default: 'CREATE'
    },
    item: {
      type: Object
    },
  },
  methods: {
    getEntity(entity){
      this.person = entity
      this.form.name = entity.name
      this.form.email = entity.email
      this.form.person_id = entity.id
    },
    deleteEntity(entity){
      this.person = {}
      this.form.name = ""
      this.form.email = ""
      this.form.person_id = ""
    },
    getUbigeo(ubigeo){
      console.log(ubigeo)
    },
    setUbigeo(ubigeo){
      this.$refs['ubigeo-search'].setUbigeo(ubigeo)
    },
    getImage(event) {
      this.archivo = event.target.files[0];
      this.fileManager = FileManager.fromFile((this.archivo));
    },
    deleteImage() {
      this.fileManager = new FileManager()
    },
    checkForm() {
      if (this.status === Constants.STATUS_EDIT) {
        this.sendEditData();
      } else {
        this.sendCreateData();
      }
    },
    resetForm(){
      this.form={
        value1: '',
        value2: '',
      }
      this.$refs['validation-observer'].reset();
    },
    async sendEditData() {
      this.is_send_data = true
      try {
        const body = {...this.form}

        const result = await axios.put(`/url-module/${body.id}`, {...body}).then( async (result)=>{
        if (result.status === 200) {
          Alerts.showUpdatedMessage()
          this.resetForm()

          this.$router.push({name: 'listmodule'})
        }}).catch( (err) => {
          if(err.response.data.code == "Error"){
            Alerts.showErrorMessageWithMessage(err.response.data.Message);
          }
          this.is_search = false;
        });
      } catch (e) {
        Alerts.showErrorMessage()
      }
      this.is_send_data = false
    },
    async sendCreateData() {
      this.is_send_data = true
      try {
        const body = {...this.form}

        const result = await axios.post('url-module', {...body});
        if (result.status === 200) {
          Alerts.showCreatedMessage()
          this.resetForm()
        }
      } catch (e) {
        Alerts.showErrorMessage()
      }
      this.is_send_data = false
    },
    validateStatus() {
      if (this.status === 'EDIT') {
        this.form = {...this.item}
        this.text_button = 'Actualizar'
        this.setUbigeo({
          department: 'AMAZONAS',
          province: 'CHACHAPOYAS',
          district: 'CHACHAPOYAS'
        })
      } else {
        if (this.$route.name === 'updatemodule' && this.item === undefined) {
          this.$router.push({name: 'newmodule'})
        }
      }
    }
  },
  mounted() {
    this.validateStatus()
    /** EJEMPLO*/
    //this.$refs["search-entity"].setCompanyByID(3)
  },
  watch: {
    status: function (status) {
      if (status === Constants.STATUS_CREATE && this.text_button === "Actualizar" ){
        location.reload()
      }
    },
  }
}
</script>