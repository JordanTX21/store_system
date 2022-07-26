<template>
  <div class="card">
    <div class="card-header">
      <h3 class="mb-0">Registro del nuevo provedor</h3>
    </div>
    <div class="card-body">
      <validation-observer ref="validation-observer" v-slot="{ handleSubmit }">
        <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">
          <div class="form-row">
            <div class="col-md-4 mb-2">
              <validation-provider name="Nombre" rules="required|min:4" v-slot="{ errors }">
                <label class="form-control-label" for="input-name">Nombre</label>
                <input type="text" v-model="form.name" class="form-control" id="input-name" placeholder="Provedor">
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
        name: '',
      },
      text_button: 'Agregar',
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
      this.form.name = "";
      this.$refs['validation-observer'].reset();
    },
    async sendEditData() {
      this.is_send_data = true
      try {
        const body = { ...this.form }

        const result = await axios.put(`/provider/${body.id}`, { ...body }).then(async (result) => {
          if (result.status === 200) {
            if (!result.data.success) {
              await Alerts.showToastErrorMessage(result.data.message);
              return;
            }
            await Alerts.showUpdatedMessage()
            this.resetForm()

            this.$router.push({ name: 'listprovider' })
          }
        }).catch((err) => {
          if (err.response.data.code == "Error") {
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
        const body = { ...this.form }

        const result = await axios.post('provider', { ...body });
        if (result.status === 200) {
          if (!result.data.success) {
            await Alerts.showToastErrorMessage(result.data.message);
            return;
          }
          Alerts.showCreatedMessage()
          this.resetForm()
          this.$router.push({ name: 'listprovider' });
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
        if (this.$route.name === 'updateprovider' && this.item === undefined) {
          this.$router.push({ name: 'newprovider' })
        }
      }
    }
  },
  mounted() {
    this.validateStatus()
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