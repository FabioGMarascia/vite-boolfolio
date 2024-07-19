<script>
import axios from "axios";
import ProjectCard from "./ProjectListComponents/ProjectCard.vue";

export default {
	name: "PostList",
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
	<ProjectCard v-for="post in posts.data" :element="post" />

	<nav aria-label="Page navigation">
		<ul class="pagination">
			<li
				v-for="link in posts.links"
				class="page-item"
				:class="{ disabled: !link.url, active: link.active }">
				<a href="#" class="page-link" @click="changePage(link.url)" v-html="link.label"></a>
			</li>
		</ul>
	</nav>
</template>

<style></style>
