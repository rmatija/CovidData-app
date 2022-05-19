<template>
	<div class="container">
		<div class="grid md:grid-cols-3 gap-4">
			<div class="shadow-md bg-blue-100 p-10 text-center rounded">
				<div class="text-2xl mb-4">
					<span class="font-bold">Active:</span>
					{{ active }}
				</div>
			</div>
			<div class="shadow-md bg-blue-200 p-10 text-center rounded">
				<div class="text-2xl mb-4">
					<span class="font-bold">Recovered:</span>
					{{ recovered }}
				</div>
			</div>
			<div class="shadow-md bg-blue-300 p-10 text-center rounded">
				<div class="text-2xl mb-4">
					<span class="font-bold">Deaths:</span>
					{{ deaths }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CountriesDataBoxes',
		props: ['active', 'recovered', 'deaths'],
	};
</script>
