<script>
import axios from "axios";

export default {
	name: "AppContacts",
	data() {
		return {
			name: "",
			email: "",
			message: "",
			errors: {},
			loading: false,
			success: false,
		};
	},
	methods: {
		sendMessage() {
			// request preload
			this.loading = true;
			const data = {
				name: this.name,
				email: this.email,
				message: this.message,
			};

			this.errors = {};

			// sent ajax post request
			axios.post("http://localhost:8000/api/lead", data).then((response) => {
				if (response.data.success) {
					this.success = true;
					this.errors = {};

					this.name = "";
					this.email = "";
					this.message = "";
				} else {
					this.success = false;
					this.errors = response.data.errors;
				}
				this.loading = false;
			});
		},
	},
};
</script>

<template>
	<div class="col text-center">
		<h1 class="text-center fw-bold display-4 my-5 text-warning">CONTACT ME</h1>
	</div>

	<div class="container">
		<div class="row mx-0 justify-content-center">
			<div class="col-10">
				<template v-if="success">
					<div class="alert alert-success">
						<strong>Message correctly sent</strong>
					</div>
				</template>

				<form @submit.prevent="sendMessage()">
					<div class="mb-3">
						<label for="name" class="form-label text-warning fw-bold fs-5">NAME</label>
						<input
							type="text"
							class="form-control"
							:class="{ 'is-invalid': errors.name }"
							name="name"
							id="name"
							aria-describedby="helpId"
							placeholder="Full Name"
							v-model="name" />

						<p
							class="text-danger"
							v-for="(error, index) in errors.name"
							:key="`message-error-${index}`">
							{{ error }}
						</p>

						<small id="helpId" class="form-text text-muted">Type Full name</small>
					</div>

					<div class="mb-3">
						<label for="email" class="form-label text-warning fw-bold fs-5">E-MAIL</label>
						<input
							type="text"
							class="form-control"
							:class="{ 'is-invalid': errors.email }"
							name="email"
							id="email"
							aria-describedby="helpId"
							placeholder="E-Mail"
							v-model="email" />

						<p
							class="text-danger"
							v-for="(error, index) in errors.email"
							:key="`message-error-${index}`">
							{{ error }}
						</p>
						<small id="helpId" class="form-text text-muted">Type E-Mail</small>
					</div>

					<div class="mb-3">
						<label for="message" class="form-label text-warning fw-bold fs-5"
							>DESCRIPTION</label
						>
						<textarea
							type="text"
							class="form-control"
							:class="{ 'is-invalid': errors.message }"
							name="message"
							id="message"
							rows="3"
							v-model="message">
						</textarea>

						<p
							class="text-danger"
							v-for="(error, index) in errors.message"
							:key="`message-error-${index}`">
							{{ error }}
						</p>
					</div>

					<div class="text-center">
						<button type="submit" class="btn btn-warning fw-bold">SUBMIT</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style></style>
