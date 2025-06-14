export default defineEventHandler(async () => {
	const config = useRuntimeConfig()
	console.log(config.public)
	return await $fetch('https://api.themoviedb.org/3/movie/popular?language=es', {
		headers: {
			'Authorization': `Bearer ${config.apiKey}`
		}
	});
})
