<template>
    <!-- Sidebar -->
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white active"
        id="sidenav-main">
        <div class="scroll-wrapper scrollbar-inner" style="position: relative;">
            <div class="scrollbar-inner scroll-content"
                style="height: 913px; margin-bottom: 0px; margin-right: 0px; max-height: none;">

                <div class="sidenav-header  align-items-center">
                    <a class="navbar-brand d-inline-block" href="#">
                        {{ appName }}
                    </a>
                    <button type="button" class="close p-2" id="dismiss" @click.prevent="dismissMenu">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="navbar-inner">

                    <div class="collapse navbar-collapse" id="sidenav-collapse-main">

                        <ul class="navbar-nav">
                            <ListItem v-for="(item, index) in menuList" @closePanel="dismissMenu" :title="item.titulo"
                                v-show="!item.disabled" :options="item.options" :key="index + 'items'" />
                        </ul>

                    </div>
                </div>
            </div>
            <div class="scroll-element scroll-x">
                <div class="scroll-element_outer">
                    <div class="scroll-element_size"></div>
                    <div class="scroll-element_track"></div>
                    <div class="scroll-bar" style="width: 0px;"></div>
                </div>
            </div>
            <div class="scroll-element scroll-y">
                <div class="scroll-element_outer">
                    <div class="scroll-element_size"></div>
                    <div class="scroll-element_track"></div>
                    <div class="scroll-bar" style="height: 0px;"></div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>

import menuList from '../data'
import ListItem from '../components/ListItem'

export default {
    components: {
        ListItem,
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
    data() {
        return {
            menuList,
        }
    },
    methods: {
        validateOptions() {
            let permissions = [];
            this.userLogued.roles.forEach(item => {
                item.permissions.forEach(permission => {
                    permissions.push(permission.name);
                });
            })
            this.menuList.forEach(item => {
                let disableds = 0;
                item.options.forEach(option => {
                    if (!permissions.includes(option.permission)) {
                        option.disabled = true;
                        disableds++;
                    }
                })
                if (disableds == item.options.length) {
                    item.disabled = true;
                }
            })
        },
        dismissMenu() {
            // hide sidebar
            $('#sidenav-main').addClass('active');
            // hide overlay
            $('.overlay').removeClass('active');
        },
    },
    mounted() {

        $('#sidebarCollapse').on('click', function () {
            $('#sidenav-main').toggleClass('active');
            $('.overlay').addClass('active');
        });
        $('#dismiss, .overlay').on('click', function () {
            // hide sidebar
            $('#sidenav-main').addClass('active');
            // hide overlay
            $('.overlay').removeClass('active');
        });
        this.validateOptions();
    },
}
</script>
<style scoped>
#sidenav-main {
    max-width: 250px;
}

#sidenav-main.active {
    margin-left: -250px;
}

@media (max-width: 1199.98px) {
    .sidenav {
        transform: translateX(0) !important;
    }
}

/*
#sidebar {
    min-width: 250px;
    max-width: 250px;
}


#sidebar {
    min-width: 250px;
    max-width: 250px;
    min-height: 100vh;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }

    #sidebar.active {
        margin-left: 0;
    }
}

#sidebar {
    transition: all 0.3s;
}*/
</style>