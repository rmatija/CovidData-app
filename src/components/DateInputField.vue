<template>
	<div class="flex justify-center mb-3 flex-col md:w-1/4 mx-auto">
		<input
			type="date"
			v-model="date"
			@input="$emit('update:modelValue', $event.target.value)"
			class="bg-gray-50 border sm:text-sm rounded-lg pl-10 p-2.5"
		/>
		<p class="text-lg p-4 mb-5 font-semibold">Date: {{ date }}</p>
	</div>
</template>

<script>
	export default {
		name: 'DateInputField',
		props: ['date'],
	};
</script>
