import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { List, Image, Typography,Row, Col, Space, Button, Card } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

import { RootState } from '../../store';

import styles from './SearchResults.module.css';

interface SearchResultsProps {}

const numFormatter = new Intl.NumberFormat('ru');

function declOfNum (number: number, words: string[]): string {
  const x = Math.abs(number) % 100;
  const y = x % 10;
  if (x > 10 && x < 20) { return words[2]; }
  if (y > 1 && y < 5) { return words[1]; }
  if (y === 1) { return words[0]; }
  return words[2];
}

const SearchResults: FC<SearchResultsProps> = () => {
  const search = useSelector((state: RootState) => state.youtubeSearch);
  const videoList = useSelector((state: RootState) => state.youtubeSearch.videos);
  const [viewType, setViewType] = useState('list');

  if (search.queryStatus !== 'fulfilled' && search.statsQueryStatus !== 'fulfilled') return null;
  return (
    <div className={styles.wrapper}>
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
                color: viewType === 'list' ? '#000000' : 'rgba(23, 23, 25, 0.3)',
              }}
              disabled={viewType === 'list'}
              onClick = {() => setViewType('list')}
            >
              <UnorderedListOutlined style={{ fontSize: 20 }} />
            </Button>
            <Button
              type='text'
              style={{
                padding: 5,
                color: viewType === 'cards' ? '#000000' : 'rgba(23, 23, 25, 0.3)',
              }}
              disabled={viewType === 'cards'}
              onClick = {() => setViewType('cards')}
            >
              <AppstoreOutlined style={{ fontSize: 20 }} />
            </Button>
          </Space>
        </Col>
      </Row>
      {viewType === 'list' ?
        <List
          itemLayout="horizontal"
          dataSource={videoList}
          renderItem={item => (
            <List.Item key={item.videoId}>
              <List.Item.Meta
                avatar={
                  <Typography.Link
                    href={`https://www.youtube.com/watch?v=${item.videoId}`}
                    target='_blank'
                  >
                    <Image
                      preview={false}
                      width={157}
                      height={88}
                      src={item.thumbnail.url}
                      alt='Video preview'
                    />
                  </Typography.Link>
                }
                title={
                  <Typography.Paragraph
                    ellipsis={{ rows: 2, expandable: false }}
                    style={{ marginBottom: 8 }}
                  >
                    <Typography.Link
                      className={styles.videoLink}
                      href={`https://www.youtube.com/watch?v=${item.videoId}`}
                      target='_blank'
                    >
                      {item.title} | {item.description}
                    </Typography.Link>
                  </Typography.Paragraph>
                }
                description={
                  <Typography.Text
                    className={styles.viewsCount}
                    style={{ color: 'rgba(23, 23, 25, 0.3)' }}
                  >
                    <Typography.Link
                      className={styles.channelLink}
                      href={`https://www.youtube.com/channel/${item.channelId}`}
                      target='_blank'
                      style={{ color: 'rgba(23, 23, 25, 0.3)' }}
                    >
                      {item.channelTitle}
                    </Typography.Link>
                    <br />
                    {!item.viewCount ? 'Нет данных о количестве просмотров' :
                      Number(item.viewCount) / 1000 >= 1 ?
                        `${numFormatter.format(Math.round(Number(item.viewCount) / 1000))} тыс. просмотров` :
                        `${item.viewCount} ${declOfNum(Number(item.viewCount),['просмотр', 'просмотра', 'просмотров'])}`}
                  </Typography.Text> }
              />
            </List.Item>
          )}
        /> :
        <ul className={styles.videoList}>
          {videoList.map(video => {
            return (
              <li
                key = {video.videoId}
                className={styles.videoListItem}
              >
                <Card
                  bodyStyle={{
                    padding: 0,
                  }}
                  style={{
                    width: 245,
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                  cover={
                    <Typography.Link
                      href={`https://www.youtube.com/watch?v=${video.videoId}`}
                      target='_blank'
                    >
                      <Image
                        preview={false}
                        width={245}
                        height={138}
                        src={video.thumbnail.url}
                        alt='Video preview'
                      />
                    </Typography.Link>
                  }
                >
                  <Card.Meta
                    description={
                      <>
                        <Typography.Paragraph
                          ellipsis={{ rows: 2, expandable: false }}
                          style={{ marginBottom: 8 }}
                        >
                          <Typography.Link
                            className={styles.videoLink}
                            href={`https://www.youtube.com/watch?v=${video.videoId}`}
                            target='_blank'
                          >
                            {video.title} | {video.description}
                          </Typography.Link>
                        </Typography.Paragraph>
                        <Typography.Text
                          className={styles.viewsCount}
                          style={{ color: 'rgba(23, 23, 25, 0.3)' }}
                        >
                          <Typography.Link
                            className={styles.channelLink}
                            href={`https://www.youtube.com/channel/${video.channelId}`}
                            target='_blank'
                            style={{ color: 'rgba(23, 23, 25, 0.3)' }}
                          >
                            {video.channelTitle}
                          </Typography.Link>
                          <br />
                          {Number(video.viewCount) / 1000 >= 1 ?
                            `${numFormatter.format(Math.round(Number(video.viewCount) / 1000))} тыс. просмотров` :
                            `${video.viewCount} ${declOfNum(Number(video.viewCount),['просмотр', 'просмотра', 'просмотров'])}`}
                        </Typography.Text>
                      </>
                    }
                  />
                </Card>
              </li>
            );
          })
          }
        </ul>
      }
    </div>
  );
};

export default SearchResults;
