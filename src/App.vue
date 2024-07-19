<script>
import AppProjects from "./views/AppProjects.vue";

export default {
	name: "App",
	components: {
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

	<h1 class="text-center fw-bold display-3 my-4 text-warning">Vite-Boolfolio</h1>

	<AppProjects />

	<router-view />
</template>

<style></style>
