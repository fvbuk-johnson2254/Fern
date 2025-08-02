<script lang="ts">
    import type { VideoDetails } from "youtube-search-api";

    let props:VideoDetails = $props();
</script>

<iframe src="https://www.youtube-nocookie.com/embed/{props.id}" title="Video Frame"></iframe>