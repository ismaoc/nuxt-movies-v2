<template>
    <footer class="app-footer">
			<div class="flex justify-center items-center h-full">
				<p class="text-center">
					Made with Nuxt 3 and UnoCSS. Data powered by <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">TMDB API</a>
				</p>
			</div>
    </footer>
</template>

<style scoped>
.app-footer {
	border-top: 1px solid var(--gray);
	height: var(--footer-height);
	padding: 0 1rem;
}
</style>
