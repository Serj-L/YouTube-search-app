export interface IUserLoginInput {
  userEmail: string;
  password: string;
  isSignedForm: boolean;
}

export interface IFirebaseLoginResponse {
  uid: string;
}

export type TOrder = 'date' | 'rating' | 'relevance' | 'title' | 'viewCount';

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
  order: TOrder;
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
