import { json } from "@sveltejs/kit";
import { GetVideoDetails } from "youtube-search-api";

export async function GET({ url }) {
    const id = url.searchParams.get('v');
    if (!id) {
        return json({ error: 'Missing id param' }, { status: 400 });
    }

    try {
        const result = await GetVideoDetails(id);
        return json(result);
    } catch (err) {
        console.error(err);
        return json({ error: 'Failed to fetch video data ' }, { status: 500 });
    }
}