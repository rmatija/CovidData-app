<template>
	<div class="container">
		<DateInputField v-model="date" :date="date" />

		<div v-if="date">
			<ShowResultsButton :checkDates="checkDates" />
		</div>

		<div v-if="active">
			<CountriesDataBoxes
				:active="active"
				:recovered="recovered"
				:deaths="deaths"
			/>
		</div>
	</div>
</template>

<script>
	import { ref, watch } from 'vue';

	import todayDate from '@/composables/todayDate';
	import CountriesDataBoxes from './CountriesDataBoxes.vue';
	import DateInputField from './DateInputField.vue';
	import ShowResultsButton from './ShowResultsButton.vue';

	export default {
		name: 'DatePicker',
		components: {
			CountriesDataBoxes,
			DateInputField,
			ShowResultsButton,
		},
		props: ['showedCountry'],
		setup(props) {
			const date = ref('');
			const dateFrom = ref('');
			const dateTo = ref('');
			const active = ref('');
			const recovered = ref('');
			const deaths = ref('');

			const { today, yesterdayDate, convertDate } = todayDate();

			watch(date, () => {
				dateFrom.value = date.value + 'T00:00:00Z';
				dateTo.value = date.value + 'T23:59:59Z';
				active.value = '';
				recovered.value = '';
				deaths.value = '';
				convertDate();
			});

			const checkDates = () => {
				if (dateTo.value < today.value) {
					searchDates();
				} else if (dateTo.value >= today.value) {
					searchToday();
				}
			};

			const url = ref(
				`https://api.covid19api.com/live/country/${props.showedCountry.Slug}/status/confirmed`
			);

			const fetchedData = (res) => {
				(active.value = res[0].Active),
					(recovered.value = res[0].Recovered),
					(deaths.value = res[0].Deaths);
			};

			const searchDates = async () => {
				fetch(`${url.value}?from=${dateFrom.value}&to=${dateTo.value}`)
					.then((res) => res.json())
					.then((res) => {
						fetchedData(res);
					})
					.catch((err) => console.log(err.message));
			};

			const searchToday = async () => {
				fetch(`${url.value}/date/${yesterdayDate.value}`)
					.then((res) => res.json())
					.then((res) => {
						fetchedData(res);
					})
					.catch((err) => console.log(err.message));
			};

			return {
				date,
				dateFrom,
				dateTo,
				active,
				recovered,
				deaths,
				url,
				fetchedData,
				searchDates,
				searchToday,
				checkDates,
			};
		},
	};
</script>
