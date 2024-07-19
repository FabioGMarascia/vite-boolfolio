<script>
import ProjectList from "./views/ProjectList.vue";

export default {
	name: "App",
	components: {
		ProjectList,
	},
	data() {
		return {};
	},
	mounted() {},
};
</script>

<template>
	<h1 class="text-center fw-bold display-3 my-4 text-warning">Vite-Boolfolio</h1>

	<div class="container">
		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
			<ProjectList />
		</div>
	</div>
</template>

<style></style>
