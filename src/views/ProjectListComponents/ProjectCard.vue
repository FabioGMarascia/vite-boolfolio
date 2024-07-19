<script>
export default {
	name: "ProjectCard",
	props: { element: Object },
	data() {
		return {};
	},
};
</script>

<template>
	<div class="col">
		<div class="card">
			<img class="card-img-top" :src="element.thumb" alt="" />
			<div class="card-body text-center">
				<p class="fw-bold fs-4">{{ element.project_title }}</p>
				<p>Project start: {{ element.start_project }}</p>
				<p>Project end: {{ element.end_project }}</p>
			</div>
		</div>
	</div>
</template>

<style></style>
