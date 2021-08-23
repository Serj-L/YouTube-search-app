import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { searchVideos, setQuery } from '../../store/youtubeSearchSlice';
import { RootState } from '../../store';

const { Search } = Input;

interface SearchScreenProps {}

const SearchScreen: FC<SearchScreenProps> = () => {
  const reduxDispatch = useDispatch();
  const search = useSelector((state: RootState) => state.youtubeSeach);

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
      }}
      onClick={openModal}
    />
  );

  return (
    <div>
      <Search
        placeholder="Что хотите посмотреть?"
        enterButton="Найти"
        size="large"
        loading={search.isLoading}
        onSearch={makeSearch}
        suffix={suffix}
      />
    </div>
  );
};

export default SearchScreen;
