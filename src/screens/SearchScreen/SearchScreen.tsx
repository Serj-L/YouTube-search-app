import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { searchVideos, searchVideosStats, setQuery } from '../../store/youtubeSearchSlice';
import { RootState } from '../../store';

import { SearchResults } from '../../components/index';

const { Search } = Input;

interface SearchScreenProps {}

const SearchScreen: FC<SearchScreenProps> = () => {
  const reduxDispatch = useDispatch();
  const search = useSelector((state: RootState) => state.youtubeSeach);

  useEffect (() => {
    if (search.videos.length === 0) return;
    let videosId = '';
    search.videos.forEach((video, idx, arr) => {
      idx < arr.length - 1 ? videosId += (video.videoId + ',') : videosId += video.videoId;
    });
    reduxDispatch(searchVideosStats(videosId));
  }, [reduxDispatch, search.videos]);

  const makeSearch = (q: string) => {
    if (!q) {
      return;
    }

    reduxDispatch(setQuery({ query: q }));
    reduxDispatch(searchVideos({ q }));
  };

  const openModal = () => {
    console.log('OK');
  };

  const suffix = (
    <HeartOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
        cursor: 'pointer',
        visibility: search.videos.length ? 'visible' : 'hidden',
      }}
      onClick={openModal}
    />
  );

  return (
    <div>
      <h1>Поиск видео</h1>
      <Search
        placeholder="Что хотите посмотреть?"
        enterButton="Найти"
        size="large"
        loading={search.isLoading}
        onSearch={makeSearch}
        suffix={suffix}
      />
      <SearchResults />
    </div>
  );
};

export default SearchScreen;
