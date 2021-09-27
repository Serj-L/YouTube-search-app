import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography,Row, Col, Space, Button } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

import { RootState } from '../../store';
import { setSearchResultsViewType, setSearchScreenYOffset } from '../../store/screenParamsSlice';

import { ListView, CardsView } from '../../components/';
import { numFormatter } from '../../components/utils/utils';

import styles from './SearchResults.module.css';

interface SearchResultsProps {}

const SearchResults: FC<SearchResultsProps> = () => {
  const reduxDispatch = useDispatch();
  const search = useSelector((state: RootState) => state.youtubeSearch);
  const videoList = useSelector((state: RootState) => state.youtubeSearch.videos);
  const { isMobile, searchResultsViewType, searchScreenYOffset } = useSelector((state: RootState) => state.screenParams);

  if (search.queryStatus !== 'fulfilled' && search.statsQueryStatus !== 'fulfilled') return null;

  return (
    <div
      className={styles.wrapper}>
      <Row className={styles.searchInfoWrapper}>
        <Col flex='auto'>
          <Typography.Text className={styles.queryTitle}>Видео по запросу</Typography.Text>
          <Typography.Text
            className={styles.queryTitle}
            strong
          >
            {`«${search.query}»`}
          </Typography.Text>
          <Typography.Text
            className={styles.videosCount}
            style={{ color: 'rgba(23, 23, 25, 0.3)' }}
          >
            {numFormatter.format(search.totalCount)}
          </Typography.Text>
        </Col>
        <Col flex='60px'>
          <Space>
            <Button
              type='text'
              style={{
                padding: 5,
                color: searchResultsViewType === 'list' ? '#000000' : 'rgba(23, 23, 25, 0.3)',
              }}
              disabled={searchResultsViewType === 'list'}
              onClick = {() => {
                reduxDispatch(setSearchResultsViewType('list'));
                if (isMobile && searchScreenYOffset !== window.pageYOffset) reduxDispatch(setSearchScreenYOffset(window.pageYOffset));
              }}
            >
              <UnorderedListOutlined style={{ fontSize: 20 }} />
            </Button>
            <Button
              type='text'
              style={{
                padding: 5,
                color: searchResultsViewType === 'cards' ? '#000000' : 'rgba(23, 23, 25, 0.3)',
              }}
              disabled={searchResultsViewType === 'cards'}
              onClick = {() => {
                reduxDispatch(setSearchResultsViewType('cards'));
                if (isMobile && searchScreenYOffset !== window.pageYOffset) reduxDispatch(setSearchScreenYOffset(window.pageYOffset));
              }}
            >
              <AppstoreOutlined style={{ fontSize: 20 }} />
            </Button>
          </Space>
        </Col>
      </Row>
      {searchResultsViewType === 'list'
        ? <ListView data={videoList} />
        : <CardsView data={videoList} />
      }
    </div>
  );
};

export default SearchResults;
