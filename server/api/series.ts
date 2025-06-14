export default defineEventHandler(async () => {
	const config = useRuntimeConfig()
	return await $fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${config.apiKey}&language=es`);
})
