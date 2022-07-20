<template>
    <div class="card">
        <div class="card-header">
            <h3 class="mb-0">Generar pedido</h3>
        </div>
        <div class="card-body">
            <!--<validation-observer ref="validation-observer" v-slot="{ handleSubmit }">-->
                <!--<form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">-->
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <h3 class="mb-0">Productos añadidos</h3>
                            <div>
                                <span>Pecio Total: <span class="badge badge-danger">S./{{ total_price }}</span></span>
                                <span>Cantidad Total: <span class="badge badge-danger">{{ total_quantity
                                }}</span></span>
                            </div>
                        </div>
                        <div class="card-body">
                            <TableListProducts ref="table" :listAll="products" :is_search="is_adding"
                                @deleteItem="deleteItem"></TableListProducts>
                        </div>
                    </div>
                    <hr>
                    <Button classname="btn btn-success" type="button" icon="" :disabled="is_send_data"
                        :title="'Aprobar'" @click.prevent="sendEditData(1)"></Button>
                    <Button classname="btn btn-danger" type="button" icon="" :disabled="is_send_data" :title="'Denegar'"
                        @click.prevent="sendEditData(2)"></Button>
                <!--</form>-->
            <!--</validation-observer>-->
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
                products: ''
            },
            text_button: 'Generar pedido',
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
            this.$refs["list-products"].getProduct(item)
        },
        addItem(item) {
            let is_added = false;
            for (const product of this.products) {
                if (product.id === item.id) {
                    product.quantity += parseFloat(item.quantity)
                    product.purchase_price += (parseFloat(item.quantity) * parseFloat(product.purchase_price))
                    is_added = true;
                }
            }
            if (!is_added) {
                this.products.push(item)
            }
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
            return true;
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
            //this.$refs['validation-observer'].reset();
        },
        async sendEditData(status) {
            if (status) {
                this.form.status_solicitude = status;
            }
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
                this.form.id = this.item.id
                this.products = this.item.products
                this.text_button = 'Actualizar'
            } else {
                if (this.$route.name === 'updateproforma' && this.item === undefined) {
                    this.$router.push({ name: 'listproforma' }) //newproforma
                }
            }
        }
    },
    computed: {
        total_price() {
            let total = 0;
            for (const product of this.products) {
                total += parseFloat(product.purchase_price)
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