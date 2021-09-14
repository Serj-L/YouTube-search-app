import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Menu, Row, Col } from 'antd';

import { setUserId } from '../../store/userSlice';
import { logOut } from '../../store/youtubeSearchSlice';
import { setFavoritesToInitialState } from '../../store/favoritesSlice';

import { LogoIcon } from '../Logo';

import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const reduxDispatch = useDispatch();
  const { pathname } = useLocation();

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
        <Menu
          mode='horizontal'
          style={{ borderColor: 'transparent' }}
        >
          <Menu.Item key='logout'>
            <NavLink
              className={styles.navlink}
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
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Header;
