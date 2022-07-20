<template>
    <div class="main-content">
      <div class="header bg-default pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center py-4">
              <div class="col-lg-6 col-7">
                <Breadcrumbs titulo="Generar Pedido" :breadcrumbs="breadcrumbsList"></Breadcrumbs>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <router-link :to="{name:'listsolicitude'}" class="btn btn-sm btn-neutral">Listar</router-link>
                <router-link :to="{name:'newsolicitude'}" class="btn btn-sm btn-dark">Generar Pedido</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mt--6">
        <div class="row">
          <div class="col">
            <router-view ref="router-view" @selectItem="selectItem"></router-view>
          </div>
        </div>
      </div>
      <ModalAddProduct ref="modalAddProduct" @addProduct="addProduct"></ModalAddProduct>
    </div>
</template>
<script>
export default {
  data() {
    return {
      breadcrumbsList: [
        {
          name: 'Generar Pedido',
          router: 'listsolicitude'
        }
      ]
    }
  },
  components: {
    Breadcrumbs: () => import('../../../components/Breadcrumb.vue'),
    FooterPage: () => import('../../../components/FooterPage.vue'),
    ModalAddProduct: () => import('../components/ModalAddProduct.vue'),
  },
  methods: {
    selectItem(item) {
      this.$refs["modalAddProduct"].showModal(item);
    },
    addProduct(data) {
      this.$refs["router-view"].addItem(data);
      this.$refs["modalAddProduct"].hideModal();
    },
  },
  mounted() {
    console.log(window)
  }
}
</script>
<style scoped>

</style>