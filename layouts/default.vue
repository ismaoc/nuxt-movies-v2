<template>
    <div class="app-layout">
        <app-header></app-header>
        <main class="app-content">
            <slot />
        </main>
        <app-footer></app-footer>
    </div>
</template>

<style>
.app-content {
	max-width: var(--content-width);
	margin: 0 auto;
	padding: 3rem 0;
	min-height: calc(100vh - var(--header-height));
}
</style>
