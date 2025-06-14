export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const config = useRuntimeConfig()
	return await $fetch(`https://api.themoviedb.org/3/movie/${query?.id}/similar?api_key=${config.apiKey}&language=es`);
})
