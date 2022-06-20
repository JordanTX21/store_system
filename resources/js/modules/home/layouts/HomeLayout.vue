<template>
  <div class="main-content">
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-12">
              <Breadcrumbs titulo="Home" :breadcrumbs="breadcrumbsList"></Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="mb-0">Inicio</h3>
            </div>

            <div class="card-body">

              Bienvenido al sistema <span class="h4 text-muted">Letona Store</span> <span class="h4 text-default">{{ userLogued.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadcrumbsList: [
        {
          name: 'Inicio',
          router: 'homelayout'
        }
      ],
      userLogued: this.$attrs.userLogued,
    }
  },
  components: {
    Breadcrumbs: () => import('../../../components/Breadcrumb.vue'),
  }
}
</script>
<style scoped>
</style>