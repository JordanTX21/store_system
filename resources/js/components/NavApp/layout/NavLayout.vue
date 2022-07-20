<template>
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-default">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item">
                        <a type="button" id="sidebarCollapse" class="nav-link" href="#">
                            <i class="fas fa-align-left"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'homelayout' }" class="navbar-brand d-inline-block text-left">
                            {{ appName }}
                        </router-link>
                    </li>
                </ul>

                <ul class="navbar-nav align-items-center  ml-auto">
                    <SysMenu :userLogued="userLogued" />
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import menuList from '../data'
import SysMenu from '../components/SysMenu'

export default {
    components: {
        SysMenu,
    },
    data() {
        return {
            menu: menuList,
        }
    },
    props: {
        userLogued: {
            type: Object,
        },
        appName: {
            type: String,
            default: '',
        },
    },
    mounted() {
    }
}
</script>