<template>
	<div>
		<CountryInputField
			v-model="search"
			:search="search"
			:searchCountries="searchCountries"
			:showCountry="showCountry"
			:showedCountry="showedCountry"
		/>

		<div v-if="showedCountry">
			<DatePicker :showedCountry="showedCountry" />
		</div>
	</div>
</template>

<script>
	import CountryInputField from '@/components/CountryInputField.vue';
	import DatePicker from '@/components/DatePicker.vue';

	import { ref, onBeforeMount, computed } from 'vue';

	export default {
		name: 'CountriesDataView',
		components: {
			DatePicker,
			CountryInputField,
		},
		setup() {
			const search = ref('');
			const countries = ref([]);
			const showedCountry = ref('');

			onBeforeMount(() => {
				fetch('https://api.covid19api.com/countries')
					.then((res) => res.json())
					.then((data) => (countries.value = data))
					.catch((err) => console.log(err.message));
			});

			const searchCountries = computed(() => {
				if (search.value === '') {
					return [];
				}

				let matches = 0;
				return countries.value.filter((country) => {
					if (
						country.Country.toLowerCase().includes(
							search.value.toLowerCase()
						) &&
						matches < 5
					) {
						matches++;
						return country;
					}
				});
			});

			const showCountry = (country) => {
				showedCountry.value = country;
				search.value = '';
			};

			return {
				search,
				countries,
				showedCountry,
				showCountry,
				searchCountries,
			};
		},
	};
</script>
