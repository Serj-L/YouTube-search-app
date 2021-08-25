import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Row, Col } from 'antd';
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
    if (search.queryStatus !== 'fulfilled') return;
    reduxDispatch(searchVideosStats(search.videoIdList));
  }, [reduxDispatch, search.queryStatus, search.videoIdList]);

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
    <Row
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 22 }}
        md={{ span: 18 }}
        lg={{ span: 16 }}
      >
        <h1>Поиск видео</h1>
        <Search
          placeholder="Что хотите посмотреть?"
          enterButton="Найти"
          size="large"
          defaultValue={search.query}
          loading={search.isLoading}
          onSearch={makeSearch}
          suffix={suffix}
        />

        <SearchResults />
      </Col>
    </Row>
  );
};

export default SearchScreen;
