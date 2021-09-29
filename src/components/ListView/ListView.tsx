import { FC } from 'react';
import { List, Image, Typography } from 'antd';

import { IVideoItem } from '../../store/youtubeSearchSlice';

import { numFormatter, declOfNum } from '../utils/utils';

import styles from './ListView.module.css';

interface ListViewProps {
  data: IVideoItem[];
}

const ListView: FC<ListViewProps> = ({ data }) => {

  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={item => (
        <List.Item key={item.videoId}>
          <List.Item.Meta
            style={{ height: 88 }}
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
                style={{ margin: 0 }}
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
              <Typography.Paragraph
                className={styles.viewsCount}
                style={{
                  color: 'rgba(23, 23, 25, 0.3)',
                  margin: 0,
                }}
                ellipsis={{ rows: 1, expandable: false }}
              >
                <Typography.Link
                  className={styles.channelLink}
                  style={{ color: 'rgba(23, 23, 25, 0.3)' }}
                  href={`https://www.youtube.com/channel/${item.channelId}`}
                  target='_blank'
                >
                  {item.channelTitle}
                </Typography.Link>
                <br />
                {!item.viewCount ? 'Нет данных о количестве просмотров' :
                  Number(item.viewCount) / 1000 >= 1 ?
                    `${numFormatter.format(Math.round(Number(item.viewCount) / 1000))} тыс. просмотров` :
                    `${item.viewCount} ${declOfNum(Number(item.viewCount),['просмотр', 'просмотра', 'просмотров'])}`}
              </Typography.Paragraph>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default ListView;
