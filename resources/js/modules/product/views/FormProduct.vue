<template>
  <div class="card">
    <div class="card-header">
      <h3 class="mb-0">Registro del nuevo producto</h3>
    </div>
    <div class="card-body">
      <validation-observer ref="validation-observer" v-slot="{ handleSubmit }">
        <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">
          <div class="form-row">
            <div class="col-md-4 mb-2">
              <validation-provider name="Nombre" rules="required|min:4" v-slot="{ errors }">
                <label class="form-control-label" for="input-name">Nombre</label>
                <input type="text" v-model="form.name" class="form-control" id="input-name" placeholder="Producto">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-4 mb-2">
              <validation-provider name="Unidad" rules="required" v-slot="{ errors }">
                <label class="form-control-label" for="input-unit">Unidad</label>
                <multiselect v-model="form.unit" :options="type_units" placeholder="Unidad" select-label=""
                              deselect-label="">
                  <template slot="singleLabel" slot-scope="{ option }"><span class="badge badge-pill badge-success">{{
                      option
                    }}</span></template>
                </multiselect>
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-4 mb-2" v-if="status==='EDIT'">
              <validation-provider name="Cantidad" rules="required|numeric" v-slot="{ errors }">
                <label class="form-control-label" for="input-quantity">Cantidad</label>
                <input type="number" v-model="form.quantity" class="form-control" id="input-quantity" placeholder="0.00">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-4 mb-2" v-if="status==='EDIT'">
              <validation-provider name="Precio" rules="required|min_value:0" v-slot="{ errors }">
                <label class="form-control-label" for="input-price">Precio de Venta</label>
                <input type="number" step=".01" v-model="form.price" class="form-control" id="input-price" placeholder="0.00">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-4 mb-2" v-if="status==='EDIT'">
              <validation-provider name="Precio de Compra" rules="required|min_value:0" v-slot="{ errors }">
                <label class="form-control-label" for="input-purchase_price">Precio de Compra</label>
                <input type="number" step=".01" v-model="form.purchase_price" class="form-control" id="input-purchase_price" placeholder="0.00">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-4 mb-2">
              <div class="form-group">
                <validation-provider name="Provedor" rules="required" v-slot="{ errors }">
                  <label class="form-control-label">Provedor</label>
                  <multiselect v-model="provider" :options="providers" placeholder="TODOS" track-by="name" select-label=""
                    label="name" @select="selectProvider" deselect-label="">
                    <template slot="singleLabel" slot-scope="{ option }"><span class="badge badge-pill badge-success">{{
                        option.name
                    }}</span></template>
                  </multiselect>
                  <span class="is-invalid">{{ errors[0] }}</span>
                </validation-provider>
              </div>
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
import { Multiselect } from 'vue-multiselect';

export default {

  components: {
    multiselect: Multiselect,
    Button: () => import('../../../components/Button.vue'),
  },
  data() {
    return {
      form: {
        name: '',
        unit: '',
        quantity: '',
        price: '',
        purchase_price: '',
        provider_id: '',
      },
      text_button: 'Crear',
      is_send_data: false,
      providers: [],
      provider: '',
      type_units: [
          "Gramos",
          "Litros",
          "Unidad"
      ],
      type_unit: ''
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
    selectProvider(option) {
      this.form.provider_id = option.id;
    },
    checkForm() {
      if (this.status === Constants.STATUS_EDIT) {
        this.sendEditData();
      } else {
        this.sendCreateData();
      }
    },
    resetForm() {
      this.form = {
        name: '',
        unit: '',
        quantity: '',
        price: '',
        purchase_price: '',
        provider_id: '',
      };
      this.provider = '';
      
      this.$refs['validation-observer'].reset();
    },
    async sendEditData() {
      this.is_send_data = true
      try {
        const body = { ...this.form }

        const result = await axios.put(`/product/${this.item.id}`, { ...body }).then(async (result) => {
          if (result.status === 200) {
            if (!result.data.success) {
              await Alerts.showToastErrorMessage(result.data.message);
              return;
            }
            await Alerts.showUpdatedMessage()
            this.resetForm()

            this.$router.push({ name: 'listproduct' })
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

        const result = await axios.post('product', { ...body });
        if (result.status === 200) {
          if (!result.data.success) {
            await Alerts.showToastErrorMessage(result.data.message);
            return;
          }
          await Alerts.showCreatedMessage()
          this.resetForm()
          this.$router.push({ name: 'listproduct' })
        }
      } catch (e) {
        Alerts.showErrorMessage()
      }
      this.is_send_data = false
    },
    validateStatus() {
      if (this.status === 'EDIT') {
        this.form.name = this.item.name;
        this.form.unit = this.item.unit;
        this.form.quantity = this.item.quantity;
        this.form.price = this.item.price;
        this.form.purchase_price = this.item.purchase_price;
        this.form.provider_id = this.item.provider.id;
        this.provider = this.item.provider;
        this.text_button = 'Actualizar'
      } else {
        if (this.$route.name === 'updateproduct' && this.item === undefined) {
          this.$router.push({ name: 'newproduct' })
        }
      }
    }
  },
  async mounted() {
    await this.validateStatus()
    await (this.providers = this.$providers)
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