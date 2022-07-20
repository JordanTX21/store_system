<template>
    <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
        <div class="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-body p-0">
                    <div class="card bg-secondary border-0 mb-0">
                        <div class="card-header bg-transparent modal-header">
                            <h6 class="modal-title" id="modal-title-default">Añadir producto</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="card-body px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Ingrese la cantidad del producto a solicitar</small>
                            </div>
                            <validation-observer ref="validation-observer" v-slot="{ handleSubmit }">
                                <form class="needs-validation" @submit.prevent="handleSubmit(checkForm)">
                                    <div class="form-group mb-3">
                                        <!--|max_value:${item.quantity}-->
                                        <validation-provider name="Cantidad" :rules="`required|numeric|min_value:1`"
                                            v-slot="{ errors }">
                                            <label class="form-control-label" for="input-quantity">Cantidad</label>
                                            <input type="number" v-model="form.quantity" class="form-control"
                                                id="input-quantity" placeholder="0.00">
                                            <span class="is-invalid">{{ errors[0] }}</span>
                                        </validation-provider>
                                    </div>
                                    <div class="form-group mb-3">
                                        <validation-provider name="Precio" :rules="`required|min_value:0`"
                                            v-slot="{ errors }">
                                            <label class="form-control-label" for="input-price">Precio</label>
                                            <input type="number" step=".01" v-model="form.purchase_price" class="form-control"
                                                id="input-price" placeholder="0.00" readonly>
                                            <span class="is-invalid">{{ errors[0] }}</span>
                                        </validation-provider>
                                    </div>
                                    <hr>
                                    <Button classname="btn btn-primary" type="submit" icon="" :disabled="is_send_data"
                                        :title="'Agregar'"></Button>
                                </form>
                            </validation-observer>
                        </div>
                    </div>
                </div>
            </div>
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
                id: '',
                quantity: '',
                purchase_price: '',
            },
            is_send_data: false,
            item: {},
        }
    },
    methods: {
        checkForm() {
            /*if(item.quantity < form.quantity) {
                Alerts.showToastErrorMessage('La cantidad solicitada es mayor a la existente');
                return false;
            }*/

            this.is_send_data = true;
            this.$emit('addProduct', {...this.form})
        },
        changeQuantity() {
            this.form.purchase_price = this.item.purchase_price * this.form.quantity
        },
        showModal(item) {
            this.item = {...item};
            this.$refs['validation-observer'].reset();
            this.form = {...item}
            this.form.product = this.item
            this.form.quantity = 1
            //this.form.price = this.item.price
            $('#modal-form').modal('show')
        },
        hideModal() {
            this.is_send_data = false
            $('#modal-form').modal('hide')
        },
    },
    watch: {
        'form.quantity': function(val) {
            this.changeQuantity()
        },
    }
}
</script>
<style scoped>
</style>