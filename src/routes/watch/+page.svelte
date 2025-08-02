<script lang="ts">
	import VideoFrame from '$lib/components/VideoFrame.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { VideoDetails } from 'youtube-search-api';

	let videoDetail: VideoDetails | null = null;
	let error: string | null = null;
	let isLoading = false;

	$: {
		if ($page.url) {
			loadVideo();
		}
	}

	async function loadVideo() {
		try {
			isLoading = true;
			error = null;
			const video = $page.url.searchParams.get('v') || 'eeee';
			const res = await fetch(`/api/youtube/video?v=${video}`);
			const data: VideoDetails & { error?: string } = await res.json();

			if (data.error) {
				error = data.error;
			} else {
				videoDetail = data;
			}
		} catch (err) {
			error = 'Network request failed';
		} finally {
			isLoading = false;
		}
	}

	onMount(async () => {
		await loadVideo();
	});
</script>

{#if videoDetail && videoDetail.title}
	<VideoFrame {...videoDetail} />
{/if}
