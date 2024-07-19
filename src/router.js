import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppProjects from "./views/AppProjects.vue";
import AppContacts from "./views/AppContacts.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: AppHome,
		},
		{
			path: "/about",
			name: "about",
			component: AppAbout,
		},
		{
			path: "/blog",
			name: "projects",
			component: AppProjects,
		},
		{
			path: "/contacts",
			name: "contacts",
			component: AppContacts,
		},
	],
});

export { router };
