import { json } from "@sveltejs/kit";
import { GetListByKeyword } from "youtube-search-api";

export async function GET({ url }) {
    const query = url.searchParams.get('q');
    if (!query) {
        return json({ error: 'Missing query param' }, { status: 400 });
    }

    try {
        const result = await GetListByKeyword(query, false);
        return json(result);
    } catch (err) {
        console.error(err);
        return json({ error: 'Failed to fetch Youtube results ' }, { status: 500 });
    }
}