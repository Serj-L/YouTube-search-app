import axios from 'axios';

import { ISearchVideoInput, ISearchVideoResponse, ISearchVideoStatsResponse } from './types';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: process.env.REACT_APP_YOUTUBE_KEY,
    q: '',
    order: 'relevance',
    maxResults: 12,
    resultsPerPage: 12,
    type: 'video',
  },
});

export const getVideos = async (params: ISearchVideoInput): Promise<ISearchVideoResponse> => {
  const { data } = await instance.get('/search', {
    params,
  });

  return data;
};

export const getVideosStats = async (videoId: string): Promise<ISearchVideoStatsResponse> => {
  const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_KEY}&fields=items(snippet(title,channelTitle,publishedAt),id,statistics(viewCount))&part=snippet,statistics&id=${videoId}`);

  return data;
};
