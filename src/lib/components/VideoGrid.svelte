<script lang="ts">
    import type { SearchResult } from "youtube-search-api";
    import VideoCard from "./VideoCard.svelte";

    const props: SearchResult = $props();
</script>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{#each props.items as video}
    <VideoCard {...video} />
{/each}
</div>