<template>
	<header class="app-header sticky">
		<div class="flex justify-between">
			<div class="flex items-center">
				<div class="mr-6">
						<h1>Nuxt <span style="color: #00bd6f">movies</span></h1>
				</div>
				<div>
					<nuxt-link to="/" class="mr-2">Movies</nuxt-link>
					<nuxt-link to="/series">Series</nuxt-link>
				</div>
			</div>
			<div>
				<button class="app-header__theme-btn cursor-pointer" @click="toggleDark()">
					<span class="i-mdi-theme-light-dark"></span>
				</button>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>

<style scoped>
.app-header {
	background-color: var(--white);
	border-bottom: 1px solid var(--gray);
	height: var(--header-height);
	line-height: var(--header-height);
	padding: 0 1rem;
	top: 0;
	z-index: 100;
}

.app-header__theme-btn {
	background-color: transparent;
	border-radius: 50%;
	font-size: 18px;
	height: 30px;
	width: 30px;
}

body[color-scheme="dark"] .app-header {
	background-color: var(--dark-bg);
}

.app-header h1 {
	font-size: 24px;
	margin-bottom: 0;
}

body[color-scheme="dark"] .app-header h1 {
	color: var(--white);
}
</style>
