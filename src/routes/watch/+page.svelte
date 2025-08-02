<script lang="ts">
    import VideoFrame from "$lib/components/VideoFrame.svelte";

    import { page } from "$app/state";
</script>

<VideoFrame id={page.url.searchParams.get("v") || ""} />