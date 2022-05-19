import { ref } from 'vue';

const todayDate = () => {
	const today = ref(new Date().toISOString());
	const yesterdayDate = ref('');

	const convertDate = () => {
		let clickedDate = new Date(today.value);
		clickedDate.setDate(clickedDate.getDate() - 1);
		yesterdayDate.value = new Date(clickedDate).toISOString();
	};

	return {
		today,
		yesterdayDate,
		convertDate,
	};
};

export default todayDate;
