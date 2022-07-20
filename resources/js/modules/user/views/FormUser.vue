<template>
  <div class="card">
    <div class="card-header">
      <h3 class="mb-0">Registro del nuevo usuario</h3>
    </div>
    <div class="card-body">
      <validation-observer ref="validation-observer" v-slot="{ handleSubmit }">
        <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)" autocomplete="nope">
          <div class="form-row">
            <div class="col-md-4 mb-2">
              <validation-provider name="Nombre" rules="required|min:4" v-slot="{ errors }">
                <label class="form-control-label" for="input-name">Nombre</label>
                <input type="text" v-model="form.name" class="form-control" id="input-name" placeholder="Usuario">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-4 mb-2">
              <validation-provider name="Correo" rules="required|email" v-slot="{ errors }">
                <label class="form-control-label" for="input-email">Correo</label>
                <input type="email" v-model="form.email" class="form-control" id="input-email"
                  placeholder="example@example.com">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-4 mb-2">
              <validation-provider name="Contraseña" :rules="(status !== 'EDIT') ? 'required' : ''" v-slot="{ errors }">
                <label class="form-control-label" for="input-password">Contraseña</label>
                <input type="password" v-model="form.password" class="form-control" id="input-password"
                  placeholder="*********">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-4 mb-2">
              <validation-provider name="Repetir Contraseña"
                :rules="(status !== 'EDIT') ? 'required|confirmed:Contraseña' : ''" v-slot="{ errors }">
                <label class="form-control-label" for="input-repeat_password">Repetir Contraseña</label>
                <input type="password" v-model="form.repeat_password" class="form-control" id="input-repeat_password"
                  placeholder="*********">
                <span class="is-invalid">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="col-md-3 mb-2">
              <div class="form-group">
                <validation-provider name="Rol" rules="required" v-slot="{ errors }">
                  <label class="form-control-label">Rol</label>
                  <multiselect v-model="role" :options="roles" placeholder="TODOS" track-by="name" select-label=""
                    label="name" @select="selectRole" deselect-label="">
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
        email: '',
        password: '',
        repeat_password: '',
        role: '',
      },
      roles: [],
      role: '',
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
    selectRole(role) {
      this.form.role = role.id;
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

        const result = await axios.put(`/user/${body.id}`, { ...body }).then(async (result) => {
          if (result.status === 200) {
            if (!result.data.success) {
              await Alerts.showToastErrorMessage(result.data.message);
              return;
            }

            await Alerts.showUpdatedMessage()
            this.resetForm()

            this.$router.push({ name: 'listuser' })
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

        const result = await axios.post('user', { ...body });
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
        this.form.id = this.item.id;
        this.form.name = this.item.name;
        this.form.email = this.item.email;
        this.form.role = this.item.roles[0].id;
        this.role = this.item.roles[0];
        this.text_button = 'Actualizar'
      } else {
        if (this.$route.name === 'updateuser' && this.item === undefined) {
          this.$router.push({ name: 'newuser' })
        }
      }
    }
  },
  async mounted() {
    await this.validateStatus();
    await (this.roles = this.$roles);
  },
  watch: {
    status: function (status) {
      if (status === Constants.STATUS_CREATE && this.text_button === "Actualizar") {
        location.reload()
      }
    }
  }
}
</script>