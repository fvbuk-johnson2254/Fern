<script lang="ts">
	import favicon_dark from '$lib/assets/favicon-dark.svg';
	import favicon_light from '$lib/assets/favicon-light.svg';
	import Footer from '$lib/components/Footer.svelte';

	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<link rel="icon" href={favicon_light} media="(prefers-color-scheme: light)" />
	<link rel="icon" href={favicon_dark} media="(prefers-color-scheme: dark)" />
	<title>Fern</title>
</svelte:head>

<Header />
<br>
{@render children?.()}
<Footer />
