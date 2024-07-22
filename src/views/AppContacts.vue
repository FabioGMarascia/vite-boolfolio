<script>
export default {
	name: "AppContacts",
	data() {
		return {};
	},
};
</script>

<template>
	<div class="col text-center">
		<h1 class="text-center fw-bold display-3 my-5 text-warning">CONTACTS</h1>
	</div>

	<div class="container">
		<div class="row mx-0 justify-content-center">
			<div class="col-8">
				<form action="">
					<div class="mb-3">
						<label for="name" class="form-label">Name</label>
						<input
							type="text"
							class="form-control"
							name="name"
							id="name"
							aria-describedby="helpId"
							placeholder="Full Name" />
						<small id="helpId" class="form-text text-muted">Type Full name</small>
					</div>

					<div class="mb-3">
						<label for="mail" class="form-label">E-Mail</label>
						<input
							type="text"
							class="form-control"
							name="mail"
							id="mail"
							aria-describedby="helpId"
							placeholder="E-Mail" />
						<small id="helpId" class="form-text text-muted">Type E-Mail</small>
					</div>

					<div class="text-center">
						<button type="submit" class="btn btn-warning fw-bold">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style></style>
