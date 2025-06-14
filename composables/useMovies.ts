export default function useMovies () {
	const popularMovies = ref([]);
	const movieInfo = ref(null);
	const similarMovies = ref([]);

	async function getPopularMovies () {
		const { data, error } = await useFetch("/api/movies");
		popularMovies.value = data.value?.results;
	}

	async function getMovieInfo(id: number) {
		const { data, error } = await useFetch(`/api/movie/${id}`);
		movieInfo.value = data.value;   
	}

	async function getSimilarMovies(id: number) {
		const { data, error } = await useFetch(`/api/movie/similar`, {
			method: "get",
			query: {
				id: id
			}
		});
		similarMovies.value = data.value?.results;
	}

	return { popularMovies, getPopularMovies, movieInfo, getMovieInfo, similarMovies, getSimilarMovies }
}
