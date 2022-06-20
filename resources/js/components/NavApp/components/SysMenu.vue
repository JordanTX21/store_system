<template>
  <li class="nav-item dropdown">
    <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <div class="media align-items-center">
        <div class="media-body  ml-2">
          <span class="mb-0 text-sm  font-weight-bold">
            {{ userLogued.name }} <i class="fas fa-caret-down"></i></span>
        </div>
      </div>
    </a>
    <a class="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
    </a>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
      <div class="dropdown-header noti-title">
        <h6 class="text-overflow m-0">Bienvenido!</h6>
      </div>
      <a class="dropdown-item" href="#"> <i class="fas fa-user"></i> Perfil</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#" @click.prevent="logout"><i class="fas fa-times"></i> Cerrar sesión</a>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    userLogued: {
      type: Object,
    },
  },
  methods: {
    logout() {
      axios.post("logout").then(response => {
        this.$router.go('/login')
      }).catch(error => {
        window.location.href = '/login'
        console.log(error)
      })
    }
  }
}
</script>
