<script>
import axios from "axios";

export default {
	name: "SingleProject",
	data() {
		return {
			base_url: "http://127.0.0.1:8000",
			post: null,
		};
	},
	mounted() {
		const url = `${this.base_url}/api/posts/${this.$route.params.id}`;

		axios.get(url).then((response) => {
			console.log(response);
			if (response.data.success) {
				this.post = response.data.post;
			} else {
				this.$router.push({ name: "not-found" });
			}
		});
	},
};
</script>

<template>
	<div class="row mx-0 mb-5">
		<div v-if="post">
			<div class="p-5 mb-4">
				<div class="col text-center">
					<h1 class="text-center fw-bold display-3 text-warning">PROJECT DETAILS</h1>
				</div>
			</div>

			<div class="row mx-0 justify-content-center">
				<div class="col-4 px-4">
					<div class="card cardBox border-2">
						<template v-if="!post.thumb.startsWith('http')">
							<img
								class="img-fluid"
								:src="base_url + '/storage/' + post.thumb"
								alt=""
								loading="lazy" />
						</template>
						<template v-else>
							<img class="img-fluid" :src="post.thumb" alt="" loading="lazy" />
						</template>
					</div>
				</div>

				<div class="col-4 px-4 fw-bold fs-5">
					<div><span class="text-warning">TITLE: </span>{{ post.project_title }}</div>
					<div><span class="text-warning">COLLABORATORS: </span>{{ post.collaborators }}</div>
					<div><span class="text-warning">FRAMEWORK: </span>{{ post.framework }}</div>
					<div><span class="text-warning">START PROJECT: </span>{{ post.start_project }}</div>
					<div><span class="text-warning">END PROJECT: </span>{{ post.end_project }}</div>
					<div>
						<span class="text-warning fs-4">DESCRIPTION: </span> <br />{{ post.description }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
