import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Menu, Row, Col, Avatar, Tooltip, Typography } from 'antd';

import { setUserId } from '../../store/userSlice';
import { logOut } from '../../store/youtubeSearchSlice';
import { setFavoritesToInitialState } from '../../store/favoritesSlice';

import { auth } from '../../api/firebase';

import { LogoIcon } from '../Logo';

import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const reduxDispatch = useDispatch();
  const { pathname } = useLocation();
  const user = auth.currentUser;

  return (
    <Row
      align="middle"
      wrap={false}
    >
      <Col flex='none'>
        <div className={styles.logoWrapper}>
          <LogoIcon
            width={44}
            height={44}
          />
        </div>
      </Col>
      <Col flex='auto'>
        <Menu
          mode='horizontal'
          selectedKeys={[pathname]}
          style={{ borderColor: 'transparent' }}
        >
          <Menu.Item key='/'>
            <NavLink
              to={'/'}
              className={styles.navlink}
            >
              Поиск
            </NavLink>
          </Menu.Item>
          <Menu.Item key='/favorites'>
            <NavLink
              to={'/favorites'}
              className={styles.navlink}
            >
              Избранное
            </NavLink>
          </Menu.Item>
        </Menu>
      </Col>
      <Col flex='none'>
        <Tooltip
          placement='bottomRight'
          color='#ffffff'
          trigger={['click', 'hover']}
          title={
            <>
              <Typography.Text
                strong
                style={{
                  display: 'block',
                  marginBottom: 5,
                }}
              >
                {user?.email ? `Пользователь: ${user.email}` : ''}
              </Typography.Text>
              <NavLink
                className={styles.navlink}
                style={{
                  display: 'block',
                  textAlign: 'center',
                }}
                to={'/login'}
                onClick={() => {
                  signOut(getAuth());
                  localStorage.removeItem('authToken');
                  reduxDispatch(setUserId(''));
                  reduxDispatch(logOut());
                  reduxDispatch(setFavoritesToInitialState());
                }}
              >
                Выйти
              </NavLink>
            </>
          }
        >
          <Avatar
            shape="square"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 16,
              color: '#ffffff',
              backgroundColor: '#1890ff',
              cursor: 'pointer',
            }}
          >
            {user?.email?.charAt(0).toUpperCase() || 'П'}
          </Avatar>
        </Tooltip>
      </Col>
    </Row>
  );
};

export default Header;
