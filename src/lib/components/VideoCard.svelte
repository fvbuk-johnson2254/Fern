<script lang="ts">
	import type { VideoCard } from '$lib/types/VideoCard';
	import { goto } from '$app/navigation';
	let props: VideoCard = $props();

</script>

<div class="bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
	<div class="aspect-video bg-neutral-800 relative">
		<img 
			src={props.thumbnail?.thumbnails?.[0].url} 
			alt={props.title}
			class="w-full h-full object-cover absolute inset-0"
		>
	</div>
	<div class="p-4">
		<a 
  href={`/watch?v=${props.id}`} 
  class="text-lg font-semibold hover:text-royalBlue cursor-pointer"
>
  {props.title}
</a>
		<p class="text-gray-400 text-sm mt-1">{props.channelTitle}</p>
	</div>
</div>