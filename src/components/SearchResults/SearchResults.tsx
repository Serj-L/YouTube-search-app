import { FC } from 'react';
import { useSelector } from 'react-redux';
import { List, Image, Typography } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

import { RootState } from '../../store';

import styles from './SearchResults.module.css';

interface SearchResultsProps {}

const numFormatter = new Intl.NumberFormat();

const SearchResults: FC<SearchResultsProps> = () => {
  const search = useSelector((state: RootState) => state.youtubeSeach);
  const videoList = useSelector((state: RootState) => state.youtubeSeach.videos);

  if (search.queryStatus !== 'fulfilled' && search.statsQueryStatus !== 'fulfilled') return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoControlsWrapper}>
        <div className={styles.infoWrapper}>
          <span>Видео по запросу `<span>{search.query}</span>` </span>
          <span>{search.totalCount}</span>
        </div>
        <div className={styles.controlsWrapper}>
          <UnorderedListOutlined />
          <AppstoreOutlined />
        </div>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={videoList}
        renderItem={item => (
          <List.Item key={item.videoId}>
            <List.Item.Meta
              avatar={
                <Image
                  width={155}
                  height={85}
                  fallback='../../img/NoPreview.svg'
                  src={item.thumbnail.url}
                  alt='Video preview'
                />
              }
              title={<Typography.Text>{item.title} | {item.description}</Typography.Text>}
              description={
                <Typography.Text>
                  {item.chanelTitle} <br />{Number(item.viewCount) / 1000 >= 1 ?
                    `${numFormatter.format(Math.round(Number(item.viewCount) / 1000))} тыс. просмотров` :
                    `${item.viewCount} просмотров`}
                </Typography.Text> }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchResults;
