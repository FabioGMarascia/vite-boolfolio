<script>
import axios from "axios";

export default {
	name: "ProjectCard",
	data() {
		return {
			posts: "",
		};
	},
	mounted() {
		axios.get("http://localhost:8000/api/posts").then((result) => {
			console.log(result.data.posts);
			this.posts = result.data.posts;
		});
	},
};
</script>

<template>
	<div class="col" v-for="post in posts.data">
		<div class="card">
			<img class="card-img-top" :src="post.thumb" alt="" />
			<div class="card-body text-center">
				<p class="fw-bold fs-4">{{ post.project_title }}</p>
				<p>Project start: {{ post.start_project }}</p>
				<p>Project end: {{ post.end_project }}</p>
			</div>
		</div>
	</div>
</template>

<style></style>
