export interface SearchItem {
    id: string;
    type: string;
    thumbnail?: {
        thumbnails?: { url: string }[];
    };
    title: string;
    channelTitle?: string;
    shortBylineText?: string;
    length?: string | any;
    isLive?: boolean;
    videos?: any[];
    videoCount?: string;
}