<template>
  <div class="wrapper">
    <AppMenu :userLogued="userLogued" :appName="appName"></AppMenu>
    <div id="content">
      <NavApp :userLogued="userLogued" :appName="appName"></NavApp>
      <router-view :userLogued="userLogued" :appName="appName"></router-view>
    </div>
    <!-- Dark Overlay element -->
    <div class="overlay"></div>
  </div>
</template>

<script>
import NavApp from '../components/NavApp/layout/NavLayout'
import AppMenu from '../components/MenuApp/layout/MenuLayout'
import FooterPage from '../components/FooterPage'

export default {
  components: {
    NavApp,
    AppMenu,
    FooterPage
  },
  data() {
    return {
      userLogued: this.$attrs.userlogued,
      roles: this.$attrs.roles,
      appName: this.$attrs.appname,
    }
  },
  mounted() {
    Vue.prototype.$appName = this.$attrs.appname;
    Vue.prototype.$userlogued = this.$attrs.userlogued;
    Vue.prototype.$roles = this.$attrs.roles;
   }
}
</script>
<style scoped>
.overlay {
  top: 0;
  display: none;
  position: fixed;
  /* full screen */
  width: 100vw;
  height: 100vh;
  /* transparent black */
  background: rgba(0, 0, 0, 0.7);
  /* middle layer, i.e. appears below the sidebar */
  z-index: 998;
  opacity: 0;
  /* animate the transition */
  transition: all 0.5s ease-in-out;
}

/* display .overlay when it has the .active class */
.overlay.active {
  display: block;
  opacity: 1;
}
</style>