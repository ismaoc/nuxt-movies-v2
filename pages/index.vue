<template>
	<item-list :list="popularMovies" />
</template>

<script lang="ts" setup>
import useMovies from "@/composables/useMovies";

const { popularMovies, getPopularMovies } = useMovies();

// getPopularMovies();
</script>
