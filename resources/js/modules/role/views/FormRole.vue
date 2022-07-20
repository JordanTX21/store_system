<template>
  <div class="card">
    <div class="card-header">
      <h3 class="mb-0">Registro del nuevo rol</h3>
    </div>
    <div class="card-body">
      <validation-observer ref="validation-observer" v-slot="{ handleSubmit }">
        <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">
          <div class="form-row">
            <div class="col-md-4 mb-2">
              <validation-provider name="Nombre" rules="required" v-slot="{ errors }">
                <label class="form-control-label" for="input-name">Nombre</label>
                <input type="text" v-model="form.name" class="form-control" id="input-name"
                  placeholder="Nombre del Rol">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-12 mb-2">
              <div class="table-responsive table-upgrade">
                <table class="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th class="text-center">Vista</th>
                      <th class="text-center">Leer</th>
                      <th class="text-center">Crear</th>
                      <th class="text-center">Actualizar</th>
                      <th class="text-center">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in form.permissions" :key="`module-${index}`">
                      <td>{{ item.name }}</td>
                      <td class="text-center">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" :id="`customCheckView${item.module}`"
                            v-model="item.view">
                          <label class="custom-control-label" :for="`customCheckView${item.module}`"></label>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" :id="`customCheckRead${item.module}`"
                            v-model="item.read">
                          <label class="custom-control-label" :for="`customCheckRead${item.module}`"></label>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" :id="`customCheckCreate${item.module}`"
                            v-model="item.create">
                          <label class="custom-control-label" :for="`customCheckCreate${item.module}`"></label>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" :id="`customCheckUpdate${item.module}`"
                            v-model="item.update">
                          <label class="custom-control-label" :for="`customCheckUpdate${item.module}`"></label>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" :id="`customCheckDelete${item.module}`"
                            v-model="item.delete">
                          <label class="custom-control-label" :for="`customCheckDelete${item.module}`"></label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import menuList from '../../../components/MenuApp/data'

export default {

  components: {
    Button: () => import('../../../components/Button.vue'),
  },
  data() {
    return {
      form: {
        name: '',
        permissions: [],
      },
      text_button: 'Crear',
      is_send_data: false,
      menuList: menuList,
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
    fillCheckModules() {
      this.modules = []
      this.menuList.forEach(menu => {
        menu.options.forEach(module => {
          this.form.permissions.push({
            name: module.name,
            module: module.module,
            view: false,
            read: false,
            create: false,
            update: false,
            delete: false,
          })
        })
      })
    },
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

        const result = await axios.put(`/role/${body.id}`, { ...body }).then(async (result) => {
          if (result.status === 200) {
            if (!result.data.success) {
              await Alerts.showToastErrorMessage(result.data.message);
              return;
            }
            await Alerts.showUpdatedMessage()
            this.resetForm()

            this.$router.push({ name: 'listrole' })
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

        const result = await axios.post('/role', { ...body });
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
      if (this.status === Constants.STATUS_EDIT) {
        this.form.id = this.item.id
        this.form.name = this.item.name
        for (const permission of this.item.permissions) {
          for (const mypermission of this.form.permissions) {
            const permission_module = permission.name.split('_')[0]
            const name = permission.name.split('_')[1]
            if (mypermission.module === name) {
              mypermission[permission_module] = true
            }
          }
        }
        this.text_button = 'Actualizar'
      } else {
        if (this.$route.name === 'updaterole' && this.item === undefined) {
          this.$router.push({ name: 'newrole' })
        }
      }
    }
  },
  mounted() {
    this.fillCheckModules()
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