<script lang="ts">
	import favicon_dark from '$lib/assets/favicon-dark.svg';
	import favicon_light from '$lib/assets/favicon-light.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon_light} media="(prefers-color-scheme: light)" />
	<link rel="icon" href={favicon_dark} media="(prefers-color-scheme: dark)" />
	<title>Fern</title>
</svelte:head>

{@render children?.()}
