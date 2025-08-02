<script lang="ts">
	import type { SearchResult, SearchItem } from 'youtube-search-api';
	import VideoCard from './VideoCard.svelte';

	const props: SearchResult | SearchItem[] = $props();

	const videos: SearchItem[] = Array.isArray(props) ? props : (props.items ?? []);
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
	{#each videos as video}
		<VideoCard {...video} />
	{/each}
</div>
