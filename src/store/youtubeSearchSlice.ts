import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { getVideos, getVideosStats } from '../api/youtube';
import { ISearchVideoInput, ISearchVideoResponse, ISearchVideoStatsResponse } from '../api/types';

export const searchVideos = createAsyncThunk(
  'youtubeSearch/searchVideos',
  async (params: ISearchVideoInput, { rejectWithValue }) => {
    try {
      const response = await getVideos(params);

      return response;
    } catch(err: any) {
      return rejectWithValue(err.message);
    }
  },
);

export const searchVideosStats = createAsyncThunk(
  'youtubeSearch/getVideosStats',
  async (videoId: string, { rejectWithValue }) => {
    try {
      const response = await getVideosStats(videoId);

      return response;
    } catch(err: any) {
      return rejectWithValue(err.message);
    }
  },
);
export interface IVideoItem {
  videoId: string;
  title: string;
  description: string;
  channelTitle: string;
  channelId: string;
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
  queryStatus: string;
  errorMessage: string;
  videoIdList: string;
  statsQueryStatus: string;
  isQueryInFavorites: boolean;
}

const initialState = {
  videos: [],
  totalCount: 0,
  isLoading: false,
  query: '',
  queryStatus: '',
  errorMessage: '',
  videoIdList: '',
  statsQueryStatus: '',
  isQueryInFavorites: false,
} as IYoutubeSearchState;

const youtubeSearchSlice = createSlice({
  name: 'youtubeSearch',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<{ query: string }>) {
      state.query = action.payload.query;
    },
    setIsQueryInFavorites(state, action: PayloadAction<{ value: boolean }>) {
      state.isQueryInFavorites = action.payload.value;
    },
    logOut(state) {
      state.videos = [];
      state.totalCount = 0;
      state.isLoading = false;
      state.query = '';
      state.queryStatus = '';
      state.errorMessage = '';
      state.videoIdList = '';
      state.statsQueryStatus = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchVideos.pending, (state) => {
      state.isLoading = true;
      state.queryStatus = 'pending';
      state.errorMessage = '';
    });
    builder.addCase(searchVideos.fulfilled, (state, action) => {
      const payload = action.payload as ISearchVideoResponse;

      state.totalCount = payload.pageInfo.totalResults;
      state.videos = payload.items.map((v) => ({
        videoId: v.id.videoId,
        title: v.snippet.channelTitle,
        description: v.snippet.description,
        channelTitle: v.snippet.channelTitle,
        channelId: v.snippet.channelId,
        thumbnail: {
          width: v.snippet.thumbnails.medium.width,
          height: v.snippet.thumbnails.medium.height,
          url: v.snippet.thumbnails.medium.url,
        },
      }));
      state.videoIdList = '';
      state.videos.forEach((video, idx, arr) => {
        idx < arr.length - 1 ? state.videoIdList += (video.videoId + ',') : state.videoIdList += video.videoId;
      });

      state.isLoading = false;
      state.queryStatus = 'fulfilled';
      state.errorMessage = '';
      state.statsQueryStatus = 'getStats';
    });
    builder.addCase(searchVideos.rejected, (state, action) => {
      state.isLoading = false;
      state.queryStatus = 'rejected';
      state.errorMessage = `${action.payload}`;
    });
    builder.addCase(searchVideosStats.pending, (state) => {
      state.statsQueryStatus = 'pending';
    });
    builder.addCase(searchVideosStats.fulfilled, (state, action) => {
      const payload = action.payload as ISearchVideoStatsResponse;
      state.videos.map(video => {
        video.viewCount = payload.items.filter(el => el.id === video.videoId)[0]?.statistics.viewCount;
        return video;
      });
      state.statsQueryStatus = 'fulfilled';
    });
    builder.addCase(searchVideosStats.rejected, (state, action) => {
      state.statsQueryStatus = 'rejected';
      console.log('view counts recive error', action.payload);
    });
  },
});

export const { setQuery, logOut, setIsQueryInFavorites } = youtubeSearchSlice.actions;
export default youtubeSearchSlice.reducer;
