<script>
export default {
	name: "ProjectCard",
	props: { element: Object },
	data() {
		return {
			base_url: "http://127.0.0.1:8000",
		};
	},
};
</script>

<template>
	<div class="col">
		<div class="card">
			<template v-if="!element.thumb.startsWith('http')">
				<img
					class="card-img-top"
					:src="base_url + '/storage/' + element.thumb"
					alt=""
					loading="lazy" />
			</template>

			<template v-else>
				<img class="card-img-top" :src="element.thumb" alt="" loading="lazy" />
			</template>

			<div class="card-body text-center fw-bold">
				<p class="fw-bold fs-4 text-warning">{{ element.project_title }}</p>
				<p>Project start: {{ element.start_project }}</p>
				<p>Project end: {{ element.end_project }}</p>
				<router-link
					class="btn btn-warning fw-bold"
					:to="{ name: 'single-project', params: { id: element.id } }"
					>READ MORE</router-link
				>
			</div>
		</div>
	</div>
</template>

<style></style>
