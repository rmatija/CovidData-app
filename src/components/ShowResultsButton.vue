<template>
	<div class="flex justify-center mb-10 mx-auto">
		<button
			@click="checkDates()"
			class="text-white bg-sky-400 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
		>
			Show results
		</button>
	</div>
</template>

<script>
	export default {
		name: 'ShowResultsButton',
		props: ['checkDates'],
	};
</script>
