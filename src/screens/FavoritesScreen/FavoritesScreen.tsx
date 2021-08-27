import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Typography, Row, Col, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { RootState } from '../../store';
import { editFavoriteItem, deleteFavoriteItem } from '../../store/favoritesSlice';

import { IFavoritesInput } from '../../api/types';

import { FavoritesForm } from '../../components/index';

import styles from './FavoritesScreen.module.css';

interface FavoritesScreenProps {}

const { confirm } = Modal;

const FavoritesScreen: FC<FavoritesScreenProps> = () => {
  const reduxDispatch = useDispatch();
  const { favorites } = useSelector((state: RootState) => state.favorites);
  const { userId } = useSelector((state: RootState) => state.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<IFavoritesInput>({
    id: '',
    title: '',
    query: '',
    order: null,
    resultsPerPage: 12,
  });

  const showConfirm = (title: string, id: string, userId: string) => {
    confirm({
      title: `Вы хотите удалить запрос ${title} из Избранного?`,
      icon: <ExclamationCircleOutlined />,
      onOk() {
        reduxDispatch(deleteFavoriteItem({ id, userId }));
      },
    });
  };

  const onEditFavoriteItem = (values: IFavoritesInput) => {
    reduxDispatch(editFavoriteItem({ ...values, userId, id: activeItem.id }));
    setIsModalVisible(false);
  };

  return (
    <>
      <Row
        justify="center"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 22 }}
          md={{ span: 18 }}
          lg={{ span: 16 }}
        >
          <h2 className={styles.title}>Избранное</h2>
          <List
            className={styles.favoritesList}
            dataSource={favorites}
            renderItem={item => (
              <List.Item
                key={item.id}
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
                    onClick={() => showConfirm(item.title, item.id, userId)}
                  >
                  Удалить
                  </a>,
                ]}
              >
                <Typography.Text
                  className={styles.itemTitle}
                  onClick={() => console.log('search')}
                >
                  {item.title}
                </Typography.Text>
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
