<template>
    <NavbarView/>

    <FooterView/>
</template>

<script>
  import NavbarView from '@/views/partials/NavbarView.vue'
  import FooterView from '@/views/partials/FooterView.vue'
  export default {
    name: "AboutView",
    components: {
      NavbarView,
      FooterView
    }
  }
</script>
