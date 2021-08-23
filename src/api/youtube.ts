import axios from 'axios';

import { ISearchVideoInput, ISearchVideoResponse } from './types';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: process.env.REACT_APP_YOUTUBE_KEY,
    q: '',
    maxResults: 12,
    order: 'date',
    resultsPerPage: 12,
  },
});

export const getVideos = async (params: ISearchVideoInput): Promise<ISearchVideoResponse> => {
  const { data } = await instance.get('/search', {
    params,
  });

  return data;
};
