<script>
import axios from "axios";
import ProjectCard from "./AppProjectsComponents/ProjectCard.vue";

export default {
	name: "AppProjects",
	components: {
		ProjectCard,
	},
	data() {
		return {
			posts: "",
		};
	},
	methods: {
		changePage(url) {
			axios.get(url).then((result) => {
				this.posts = result.data.posts;
			});
		},
	},
	mounted() {
		axios.get("http://localhost:8000/api/posts").then((result) => {
			console.log(result.data.posts);
			this.posts = result.data.posts;
			console.log(this.posts.length);
		});
	},
};
</script>

<template>
	<div class="col text-center">
		<h1 class="text-center fw-bold display-3 my-5 text-warning">PROJECTS</h1>
	</div>

	<div class="container">
		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
			<ProjectCard v-for="post in posts.data" :element="post" />

			<nav aria-label="Page navigation">
				<ul class="pagination">
					<li
						v-for="link in posts.links"
						class="page-item"
						:class="{ disabled: !link.url, active: link.active }">
						<a
							href="#"
							class="page-link"
							@click="changePage(link.url)"
							v-html="link.label"></a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<style></style>
