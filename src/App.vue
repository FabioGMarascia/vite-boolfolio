<script>
import AppHeader from "./components/AppHeader.vue";
import AppProjects from "./views/AppProjects.vue";

export default {
	name: "App",
	components: {
		AppHeader,
		AppProjects,
	},
	data() {
		return {};
	},
	mounted() {},
};
</script>

<template>
	<AppHeader />

	<AppProjects />

	<router-view />
</template>

<style></style>
