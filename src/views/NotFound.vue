<script>
export default {
	name: "NotFound",
};
</script>

<template>
	<div class="p-5 mb-4 bg-danger text-dark">
		<div class="container py-5 text-center fw-bold">
			<h1 class="display-5 fw-bold">OPS 404</h1>
			<p class="fs-3">Sorry we couldn't find what you are looking for</p>

			<router-link to="/" class="btn btn-dark text-danger fs-5">Back to Home</router-link>
		</div>
	</div>
</template>

<style></style>
