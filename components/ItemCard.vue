<template>
	<div class="movie-card mt-4">
		<NuxtLink :to="moviePath">
			<nuxt-img :src="image" class="movie-card__poster hover:opacity-75 transition ease-in-out duration-150" />
		</NuxtLink>
		<div class="mt-2">
			<a class="movie-card__title mb-2">{{ item.title }}</a>
			<div class="movie-card__meta flex items-center m-0">
				<span class="i-mdi-star-circle mb-1 inline-block mr-1"></span>
				<span class="mr-1">{{ item.vote_average }}</span>
				<span class="mr-1"> | </span>
				<span>{{ item?.release_date }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface IItem {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

const props = defineProps<{
	item: IItem
}>();

const image = computed(() => `https://image.tmdb.org/t/p/w400/${props.item.poster_path}`);
const moviePath = computed(() => `/movies/${props.item.id}`);
</script>

<style scoped>
.movie-card__title {
	font-size: 18px;
	font-weight: 400;
	line-height: 22px;
}

.movie-card__poster {
	border-radius: 2px;
	contain: paint;
}

.movie-card__meta {
	font-size: 14px;
	font-weight: 400;
}
</style>
