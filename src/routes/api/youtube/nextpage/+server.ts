import { error, isRedirect, json } from "@sveltejs/kit";
import { NextPage } from "youtube-search-api";

export async function POST({ request }) {
    const { t: nextPageToken, ctx: context } = await request.json();
    
    if (!nextPageToken || !context) {
        return json({ error: "Missing params" }, { status: 400 });
    }

    try {
        const results = await NextPage({ 
            nextPageToken, 
            nextPageContext: context 
        });
        return json(results);
    } catch (err) {
        //@ts-ignore
        return json({ error: err.message }, { status: 500 });
    }
}