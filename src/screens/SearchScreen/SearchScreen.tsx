import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Row, Col, Modal } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { v4 as uuidV4 } from 'uuid';

import { RootState } from '../../store';
import { searchVideos, searchVideosStats, setQuery } from '../../store/youtubeSearchSlice';
import { setFavorites } from '../../store/favoritesSlice';

import { IFavoritesInput } from '../../api/types';

import { SearchResults, FavoritesForm } from '../../components/index';

const { Search } = Input;

interface SearchScreenProps {}

const SearchScreen: FC<SearchScreenProps> = () => {
  const reduxDispatch = useDispatch();
  const search = useSelector((state: RootState) => state.youtubeSearch);
  const { userId } = useSelector((state: RootState) => state.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect (() => {
    setSearchQuery(search.query);
  }, [search.query]);

  useEffect (() => {
    if (search.queryStatus !== 'fulfilled') return;
    reduxDispatch(searchVideosStats(search.videoIdList));
  }, [reduxDispatch, search.queryStatus, search.videoIdList]);

  const makeSearch = (q: string) => {
    if (!q) return;

    reduxDispatch(setQuery({ query: searchQuery }));
    reduxDispatch(searchVideos({ q: searchQuery }));
  };

  const saveToFavorites = (values: IFavoritesInput) => {
    reduxDispatch(setFavorites({ ...values, userId, id: uuidV4() }));
    setIsModalVisible(false);
  };

  const suffix = (
    <HeartOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
        cursor: 'pointer',
        visibility: search.videos.length ? 'visible' : 'hidden',
      }}
      onClick={() => setIsModalVisible(true)}
    />
  );

  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: '80vh' }}
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
            loading={search.isLoading}
            suffix={suffix}
            defaultValue={search.query}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={makeSearch}
          />

          <SearchResults />
        </Col>
      </Row>
      <Modal
        title={null}
        visible={isModalVisible}
        closable={false}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <h3
          style={{
            fontFamily: 'Roboto, sans-serif',
            textAlign: 'center', fontSize: 18,
            margin: 0,
            padding: '15px 0 35px',
          }}
        >
          Сохранить запрос
        </h3>
        <FavoritesForm
          initialValues={{
            id: '',
            title: '',
            query: searchQuery,
            order: null,
            resultsPerPage: 12,
          }}
          onSubmit={saveToFavorites}
          onCancel={() => setIsModalVisible(false)}
        />
      </Modal>
    </>
  );
};

export default SearchScreen;
