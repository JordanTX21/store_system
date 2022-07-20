<template>
  <div class="card">
    <div class="card-header">
      <h3 class="mb-0">Registro del nuevo module</h3>
    </div>
    <div class="card-body">
      <validation-observer ref="validation-observer" v-slot="{ handleSubmit }">
        <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">
          <div class="form-row">
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
          <hr>
          <Button classname="btn btn-primary" type="submit" icon="" :disabled="is_send_data"
            :title="text_button"></Button>
        </form>
      </validation-observer>
    </div>

  </div>
</template>
<script>

export default {

  components: {
    Button: () => import('../../../components/Button.vue'),
  },
  data() {
    return {
      form: {
        value1: '',
        value2: '',
      },
      text_button: 'Crear',
      is_send_data: false,
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
    checkForm() {
      if (this.status === Constants.STATUS_EDIT) {
        this.sendEditData();
      } else {
        this.sendCreateData();
      }
    },
    resetForm() {
      for (const [index, item] of Object.entries(this.form)) {
        item = "";
      }
      this.$refs['validation-observer'].reset();
    },
    async sendEditData() {
      this.is_send_data = true
      try {
        const body = { ...this.form }

        const result = await axios.put(`/url-module/${body.id}`, { ...body }).then(async (result) => {
          if (result.status === 200) {
            if (!result.data.success) {
              await Alerts.showToastErrorMessage(result.data.message);
              return;
            }
            await Alerts.showUpdatedMessage()
            this.resetForm()

            this.$router.push({ name: 'listmodule' })
          }
        }).catch((err) => {
          if (err.response.data.code == "Error") {
            Alerts.showErrorMessageWithMessage(err.response.data.message);
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
        const body = { ...this.form }

        const result = await axios.post('url-module', { ...body });
        if (result.status === 200) {
          if (!result.data.success) {
            await Alerts.showToastErrorMessage(result.data.message);
            return;
          }
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
        this.form = { ...this.item }
        this.text_button = 'Actualizar'
      } else {
        if (this.$route.name === 'updatemodule' && this.item === undefined) {
          this.$router.push({ name: 'newmodule' })
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
      if (status === Constants.STATUS_CREATE && this.text_button === "Actualizar") {
        location.reload()
      }
    },
  }
}
</script>