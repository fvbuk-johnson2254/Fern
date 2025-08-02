<script lang="ts">
    import type { VideoFrame } from "$lib/types/VideoFrame";

    const props : VideoFrame = $props();
</script>

<iframe src="https://www.youtube-nocookie.com/embed/{props.id}" title="Video Frame" width=900 height=500></iframe>