import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { getVideos, getVideosStats } from '../api/youtube';
import { ISearchVideoInput, ISearchVideoResponse, ISearchVideoStatsResponse } from '../api/types';

export const searchVideos = createAsyncThunk(
  'youtubeSearch/searchVideos',
  async (params: ISearchVideoInput) => {
    try {
      const response = await getVideos(params);

      return response;
    } catch(err) {
      return err;
    }
  },
);

export const searchVideosStats = createAsyncThunk(
  'youtubeSearch/getVideosStats',
  async (videoId: string) => {
    try {
      const response = await getVideosStats(videoId);

      return response;
    } catch(err) {
      return err;
    }
  },
);
interface IVideoItem {
  videoId: string;
  title: string;
  description: string;
  chanelTitle: string;
  thumbnail: {
    width: number;
    height: number;
    url: string;
  }
  viewCount?: string;
}
interface IYoutubeSearchState {
  videos: IVideoItem[];
  totalCount: number;
  isLoading: boolean;
  query: string;
}

const initialState = {
  videos: [],
  totalCount: 0,
  isLoading: false,
  query: '',
} as IYoutubeSearchState;

const youtubeSearchSlice = createSlice({
  name: 'youtubeSearch',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<{ query: string }>) {
      state.query = action.payload.query;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchVideos.fulfilled, (state, action) => {
      const payload = action.payload as ISearchVideoResponse;

      state.totalCount = payload.pageInfo.totalResults;
      state.videos = payload.items.map((v) => ({
        videoId: v.id.videoId,
        title: v.snippet.channelTitle,
        description: v.snippet.description,
        chanelTitle: v.snippet.channelTitle,
        thumbnail: {
          width: v.snippet.thumbnails.medium.width,
          height: v.snippet.thumbnails.medium.height,
          url: v.snippet.thumbnails.medium.url,
        },
      }));
      state.isLoading = false;
    });
    builder.addCase(searchVideos.rejected, (state) => {
      state.isLoading = false;
      console.log('videos recive error');
    });
    builder.addCase(searchVideosStats.fulfilled, (state, action) => {
      const payload = action.payload as ISearchVideoStatsResponse;
      state.videos.map(video => {
        video.viewCount = payload.items.filter(el => el.id === video.videoId)[0]?.statistics.viewCount;
        return video;
      });
    });
    builder.addCase(searchVideosStats.rejected, (state) => {
      console.log('view counts recive error');
    });
  },
});

export const { setQuery } = youtubeSearchSlice.actions;
export default youtubeSearchSlice.reducer;
