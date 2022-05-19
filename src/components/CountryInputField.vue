<template>
	<div class="relative">
		<form class="flex justify-center">
			<input
				v-model="search"
				@input="$emit('update:modelValue', $event.target.value)"
				type="search"
				class="block p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
				placeholder="Search countries..."
			/>
		</form>

		<div>
			<ul v-if="searchCountries.length">
				<li v-for="country in searchCountries" :key="country.ID">
					<p @click="showCountry(country)">
						{{ country.Country }}
					</p>
				</li>
			</ul>
		</div>

		<div class="text-center m-8">
			<p class="text-xl md:text-2xl font-bold w-1/3 mx-auto">
				Country: {{ showedCountry.Country }}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CountryInputField',
		props: ['searchCountries', 'showCountry', 'showedCountry', 'search'],
	};
</script>

<style lang="scss" scoped>
	ul {
		list-style: none;
		position: absolute;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
		padding: 9px;
		background: #efeded;
		border-radius: 9%;
		z-index: 10;

		li {
			padding: 5px 10px;
		}

		@media (min-width: 768px) {
			width: 16%;
		}
	}
</style>
