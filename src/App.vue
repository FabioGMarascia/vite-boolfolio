<script>
import axios from "axios";

export default {
	name: "App",
	data() {
		return {
			base_url: "http://",
			posts: "",
		};
	},
	mounted() {
		// promise di axios con il .get
		axios.get("http://localhost:8000/api/posts").then((result) => {
			console.log(result.data.posts);
			this.posts = result.data.posts;
		});
	},
};
</script>

<template>
	<h1 class="text-center fw-bold display-3 my-4 text-warning">Vite-Boolfolio</h1>

	<div class="container">
		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
			<div class="col" v-for="post in posts.data">
				<div class="card">
					<img class="card-img-top" :src="post.thumb" alt="" />
					<div class="card-body">
						{{ post.project_title }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
