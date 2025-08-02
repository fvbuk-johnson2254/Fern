<script lang="ts">
	import VideoGrid from "$lib/components/VideoGrid.svelte";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import type { SearchResult } from "youtube-search-api";

	let searchResult: SearchResult | null = null;
	let error: string | null = null;
	let isLoading = false;

	$: {
		if ($page.url) {
			loadVideos();
		}
	}

	async function loadVideos() {
		try {
			isLoading = true;
			error = null;
			const query = $page.url.searchParams.get('q') || 'latest';
			const res = await fetch(`/api/youtube/search?q=${encodeURIComponent(query)}`);
			const data: SearchResult & { error?: string } = await res.json();

			if (data.error) {
				error = data.error;
			} else {
				searchResult = data;
			}
		} catch (err) {
			error = 'Network request failed';
		} finally {
			isLoading = false;
		}
	}

	onMount(async () => {
		await loadVideos();
	});
</script>

{#if error}
	<p class="text-red-600 text-4xl">{error}</p>
{:else if isLoading}
	<p class="text-4xl">Loading videos...</p>
{:else if !searchResult || searchResult.items.length === 0}
	<p class="text-4xl">No videos found.</p>
{:else}
	<VideoGrid {...searchResult} />
{/if}