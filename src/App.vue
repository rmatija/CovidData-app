<template>
	<div>
		<nav
			class="text-xl md:text-3xl text-center bg-blue-800 text-blue-300 p-10 mb-10"
		>
			<router-link to="/" class="pr-10">Global</router-link>
			<router-link to="/countriesdataview">Data per country</router-link>
		</nav>
		<router-view />
	</div>
</template>

<style lang="scss">
	nav {
		a {
			&.router-link-exact-active {
				color: #fff;
				text-decoration: underline;
			}
		}
	}
</style>
