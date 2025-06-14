<template>
	<section class="movie-list">
		<h1 class="mb-4">Popular movies</h1>
		<div class="movie-list__list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
			<item-card 
				v-for="(movie, index) in list" 
				:item="movie"
				:key="index"
			/>
		</div>
	</section>
</template>

<script lang="ts" setup>
const props = defineProps(['list'])
</script>
