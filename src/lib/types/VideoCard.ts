export interface VideoCard {
    id: string;
    type: string;
    thumbnail: any;
    title: string;
    channelTitle?: string;
    shortBylineText?: string;
    length?: string | any;
    isLive?: boolean;
    videos?: any[];
    videoCount?: string;
}