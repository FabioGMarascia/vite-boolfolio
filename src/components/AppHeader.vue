<script>
export default {
	name: "AppHeader",
	data() {
		return {
			menu: [
				{
					name: "HOME",
					route: "home",
				},
				{
					name: "ABOUT",
					route: "about",
				},
				{
					name: "PROJECTS",
					route: "projects",
				},
				{
					name: "CONTACTS",
					route: "contacts",
				},
			],
		};
	},
};
</script>

<template>
	<div class="row mx-0">
		<nav class="nav justify-content-center bg-warning fw-bold fs-4 py-2">
			<routerLink
				active-class="active"
				v-for="item in menu"
				:to="{ name: item.route }"
				class="nav-link text-dark py-3 myLinks rounded mx-1">
				{{ item.name }}
			</routerLink>

			<!-- SECOND METHOD WITHOUT ARRAY -->

			<!-- <routerLink to="/" class="nav-link text-dark">HOME</routerLink>
			<routerLink to="/about" class="nav-link text-dark">ABOUT</routerLink>
			<routerLink to="/projects" class="nav-link text-dark">PROJECTS</routerLink>
			<routerLink to="/contacts" class="nav-link text-dark">CONTACTS</routerLink> -->
		</nav>
	</div>
</template>

<style>
.myLinks:hover,
.active {
	background-color: white;
}
</style>
