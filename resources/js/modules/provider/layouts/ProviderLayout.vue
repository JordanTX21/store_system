<template>
    <div class="main-content">
      <div class="header bg-default pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center py-4">
              <div class="col-lg-6 col-7">
                <Breadcrumbs titulo="Provedor" :breadcrumbs="breadcrumbsList"></Breadcrumbs>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <router-link :to="{name:'listprovider'}" class="btn btn-sm btn-neutral">Listar</router-link>
                <router-link :to="{name:'newprovider'}" class="btn btn-sm btn-dark">Crear Provedor</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mt--6">
        <div class="row">
          <div class="col">
            <router-view></router-view>
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
          name: 'Provedor',
          router: 'listprovider'
        }
      ]
    }
  },
  components: {
    Breadcrumbs: () => import('../../../components/Breadcrumb.vue'),
    FooterPage: () => import('../../../components/FooterPage.vue'),
  },
  mounted() {
    console.log(window)
  }
}
</script>
<style scoped>

</style>