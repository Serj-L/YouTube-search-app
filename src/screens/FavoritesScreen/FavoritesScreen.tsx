import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { List, Typography, Row, Col, Modal, notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { RootState } from '../../store';
import { editFavoriteItem, deleteFavoriteItem } from '../../store/favoritesSlice';
import { searchVideos, setQuery, setIsQueryInFavorites } from '../../store/youtubeSearchSlice';
import { setCurrentRoute } from '../../store/routeSlice';

import { IFavoritesInput } from '../../api/types';

import { FavoritesForm } from '../../components/index';

import styles from './FavoritesScreen.module.css';

interface FavoritesScreenProps {}

const isInFavorites = (searchQuery: string, id: string, favorites: IFavoritesInput[] ): boolean => {
  return favorites.filter(el => el.query === searchQuery && el.id !== id).length ? true : false;
};

const { confirm } = Modal;

const openNotificationWithIcon = (type: 'success' | 'info' | 'warning' | 'error',
  message: string,
  description: string,
  placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight') => {
  notification[type]({
    message,
    description,
    placement,
  });
};

const FavoritesScreen: FC<FavoritesScreenProps> = () => {
  const reduxDispatch = useDispatch();
  const history = useHistory();
  const { favorites } = useSelector((state: RootState) => state.favorites);
  const { userId } = useSelector((state: RootState) => state.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<IFavoritesInput>({
    id: '',
    title: '',
    query: '',
    order: 'relevance',
    resultsPerPage: 12,
  });

  const showConfirm = (title: string, id: string, userId: string) => {
    confirm({
      title: `Удалить запрос «${title}» из «Избранного»?`,
      icon: <ExclamationCircleOutlined />,
      okText: 'Удалить',
      cancelText: 'Отмена',
      onOk() {
        reduxDispatch(deleteFavoriteItem({ id, userId }));
      },
    });
  };

  const showConfirmOpenQuery = (favoriteItem: IFavoritesInput) => {
    const orderName = {
      relevance: 'Без сортировки',
      title: 'По названию',
      date: 'По дате релиза',
      viewCount: 'По количеству просмотров',
      rating: 'По рейтингу',
    };

    confirm({
      title: 'Выполнить запрос ?',
      content:
      <>
        <Typography.Text style={{ display: 'block', marginBottom: 5 }}>Название: «{favoriteItem.title}»</Typography.Text>
        <Typography.Text style={{ display: 'block', marginBottom: 5 }}>Запрос: «{favoriteItem.query}»</Typography.Text>
        <Typography.Text style={{ display: 'block', marginBottom: 5 }}>Сортировка: «{orderName[favoriteItem.order]}»</Typography.Text>
        <Typography.Text style={{ display: 'block' }}>Max количество видео: «{favoriteItem.resultsPerPage}»</Typography.Text>
      </>,
      okText: 'Выполнить',
      cancelText: 'Отмена',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        makeSearch(favoriteItem.id);
      },
    });
  };

  const onEditFavoriteItem = (values: IFavoritesInput) => {
    if (isInFavorites(values.query, activeItem.id, favorites)) {
      openNotificationWithIcon('warning', `Запрос «${values.query}» уже сохранен в «Избранном»`, 'Отредактируйте, пожалуйста, текст запроса, что бы сохранить изменения', 'topRight');
      return;
    }
    reduxDispatch(editFavoriteItem({ ...values, userId, id: activeItem.id }));
    setIsModalVisible(false);
  };

  const makeSearch = (id: string) => {
    const searchInput = favorites.filter(el => el.id === id)[0];
    reduxDispatch(setQuery({ query: searchInput.query }));
    reduxDispatch(searchVideos({
      q: searchInput.query,
      order: searchInput.order ? searchInput.order : 'relevance',
      resultsPerPage: searchInput.resultsPerPage,
      maxResults: searchInput.resultsPerPage }));

    history.push('/');
    reduxDispatch(setCurrentRoute('/'));
    reduxDispatch(setIsQueryInFavorites({ value: true }));
  };

  return (
    <>
      <Row
        justify="center"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 22 }}
          md={{ span: 22 }}
          lg={{ span: 20 }}
          xxl={{ span: 16 }}
        >
          <h2 className={styles.title}>Избранное</h2>
          <List
            className={styles.favoritesList}
            dataSource={favorites}
            renderItem={item => (
              <List.Item
                key={item.id}
                style={{ flexWrap: 'nowrap' }}
                actions={[
                  <a
                    className={styles.editLink}
                    key="list-loadmore-edit"
                    onClick={() => {
                      setActiveItem(favorites.filter(el => el.id === item.id)[0]);
                      setIsModalVisible(true);
                    }}
                  >
                  Изменить
                  </a>,
                  <a
                    className={styles.deleteLink}
                    key="list-loadmore-more"
                    onClick={() => showConfirm(item.query, item.id, userId)}
                  >
                  Удалить
                  </a>,
                ]}
              >
                <Typography.Paragraph
                  className={styles.itemTitle}
                  style={{ margin: 0 }}
                  ellipsis={{ rows: 1, expandable: false }}
                  onClick={() => showConfirmOpenQuery(item)}
                >
                  {item.query}
                </Typography.Paragraph>
              </List.Item>
            )}
          />
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
          Изменить запрос
        </h3>
        <FavoritesForm
          initialValues={{
            id: activeItem.id,
            title: activeItem.title,
            query: activeItem.query,
            order: activeItem.order,
            resultsPerPage: activeItem.resultsPerPage,
          }}
          editMode={true}
          onSubmit={onEditFavoriteItem}
          onCancel={() => setIsModalVisible(false)}
        />
      </Modal>
    </>
  );
};

export default FavoritesScreen;
