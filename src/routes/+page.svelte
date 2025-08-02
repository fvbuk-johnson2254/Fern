<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import type { SearchResult } from 'youtube-search-api';

	let searchResult: SearchResult | null = null;
	let error: string | null = null;

	onMount(async () => {
		try {
			const query = page.url.searchParams.get('q') || 'latest';
			const res = await fetch(`/api/youtube/search?q=${query}`);
			const data: SearchResult & { error?: string } = await res.json();

			if (data.error) {
				error = data.error;
			} else {
				searchResult = data;
			}
		} catch (err) {
			error = 'Network request failed';
		}
	});
</script>

{#if error}
	<p class="text-red-600">{error}</p>
{:else if !searchResult}
	<p>Loading videos...</p>
{:else if searchResult.items.length === 0}
	<p>No videos found.</p>
{:else}
	{#each searchResult.items as video (video.id)}
		<div>
			<h2>{video.title}</h2>
			<img src={video.thumbnail?.thumbnails?.[0]?.url} alt={video.title} />
			<p>{video.channelTitle}</p>
		</div>
	{/each}
{/if}
