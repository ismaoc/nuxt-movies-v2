<template>
	<section class="movie-info  flex-col">
		<nuxt-link to="/" class="link-back">
			<span>Back to home</span>
		</nuxt-link>
		<div class="movie-info__content flex mb-8">
			<div class="w-1/4">
				<nuxt-img :src="poster" />
			</div>
			<div class="w-3/4 px-8">
				<h1>{{ movieInfo?.title }}</h1>
				<div class="movie-info__meta flex items-center">
					<span class="i-mdi-star-circle mr-1"></span>
					<span>{{ movieInfo?.vote_average }}</span>
					<span class="mx-2"> | </span>
					<span>{{ movieInfo?.release_date }}</span>
					<span class="mx-2"> | </span>
					<span class="capitalize">{{ genre }}</span>
				</div>
				<div class="py-2">
					<p>{{ movieInfo?.overview }}</p>
				</div>
			</div>
		</div>
		<div class="movie-info__content flex flex-col">
			<h2 class="mb-4">Similar movies</h2>
			<item-list :list="similarMovies" />
		</div>
	</section>
</template>

<script lang="ts" setup>
import useMovies from "@/composables/useMovies";
const route = useRoute();

const { movieInfo, getMovieInfo, similarMovies, getSimilarMovies } = useMovies();
getMovieInfo(route.params.id);
getSimilarMovies(route.params.id);

const genre = computed(() => movieInfo.value?.genres.map(genre => genre.name).join(", "));
const poster = computed(() => `https://image.tmdb.org/t/p/w400/${movieInfo.value?.poster_path}`);
</script>

<style scoped>
.movie-info__content {
	flex: 0 0 100%;
}

.movie-info__meta {
	font-size: 14px;
}
</style>
