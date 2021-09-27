import { FC, useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { List, Typography, Row, Col, Modal, notification, Empty, Spin } from 'antd';
import { ExclamationCircleOutlined, LoadingOutlined } from '@ant-design/icons';

import { RootState } from '../../store';
import { editFavoriteItem, deleteFavoriteItem } from '../../store/favoritesSlice';
import { searchVideos, setQuery, setIsQueryInFavorites } from '../../store/youtubeSearchSlice';
import { setFavoriteScreenYOffset } from '../../store/screenParamsSlice';

import { IFavoritesInput } from '../../api/types';

import { FavoritesForm } from '../../components';

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
  const routeHistory = useHistory();
  const { isQueryInFavorites } = useSelector((state: RootState) => state.youtubeSearch);
  const { favorites, isLoading, isError } = useSelector((state: RootState) => state.favorites);
  const { isMobile, favoriteScreenYOffset } = useSelector((state: RootState) => state.screenParams);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<IFavoritesInput>({
    id: '',
    title: '',
    query: '',
    order: 'relevance',
    resultsPerPage: 1,
  });

  useEffect (() => {
    if (!isMobile) return;

    window.scrollTo(0, favoriteScreenYOffset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.pageYOffset]);

  useLayoutEffect (() => {
    if (!isMobile) return;

    return () => {
      if (favoriteScreenYOffset === window.pageYOffset) return;
      reduxDispatch(setFavoriteScreenYOffset(window.pageYOffset));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, reduxDispatch]);

  const showConfirm = (title: string, id: string) => {
    confirm({
      title: `Удалить запрос «${title}» из «Избранного»?`,
      icon: <ExclamationCircleOutlined />,
      okText: 'Удалить',
      cancelText: 'Отмена',
      onOk() {
        reduxDispatch(deleteFavoriteItem({ id }));
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
    const lowerCaseTrimQuery = values.query.toLowerCase().trim();

    if (isInFavorites(lowerCaseTrimQuery, activeItem.id, favorites)) {
      openNotificationWithIcon('warning', `Запрос «${lowerCaseTrimQuery}» уже сохранен в «Избранном»`, 'Отредактируйте, пожалуйста, текст запроса, что бы сохранить изменения', 'topRight');
      return;
    }
    reduxDispatch(editFavoriteItem({ ...values, query: lowerCaseTrimQuery, id: activeItem.id }));
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

    routeHistory.push('/');
    if (!isQueryInFavorites) reduxDispatch(setIsQueryInFavorites({ value: true }));
  };

  return isLoading
    ? (
      <Row
        justify="center"
        style={{ paddingTop: 120 }}
      >
        <Spin
          indicator={<LoadingOutlined
            style={{ fontSize: 48 }}
            spin />}
        />
      </Row>
    )
    : (
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
            {!favorites.length ?
              <Row
                justify="center"
              >
                <Col flex='auto'>
                  <Empty description={isError ? 'Ошибка загрузки данных.' : 'У Вас пока нет сохраненных запросов.'}/>
                </Col>
              </Row> :
              <List
                className={styles.favoritesList}
                dataSource={favorites}
                renderItem={item => (
                  <List.Item
                    key={item.id}
                    style={{
                      flexWrap: 'nowrap',
                      fontSize: 16,
                    }}
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
                        onClick={() => showConfirm(item.query, item.id)}
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
            }
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
