<template>
	<NavbarView/>

	<WorkComponents/>

	<FooterView/>
</template>

<script>
	import NavbarView from '@/views/partials/NavbarView.vue'
	import FooterView from '@/views/partials/FooterView.vue'
    import WorkComponents from '@/components/work/WorkComponents.vue'
	export default {
		name: "WorkView",
		components: {
			NavbarView,
			FooterView,
            WorkComponents
		}
	}
</script>