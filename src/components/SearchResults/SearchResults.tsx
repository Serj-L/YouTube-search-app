import { FC } from 'react';
import { useSelector } from 'react-redux';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

import { RootState } from '../../store';

import styles from './SearchResults.module.css';

interface SearchResultsProps {}

const SearchResults: FC<SearchResultsProps> = () => {
  const search = useSelector((state: RootState) => state.youtubeSeach);

  if (!search.videos.length) return null;
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
    </div>
  );
};

export default SearchResults;
