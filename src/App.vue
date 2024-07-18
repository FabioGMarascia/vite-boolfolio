<script>
import AppMain from "./components/AppMain.vue";

export default {
	name: "App",
	components: {
		AppMain,
	},
	data() {
		return {
			base_url: "http://",
		};
	},
	mounted() {},
};
</script>

<template>
	<h1 class="text-center fw-bold display-3 my-4 text-warning">Vite-Boolfolio</h1>

	<div class="container">
		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
			<AppMain />
		</div>
	</div>
</template>

<style></style>
