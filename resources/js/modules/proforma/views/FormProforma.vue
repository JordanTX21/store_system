<template>
  <div class="card">
    <div class="card-header">
      <h3 class="mb-0">Emitir proforma</h3>
    </div>
    <div class="card-body">
      <validation-observer ref="validation-observer" v-slot="{ handleSubmit }">
        <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">
          <ListProducts ref="list-products" :products="products" @selectItem="selectItem" :add="true"></ListProducts>
          <div class="card">
            <div class="card-header d-flex justify-content-between">
              <h3 class="mb-0">Productos añadidos</h3>
              <div>
                <span>Pecio Total: <span class="badge badge-danger">S/.{{ total_price }}</span></span>
                <span>Cantidad Total: <span class="badge badge-danger">{{ total_quantity }}</span></span>
              </div>
            </div>
            <div class="card-body">
              <TableListProducts ref="table" :listAll="products" :is_search="is_adding" @deleteItem="deleteItem"
                :can_delete="true"></TableListProducts>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-4">
              <div class="form-group mb-3">
                <validation-provider name="Documento del Cliente" rules="required|numeric|min:8" v-slot="{ errors }">
                  <label class="form-control-label" for="input-client">Documento del Cliente</label>
                  <input type="text" v-model="form.client_document" class="form-control" id="input-client"
                    placeholder="">
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

export default {

  components: {
    Button: () => import('../../../components/Button.vue'),
    ListProducts: () => import('../components/ListProducts/views/ListProduct.vue'),
    TableListProducts: () => import('../components/ListProducts/components/TableProduct.vue'),
  },
  data() {
    return {
      form: {
        products: '',
        client_document: '',
      },
      text_button: 'Generar proforma',
      is_send_data: false,
      is_adding: false,
      products: []
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
    deleteItem(item) {
      this.products = this.products.filter(product => product.id !== item.id)
      this.$refs["list-products"].deleteProductsToList(item)
    },
    addItem(item) {
      let is_added = false;
      for (const product of this.products) {
        if (product.id === item.id) {
          product.quantity = parseFloat(product.quantity) + parseFloat(item.quantity)
          product.price = parseFloat(product.price) + parseFloat(item.price)
          is_added = true;
        }
      }
      if (!is_added) {
        this.products.push(item)
      }
      this.$refs["list-products"].addProductsToList(item)
      this.is_adding = false;
    },
    async selectItem(item) {
      this.is_adding = true;
      this.$emit('selectItem', item)
    },
    checkForm() {
      if (this.products.length === 0) {
        Alerts.showToastErrorMessage("Debe seleccionar al menos un producto");
        return false;
      }
      this.form.products = this.products;
      if (this.status === Constants.STATUS_EDIT) {
        this.sendEditData();
      } else {
        this.sendCreateData();
      }
    },
    resetForm() {
      this.form.products = []
      this.products = []
      this.form.client_document = ''
      this.$refs['validation-observer'].reset();
      this.$refs['list-products'].getSearch();
    },
    async sendEditData() {
      this.is_send_data = true
      try {
        const body = { ...this.form }

        const result = await axios.put(`/proforma/${body.id}`, { ...body }).then(async (result) => {
          if (result.status === 200) {
            if (!result.data.success) {
              await Alerts.showToastErrorMessage(result.data.message);
              return;
            }
            await Alerts.showUpdatedMessage()
            this.resetForm()

            this.$router.push({ name: 'listproforma' })
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

        const result = await axios.post('proforma', { ...body });
        if (result.status === 200) {
          if (!result.data.success) {
            await Alerts.showToastErrorMessage(result.data.message);
            return;
          }
          await Alerts.showCreatedMessage()
          this.resetForm()

          this.$router.push({ name: 'listproforma' })
        }
      } catch (e) {
        await Alerts.showErrorMessage()
      }
      this.is_send_data = false
    },
    validateStatus() {
      if (this.status === 'EDIT') {
        this.form = { ...this.item }
        this.text_button = 'Actualizar'
      } else {
        if (this.$route.name === 'updateproforma' && this.item === undefined) {
          this.$router.push({ name: 'newproforma' })
        }
      }
    }
  },
  computed: {
    total_price() {
      let total = 0;
      for (const product of this.products) {
        total += parseFloat(product.price)
      }
      return total.toFixed(2);
    },
    total_quantity() {
      let total = 0;
      for (const product of this.products) {
        total += parseFloat(product.quantity)
      }
      return total;
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