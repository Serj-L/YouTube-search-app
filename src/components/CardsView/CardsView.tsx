import { FC } from 'react';
import { Card, Image, Typography } from 'antd';

import { IVideoItem } from '../../store/youtubeSearchSlice';

import { numFormatter, declOfNum } from '../utils/utils';

import styles from './CardsView.module.css';

interface CardsViewProps {
  data: IVideoItem[];
}

const CardsView: FC<CardsViewProps> = ({ data }) => {

  return (
    <ul className={styles.videoList}>
      {data.map(item => {
        return (
          <li
            key = {item.videoId}
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
                  href={`https://www.youtube.com/watch?v=${item.videoId}`}
                  target='_blank'
                >
                  <Image
                    preview={false}
                    width={245}
                    height={138}
                    src={item.thumbnail.url}
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
                        href={`https://www.youtube.com/watch?v=${item.videoId}`}
                        target='_blank'
                      >
                        {item.title} | {item.description}
                      </Typography.Link>
                    </Typography.Paragraph>
                    <Typography.Paragraph
                      className={styles.viewsCount}
                      style={{ color: 'rgba(23, 23, 25, 0.3)' }}
                      ellipsis={{ rows: 1, expandable: false }}
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
                      {Number(item.viewCount) / 1000 >= 1 ?
                        `${numFormatter.format(Math.round(Number(item.viewCount) / 1000))} тыс. просмотров` :
                        `${item.viewCount} ${declOfNum(Number(item.viewCount),['просмотр', 'просмотра', 'просмотров'])}`}
                    </Typography.Paragraph>
                  </>
                }
              />
            </Card>
          </li>
        );
      })
      }
    </ul>
  );
};

export default CardsView;
