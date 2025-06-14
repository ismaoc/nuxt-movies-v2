export default function useSeries () {
	const popularSeries = ref([]);
	const seriesInfo = ref(null);
	const similarSeries = ref([]);

	async function getPopularSeries () {
		const { data, error } = await useFetch("/api/series");
		popularSeries.value = data.value?.results;
	}

	async function getMovieInfo(id: number) {
		const { data, error } = await useFetch(`/api/movie/${id}`);
		seriesInfo.value = data.value;   
	}

	async function getSimilarSeries(id: number) {
		const { data, error } = await useFetch(`/api/movie/similar`, {
			method: "get",
			query: {
				id: id
			}
		});
		similarSeries.value = data.value?.results;
	}

	return { popularSeries, getPopularSeries, seriesInfo, getMovieInfo, similarSeries, getSimilarSeries }
}
