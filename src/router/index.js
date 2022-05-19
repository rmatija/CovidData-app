import { createRouter, createWebHistory } from 'vue-router';
import GlobalView from '../views/GlobalView.vue';
import CountriesDataView from '../views/CountriesDataView.vue';

const routes = [
	{
		path: '/',
		name: 'global',
		component: GlobalView,
	},
	{
		path: '/countriesdataview',
		name: 'countriesdataview',
		component: CountriesDataView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
