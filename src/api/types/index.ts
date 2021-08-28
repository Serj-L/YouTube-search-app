export interface IUserLoginInput {
  username: string;
  password: string;
}

export interface ILoginResponse {
  username: string;
  userId: string;
}

export type TOrder = 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount';

export interface ISearchVideoInput {
  q: string;
  order?: TOrder;
  resultsPerPage?: number;
  maxResults?: number;
}

export interface IFavoritesInput {
  id: string;
  query: string;
  title: string;
  order: TOrder | null;
  resultsPerPage: number;
}
export interface ISearchVideoResponseItem {
  id: {
    videoId: string;
  }
  snippet: {
    channelTitle: string;
    channelId: string;
    description: string;
    thumbnails: {
      medium: {
        height: number;
        width: number;
        url: string;
      }
    }
  }
}

export interface ISearchVideoResponse {
  etag: string;
  pageInfo: {
    totalResults: number;
  }
  items: ISearchVideoResponseItem[]
}
export interface ISearchVideoStatsResponseItem {
  id: string;
  statistics: {
    viewCount: string;
  }
}
export interface ISearchVideoStatsResponse {
  items: ISearchVideoStatsResponseItem[]
}
