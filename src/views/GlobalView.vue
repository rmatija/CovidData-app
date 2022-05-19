<template>
	<div class="container">
		<main>
			<div class="text-center">
				<h1 class="text-xl md:text-3xl font-bold">Global</h1>
				<div class="text-2xl mt-4 mb-10">{{ currentDate }}</div>
			</div>
			<GlobalDataBoxes :globalData="globalData" />
		</main>
	</div>
</template>

<script>
	import GlobalDataBoxes from '@/components/GlobalDataBoxes.vue';

	import { ref, onBeforeMount, computed } from 'vue';

	export default {
		name: 'GlobalView',
		components: { GlobalDataBoxes },

		setup() {
			const globalData = ref('');

			onBeforeMount(() => {
				fetch('https://api.covid19api.com/summary')
					.then((res) => res.json())
					.then((data) => (globalData.value = data.Global))
					.catch((err) => console.log(err.message));
			});

			const currentDate = computed(() => {
				return new Date(globalData.value.Date).toLocaleDateString();
			});

			return {
				globalData,
				currentDate,
			};
		},
	};
</script>
