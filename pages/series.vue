<template>
	<item-list :list="popularSeries" />
</template>

<script lang="ts" setup>
import useSeries from "@/composables/useSeries";

const { popularSeries, getPopularSeries } = useSeries();

getPopularSeries();
</script>
