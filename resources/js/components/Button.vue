<template>
    <button :class="classname" :type="type" @click="onClick" :disabled="disabled">
        <div v-if="disabled" class="spinner-border spinner-border-sm" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <i v-else :class="icon">{{ title }}</i>
    </button>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props: {
        classname: {
            type: String,
            default: 'btn btn-primary'
        },
        type: {
            type: String,
            default: 'button'
        },
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: 'fa fa-search'
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    },
    mounted() {

    }
}
</script>
<style scoped>
</style>