<template>
    <NavbarView/>
      <ComponentsAbout/>
    <FooterView/>
</template>

<script>
  import NavbarView from '@/views/partials/NavbarView.vue'
  import FooterView from '@/views/partials/FooterView.vue'
  import ComponentsAbout from '@/components/about/AboutComponents';
  export default {
    name: "AboutView",
    components: {
      NavbarView,
      FooterView,
      ComponentsAbout
    }
  }
</script>
