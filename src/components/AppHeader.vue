<script>
export default {
	name: "AppHeader",
	data() {
		return {};
	},
};
</script>

<template>
	<div class="row mx-0">
		<nav class="nav justify-content-center bg-warning fw-bold fs-5 py-3">
			<routerLink to="/" class="nav-link active text-dark">HOME</routerLink>
			<routerLink to="/about" class="nav-link text-dark">ABOUT</routerLink>
			<routerLink to="/projects" class="nav-link text-dark">PROJECTS</routerLink>
			<routerLink to="/contacts" class="nav-link text-dark">CONTACTS</routerLink>
		</nav>

		<div class="col text-center">
			<h1 class="text-center fw-bold display-3 my-4 text-warning">Vite-Boolfolio</h1>
		</div>
	</div>
</template>

<style></style>
