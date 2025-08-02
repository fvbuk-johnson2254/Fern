<script lang="ts">
	import type { VideoDetails } from 'youtube-search-api';
	const props: VideoDetails = $props();
</script>

<div class="flex justify-center w-full">
	<div class="flex flex-col lg:flex-row gap-8 max-w-screen-xl w-full mx-auto p-4">
		<div class="bg-neutral-900 rounded-lg shadow-md overflow-hidden w-full max-w-[900px]">
			<div class="bg-neutral-800">
				<iframe
					src={`https://www.youtube-nocookie.com/embed/${props.id}`}
					title="Video Frame"
					width="900"
					height="500"
					class="rounded-t-lg w-full aspect-video block"
					allowfullscreen
				></iframe>
			</div>

			<div class="p-6">
				<h1 class="text-2xl sm:text-3xl font-semibold text-white mb-2">{props.title}</h1>
				<p class="text-gray-400 text-sm mb-4">{props.channel}</p>
				<p class="text-gray-300 text-base leading-relaxed whitespace-pre-line">
					{props.description}
				</p>
			</div>
		</div>
	</div>
</div>
